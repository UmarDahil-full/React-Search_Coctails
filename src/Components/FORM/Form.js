import React from 'react'

export default function Form({val, setVal, search,filter}) {
    return (
        <div>
    <form onSubmit={search}>

    <input onChange={(e)=>{
        search(e.target.value)
        
    }}
        />
        <select onChange={(e)=>{
            filter(e.target.value)
        }}>
        <option value= 'All'>All</option>
        <option value= 'Alcoholic'>Alcoholic</option>
        <option value= 'Non_Alcoholic'>Non Alcoholic</option>


        </select>


    </form>



            
        </div>
    )
}
