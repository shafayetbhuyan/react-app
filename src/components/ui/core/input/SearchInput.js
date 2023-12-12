import React, { useState } from 'react';
import style from './SearchInput.module.css';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { fetchData } from '../../../../data/api/DataApi';

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

    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

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
            maxHeight: "50px",
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
        // console.log("handleChange", selectedOption, actionMeta);
        setSelectedOption(selectedOption);
    };
    const handleInputChange = (inputValue) => {
        // console.log("handleInputChange", inputValue);
        setInputValue(inputValue);
    };
    const handleOnMenuScrollToBottom = (event) => {
        console.log("handleOnMenuScrollToBottom", event);
        // setPageNumber( pageNumber+1 );
        // setInputValue(inputValue);
    };

    const aquaticCreatures = [
        { label: 'Shark', value: 'Shark' },
        { label: 'Dolphin', value: 'Dolphin' },
        { label: 'Whale', value: 'Whale' },
        { label: 'Octopus', value: 'Octopus' },
        { label: 'Crab', value: 'Crab' },
        { label: 'Lobster', value: 'Lobster' },
    ];


    const fetchDataforDropDown = () => {
        console.log('pageNumber' + pageNumber);
        return fetchData( props.dataUrl ,null, 5, pageNumber);
    }

    return (
        <>
            <div className={style.input} >
                <label className={style.inputLabel} > {props.label} </label>
                <AsyncSelect
                    cacheOptions
                    defaultOptions
                    value={selectedOption}
                    // options={dropdownData}
                    getOptionLabel={(e) => e[props.optionLabel]}
                    getOptionValue={(e) => e[props.optionValue]}
                    loadOptions={fetchDataforDropDown}
                    onChange={handleChange}
                    onInputChange={handleInputChange}
                    onMenuScrollToBottom={handleOnMenuScrollToBottom}
                    isClearable={true}
                    name={props.name}
                    styles={colorStyles} 
                    />
            </div>
        </>
    );
}