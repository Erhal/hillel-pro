import React from 'react';

const Button = (props) => {
    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <button type='button' onClick={props.onClick} style={{fontSize: '18px', padding: '10px', backgroundColor: 'steelblue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
                <span>{props.buttonText}</span>
            </button>
        </div>
    );
};

export default Button;
