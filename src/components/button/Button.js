import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function SearchButton() {

    return (
        <>
            <button type="submit" class="button"> <FontAwesomeIcon icon={faSearch} /> <span>Search</span> </button>
        </>
    );
}

export function ResetButton() {

    return (
        <>
            <button type="reset" class="button"> <span>Reset</span> </button>
        </>
    );
}