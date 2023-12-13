import React, { useState, useEffect } from 'react';
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

const aquaticCreatures = [
    { psuNo: 'Shark', id: 'Shark' },
    { psuNo: 'Dolphin', id: 'Dolphin' },
    { psuNo: 'Whale', id: 'Whale' },
    { psuNo: 'Octopus', id: 'Octopus' },
    { psuNo: 'Crab', id: 'Crab' },
    { psuNo: 'Lobster', id: 'Lobster' },
];


export function SearchInputSelect(props) {
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [options, setOptions] = useState(aquaticCreatures);
    const [searchParams, setSearchParams] = useState(props.searchParams);

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
        // console.log("handleChange", selectedOption, actionMeta);
        setSelectedOption(selectedOption);
    };

    const handleInputChange = (inputValue) => {
        // console.log("handleInputChange", inputValue);
        setInputValue(inputValue);
        setSearchParams((prev) => {
            var newObj = prev;
            newObj.pageNumber = 1;
            return newObj;
        });
        fetchDataforDropDown(inputValue);
    };

    const handleOnMenuScrollToBottom = async (event) => {

        console.log("handleOnMenuScrollToBottom", event);

        setSearchParams((prev) => {
            var newObj = prev;
            newObj.pageNumber += 1;
            return newObj;
        });
        console.log(searchParams);
        let data = await fetchData(props.dataUrl, searchParams, null, null);
        console.log(data.length);

        if (data.length > 0) {
            setOptions((prevData) => {
                var newData = Array.from(prevData);
                for (var x in data) {
                    newData.push(data[x])
                }

                return newData;
            });
        }
        console.log(options);
        // setPageNumber( pageNumber+1 );
        // setInputValue(inputValue);
    };



    const fetchDataforDropDown = async (value, callBack) => {

        // searchParams[props.name] = value
        var newObj = { ...searchParams };
        newObj[props.name] = value;
        setSearchParams(newObj);

        let data = await fetchData(props.dataUrl, newObj, null, null);
        setOptions(data);
        return data;
    }

    useEffect(() => {
        // An example asynchronous operation (e.g., fetching data)
        fetchDataforDropDown("");
        // Call the asynchronous function
    }, []);

    return (
        <>
            <div className={style.input} >
                <label className={style.inputLabel} > {props.label} </label>
                <Select
                    cacheOptions
                    defaultOptions
                    value={selectedOption}
                    // options={dropdownData}
                    getOptionLabel={(e) => e[props.optionLabel]}
                    getOptionValue={(e) => e[props.optionValue]}
                    options={options}
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