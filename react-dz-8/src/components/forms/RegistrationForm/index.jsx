import {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";

import CitiesSelect from "./CitiesSelect";

import getNormalizedPhone from "../../../helpers/getNormalizedPhone";

import './style.css';

const RegistrationForm = () => {
    const {register, handleSubmit, formState: {errors}, clearErrors, watch, control} = useForm({mode: "all"});
    const onSubmit = data => console.log(data, errors);

    const confirmPasswordRef = useRef();
    const {ref, ...rest} = register('confirmPassword')

    useEffect(() => {
        watch();
    }, []);


    return (
        <div className='min-vh-100 d-flex flex-column justify-content-center align-items-center'>


            <Form className='w-50 bg-body p-5 rounded-5 form-shadow' onSubmit={handleSubmit(onSubmit)}>
            <div><h1 className='display-6 fw-semibold text-center text-muted mb-5'>Create your account</h1></div>

                <div className='d-flex gap-2'>
                    <Form.Group className="w-50 mb-4" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            className={errors?.firstName ? 'is-invalid' : ''}
                            {...register("firstName", {
                                required: "First name is required",
                                pattern: {
                                    value: /^[A-Z-']+$/gi,
                                    message: "First name should contain only latin letters, dashes and apostrophes"
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            <div>
                                {errors?.firstName?.message}
                            </div>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="w-50 mb-4" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            className={errors?.lastName ? 'is-invalid' : ''}
                            {...register("lastName", {
                                required: "Last name is required",
                                pattern: {
                                    value: /^[A-Z-']+$/gi,
                                    message: "Last name should contain only letters, dashes and apostrophes"
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            <div>
                                {errors?.lastName?.message}
                            </div>
                        </Form.Text>
                    </Form.Group>
                </div>

                <div className='d-flex gap-2'>
                    <Form.Group className="w-50 mb-4" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            className={errors?.email ? 'is-invalid' : ''}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9_.-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi,
                                    message: "Invalid email address"
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            <div>
                                {errors?.email?.message}
                            </div>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="w-50 mb-4" controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={'+380'}
                            className={errors?.phone ? 'is-invalid' : ''}
                            {...register("phone", {
                                required: "Phone is required",
                                pattern: {
                                    value: /^\+380\s\((67|96|97|98|50|66|95|99|63|73|93)\)\s\d{3}-\d{2}-\d{2}$/gi,
                                    message: `Invalid phone. Example: +380(67)XXX-XX-XX`
                                },
                                onChange: (e) => {
                                    e.position = e.target.value.length;
                                    e.target.value = getNormalizedPhone(e.target.value);
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            <div>
                                {errors?.phone?.message}
                            </div>
                        </Form.Text>
                    </Form.Group>
                </div>

                <div className='d-flex gap-2'>
                    <Form.Group className="w-50 mb-4" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            className={errors?.password ? 'is-invalid' : ''}
                            {...register("password", {
                                onChange: () => {
                                    if (confirmPasswordRef.current.value.length > 0) {
                                        confirmPasswordRef.current.value = '';
                                        clearErrors('confirmPassword');
                                    }
                                },
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{8,}$/,
                                    message: "Password should contain at least 8 characters, including UPPER/lowercase latin letters"
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            <div>
                                {errors?.password?.message}
                            </div>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="w-50 mb-4" controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            className={errors?.confirmPassword ? 'is-invalid' : ''}
                            {...register("confirmPassword", {
                                required: "Confirm password is required",
                                validate: value => (value === watch('password')) || "The passwords do not match"
                            })}
                            {...rest}
                            ref={(e) => {
                                ref(e)
                                confirmPasswordRef.current = e
                            }}
                        />
                        <Form.Text className="text-danger">
                            <div>
                                {errors?.confirmPassword?.message}
                            </div>
                        </Form.Text>
                    </Form.Group>
                </div>

                <div className='d-flex gap-2'>
                    <Form.Group className="w-50 mb-4" controlId="formCitySelect">
                        <Form.Label>City</Form.Label>
                        <CitiesSelect control={control} name={'city'} error={errors.city}/>
                    </Form.Group>
                    <div className="w-50 mb-3 d-flex justify-content-center align-items-center">
                        <Button variant="outline-success" type="submit" className="w-100">
                            Sign Up
                        </Button>
                    </div>
                </div>

            </Form>
        </div>
    );
};

export default RegistrationForm;