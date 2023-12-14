import style from './InputText.module.css';
import React, { useState } from 'react';

const InputText = ({ label, placeholder, name}) => {

    return (
        <div className={style.inputblock}>
            <label className={style.label}>
                {label} <span className={style.requiredLabel}>*</span>
            </label>
            <input
                className={style.input}
                type="text"
                name={name}
            />
        </div>
    );
};

export default InputText;


