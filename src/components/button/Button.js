import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import style from './Button.module.css';

export function SearchButton() {

    return (
        <>
            <button type="submit" class={style.button}> <FontAwesomeIcon icon={faSearch} /> <span className={style.buttonLabel}>Search</span> </button>
        </>
    );
}

export function ResetButton() {

    return (
        <>
            <button type="reset" class={style.button}> <span>Reset</span> </button>
        </>
    );
}


export function SearchFormButtons() {

    return (
        <>
            <SearchButton/>
            <ResetButton />
        </>
    );
}