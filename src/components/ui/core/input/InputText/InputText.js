import style from './InputText.module.css';
import React, { useState } from 'react';

const InputText = ({ label, placeholder, name,defaultValue, required,onChange}) => {

    return (
        <div className={style.inputblock}>
            <label className={style.label}>
                {label} 
                {required && <span className={style.requiredLabel}>*</span>}
            </label>
            <input
                className={style.input}
                type="text"
                name={name}
                defaultValue={defaultValue}
                required = {required}
            />
        </div>
    );
};

export default InputText;


