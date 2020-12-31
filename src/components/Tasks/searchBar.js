import React,{useState, useEffect} from 'react';
import styles from './task.module.css';
export default function SearchBar(props){


  const text = props.value;
  

    useEffect(()=>{

    });

    return(
        <input
        className = {styles.searchBar}
        inputMode = 'search'
        type = 'text'
        placeholder = 'Search For Anything...'
        value = {props.value}
        onChange = {event=> props.onChange(event.target.value)}/>
    
    )
}