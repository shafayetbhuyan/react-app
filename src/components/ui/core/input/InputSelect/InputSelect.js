import React, { useState, useEffect } from 'react';
import style from './InputSelect.module.css';
import Select from 'react-select';
import { fetchData } from '../../../../../data/api/DataApi';

const aquaticCreatures = [
    { psuNo: '', id: '' },
];

export function InputSelect(props) {

    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [options, setOptions] = useState(aquaticCreatures);
    const [searchParams, setSearchParams] = useState(props.searchParams);
    const colorStyles = {
        control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#828282',
            minHeight: '29px',
            height: '29px',
            fontSize: 13,
            boxSizing: 'border-box',
            borderRadius: '4px',
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
            height: '25px',
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
    };

    const handleInputChange = (inputValue) => {
        setInputValue(inputValue);
        setSearchParams((prev) => {
            var newObj = prev;
            newObj.pageNumber = 1;
            return newObj;
        });
        fetchDataforDropDown(inputValue);
    };

    const handleOnMenuScrollToBottom = async (event) => {
        setSearchParams((prev) => {
            var newObj = prev;
            newObj.pageNumber += 1;
            return newObj;
        });
        let data = await fetchData(props.dataUrl, searchParams, null, null);
        

        if (data.length > 0) {
            setOptions((prevData) => {
                var newData = Array.from(prevData);
                for (var x in data) {
                    newData.push(data[x])
                }
                return newData;
            });
        }
    };
    const fetchDataforDropDown = async (value, callBack) => {
        var newObj = { ...searchParams };
        newObj[props.name] = value;
        setSearchParams(newObj);

        let data = await fetchData(props.dataUrl, newObj, null, null);
        setOptions(data);
        return data;
    }

    useEffect(() => {
        fetchDataforDropDown("");

        if(props.defaultValue){
            setSelectedOption({...props.defaultValue})
        }

    }, []);

    return (
        <>
            <div className={style.input} >
                <label className={style.inputLabel} > {props.label} </label>
                <Select
                    cacheOptions
                    defaultOptions
                    value={selectedOption}
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