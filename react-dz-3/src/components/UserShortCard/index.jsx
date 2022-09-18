import React from 'react';
import {Link} from "react-router-dom";

const UserShortCard = ({user}) => {
    return (
        <div className="userCard col mb-5" key={user.id}>
            <div className="card h-100 bg-light">
                <div className='badge bg-secondary position-absolute end-0 mx-1 mt-1'>
                    <span>{user.username}</span>
                </div>
                <img className="card-img-top mx-auto w-50 mt-1" src={user.image} alt="User image"/>
                <div className="card-body p-4 pb-2">
                    <div>
                        <h5 className="user__name fw-bolder text-center">{user.firstName} {user.lastName}</h5>
                        <hr/>
                        <div className="user__age">
                            <span><strong>Age:</strong> {user.age} y.o.</span>
                        </div>
                        <div className="user__gender">
                            <span><strong>Gender:</strong> {user.gender}</span>
                        </div>
                        <div className="user__email">
                            <span><strong>Email:</strong> {user.email}</span>
                        </div>
                        <div className="user__phone">
                            <span><strong>Phone:</strong> {user.phone}</span>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <Link to={`/user/${user.id}`} className="btn btn-outline-dark mt-auto">Show posts</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserShortCard;