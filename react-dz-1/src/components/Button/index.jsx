import React from 'react';

const Button = ({buttonText, onClick}) => {
    return (
        <div style={{textAlign: 'center'}}>
            <button type='button' onClick={onClick} style={{fontSize: '18px', padding: '10px', backgroundColor: 'steelblue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
                <span>{buttonText}</span>
            </button>
        </div>
    );
};

export default Button;
