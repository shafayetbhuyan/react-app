import React, { useState } from 'react';
import style from './SearchInput.module.css';
import Select from 'react-select';
import axios from 'axios';

export function SearchInput(props) {
    return (
        <>
            <div className={style.input} >
                <label className={style.inputLabel}> {props.label} </label>
                <input type="text" name={props.name} className={style.inputField} />
            </div>
        </>
    );
}

export function SearchInputSelect(props) {

    const colorStyles = {
        control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#caced2',
            minHeight: '26px',
            height: '25px',
            fontSize: 13,
            boxSizing: 'border-box',
            borderRadius: '2px',
            boxShadow: state.isFocused ? null : null,
        }),
        option: (provided, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...provided,
                padding: '4px 6px',
                fontSize: 13,
            }
        },
        valueContainer: (provided, state) => ({
            ...provided,
            height: '24px',
            padding: '0 6px'
        }),
        input: (provided, state) => ({
            ...provided,
            margin: '0px',
        }),
        indicatorSeparator: state => ({
            display: 'none',
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
            height: '21px',
        }),
    };

    const handleChange = (selectedOption, actionMeta) => {
        console.log("handleChange", selectedOption, actionMeta);
    };
    const handleInputChange = (inputValue, actionMeta) => {
        console.log("handleInputChange", inputValue, actionMeta);
    };

    const aquaticCreatures = [
        { label: 'Shark', value: 'Shark' },
        { label: 'Dolphin', value: 'Dolphin' },
        { label: 'Whale', value: 'Whale' },
        { label: 'Octopus', value: 'Octopus' },
        { label: 'Crab', value: 'Crab' },
        { label: 'Lobster', value: 'Lobster' },
    ];

    return (
        <>
            <div className={style.input} >
                <label className={style.inputLabel} > {props.label} </label>
                <Select options={aquaticCreatures} name={props.name} onChange={handleChange} onInputChange={handleInputChange} styles={colorStyles} />
            </div>
        </>
    );
}