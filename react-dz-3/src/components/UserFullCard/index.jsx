import React from 'react';
import './style.css';

const UserFullCard = ({user}) => {
    console.log(user);
    return (
        <div className='userInfo col-3 mx-auto card bg-light'>
            <div className="profile mx-4 mb-3">
                <div className="avatar text-center">
                    <img src={user.image} alt="User Image" style={{width: '150px'}}
                         className="img-raised rounded-circle img-fluid border-dark border-opacity-50"/>
                </div>
                <hr/>
                <div className='py-1'>
                    <div className="user__username">
                        <span><strong>Username:</strong> {user.username}</span>
                    </div>
                    <div className="user__age">
                        <span><strong>Age:</strong> {user.age} y.o.</span>
                    </div>
                    <div className="user__gender">
                        <span><strong>Gender:</strong> {user.gender}</span>
                    </div>
                    <div className="user__eye-color">
                        <span><strong>Eye color:</strong> {user.eyeColor}</span>
                    </div>
                    <div className="user__blood-group">
                        <span><strong>Blood group:</strong> {user.bloodGroup}</span>
                    </div>
                    <div className="user__birthDate">
                        <span><strong>Birth date:</strong> {user.birthDate}</span>
                    </div>
                    <div className="user__address">
                        <span><strong>Address:</strong> {user.address?.address}, {user.address?.city}</span>
                    </div>
                    <div className="user__email">
                        <span><strong>Email:</strong> {user.email}</span>
                    </div>
                    <div className="user__phone">
                        <span><strong>Phone:</strong> {user.phone}</span>
                    </div>
                    <div className="user__company">
                        <span><strong>Company:</strong> {user.company?.name}</span>
                    </div>
                    <div className="user__occupation">
                        <span><strong>Occupation:</strong> {user.company?.title} in {user.company?.department} department</span>
                    </div>
                    <div className="user__alma-mater">
                        <span><strong>Alma mater:</strong> {user.university}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserFullCard;