  import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {API_Ingridient} from  '../../config'
export default function Ingridients(props) {
    const {name} =props.match.params
    const [data, setData] = useState()
    useEffect(() => {
        getIngridients()
    }, [])
    const getIngridients = async()=>{
        let url = API_Ingridient
        const req = await fetch(url+name)
        const res=await req.json()
        console.log(res.ingredients[0])
        setData(res.ingredients[0])
    }
    return (
        <div>
               <Link to={'/'}> <button>HOME PAGE</button></Link>

            <h2>INGRIDIENT PAGE</h2>
            <h2>{data?.strIngredient}</h2>
            <p>{data?.strDescription}</p>

 
        </div>
    )
}
