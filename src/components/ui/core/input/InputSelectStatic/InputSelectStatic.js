import React, { useState, useEffect } from 'react';
import style from './InputSelectStatic.module.css';
import Select from 'react-select';

/* Example */
/*
const aquaticCreatures = [
    { label: 'Shark', value: 'Shark' },
    { label: 'Dolphin', value: 'Dolphin' },
    { label: 'Whale', value: 'Whale' },
    { label: 'Octopus', value: 'Octopus' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
];
*/

export function SearchInputSelect(props) {
    const { options, onChange } = props;
    const [selectedOption, setSelectedOption] = useState(null);
    // const [options, setOptions] = useState(aquaticCreatures);

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
        menuList: (provided) => ({
            ...provided,
            maxHeight: "150px",
            "::-webkit-scrollbar": {
                width: "4px"
            },
            "::-webkit-scrollbar-track": {
                background: "#caced2"
            },
            "::-webkit-scrollbar-thumb": {
                background: "#888"
            },
            "::-webkit-scrollbar-thumb:hover": {
                background: "#555"
            }
        })
    };

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onChange();
    };

    return (
        <>
            <div className={style.input} >
                <label className={style.inputLabel} > {props.label} </label>
                <Select
                    cacheOptions
                    defaultOptions
                    value={selectedOption}
                    // options={dropdownData}
                    // getOptionLabel={(e) => e[props.optionLabel]}
                    // getOptionValue={(e) => e[props.optionValue]}
                    options={options}
                    onChange={handleChange}
                    // onInputChange={handleInputChange}
                    // onMenuScrollToBottom={handleOnMenuScrollToBottom}
                    isClearable={true}
                    name={props.name}
                    styles={colorStyles}
                />
            </div>
        </>
    );
}