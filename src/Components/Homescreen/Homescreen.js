import React from 'react'
import {API} from '../../config';
import {API_FOR_SEARCH_COCTAILS_ByName} from '../../config'
import {API_Alcoholic} from  '../../config'

import { useEffect, useState } from 'react';
import Form from '../FORM/Form';
import Output from '../Output/Output';

export default function Homescreen() {
  const [data, setData]= useState([])
  const [val, setVal]= useState('')
  useEffect(()=>{
    getAllCoctails()
  },[])
  const getAllCoctails = async()=>{
    let url= API
    const req =await fetch(url)
    const res=await req.json()
    console.log(res)
    setData(res.drinks)
  }
  const filter= async(name)=>{
      let url= API_Alcoholic
    const req =  await fetch(url +name)
    const res = await req.json()
    console.log(req)
    setData(res.drinks)

 }


const search= async(val)=>{
  
  let url= API_FOR_SEARCH_COCTAILS_ByName+val
  const req =await fetch(url)
  const res=await req.json()
  console.log(res)
  setData(res.drinks)
}



    return (
        <div>
            <h3>HOME  PAGE</h3> 

            <Form
     val={val}
     setVal={setVal}
     search={search}
     filter={filter}
     />
     <Output
     coctails={data}
     />
        </div>
    )
}
