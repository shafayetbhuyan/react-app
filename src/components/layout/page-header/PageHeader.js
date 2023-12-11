import React from 'react';
import style from './header.module.css'

function PageHeader(props){
  return(
    <div className={style.headerDiv}>
    {props.value}</div>

  );
}
export default PageHeader;