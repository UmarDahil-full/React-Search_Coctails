import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { API_Details } from '../../config'

export default function Detail(props) {
    const {id} =props.match.params
    const [data, setData] = useState()
    useEffect(()=>{
        getDetails()
    },[])
    const getDetails = async()=>{
        let url = API_Details
        const req = await fetch(url+id)
        const res=await req.json()
        console.log(res)
        setData(res.drinks[0])
    }
    
    return (
        <div>
       <Link to={'/'}> <button>HOME PAGE</button></Link>
 
            <h2>DETAIL PAGE</h2>
            <Link to={'/ingridients/'+data?.strIngredient1}>  <h4>{data?.strIngredient1}</h4></Link>    
            <h4>{data?.strGlass}</h4>   
            <Link to={'/ingridients/'+data?.strIngredient3}> <h4>{data?.strIngredient3}</h4></Link>     
    
        <div>
            <img src={data?.strDrinkThumb} alt='' width='400' height='400'/>
            </div>
            </div>
    )
}
