import React,{useState, useEffect} from 'react';

export default function SearchBar(props){


  const text = props.value;
  

    useEffect(()=>{

    });

    return(
        <input
        style = {{width:'80%',aspectRatio:2,borderRadius:10,borderColor: 'grey',paddingLeft:20,fontSize:20,borderWidth:1}}
        type = 'text'
        placeholder = 'Search For Anything...'
        value = {props.value}
        onChange = {event=> props.onChange(event.target.value)}/>
    
    )
}