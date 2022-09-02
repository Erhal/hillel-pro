import React from 'react';
import Button from "../Button";

const UserInfo = (props) => {
    const onClick = () => {
        const $userInfo = document.querySelector('.user__info');
        $userInfo.style.display = $userInfo.style.display === 'none' ? 'block' : 'none';
    }

    return (
        <>
            <Button buttonText={'Показать информацию'} onClick={onClick} key={'user-info-button'}/>

            <div className='user__info' style={{textAlign: 'center', marginTop: '20px', display: 'none'}}>
                <div className="user__name">
                    <span>Имя: {props.userName}</span>
                </div>
                <div className="user__age">
                    <span>Возраст: {props.userAge}</span>
                </div>
                <div className="user__sex">
                    <span>Пол: {props.userSex}</span>
                </div>
            </div>

        </>
    );
};

export default UserInfo;
