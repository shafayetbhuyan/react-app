import style from './InputText.module.css';
import React, { useState } from 'react';

const InputText = ({ label, placeholder, name,required}) => {

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
                required = {required}
            />
        </div>
    );
};

export default InputText;


