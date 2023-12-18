import style from './InputHidden.module.css';
import React, { useState } from 'react';

const InputHidden = ({ label, placeholder, name,defaultValue, required,onChange}) => {

    return (
        <div className={style.inputblock}>
            {/* <label className={style.label}>
                {label} 
                {required && <span className={style.requiredLabel}>*</span>}
            </label> */}
            <input
                className={style.input}
                type="hidden"
                name={name}
                defaultValue={defaultValue}
                required = {required}
            />
        </div>
    );
};

export default InputHidden;


