import React from 'react';

const UserInfo = ({name, age, sex}) => {

    return (
        <div className='user__info'>
            <div className="user__name">
                <span>Имя: {name}</span>
            </div>
            <div className="user__age">
                <span>Возраст: {age}</span>
            </div>
            <div className="user__sex">
                <span>Пол: {sex}</span>
            </div>
        </div>
    );
};

export default UserInfo;
