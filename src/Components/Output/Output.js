import React from 'react'
import {Link} from 'react-router-dom'

export default function Output({coctails}) {
    return (
        <div>
        {
            coctails ? coctails.map(el=>{
                return(
                        <>
                <Link to={'detail/' +el.idDrink}><img src={el.strDrinkThumb} alt='' width='300' height='300'/></Link>
                </>
                
                )
            })
           
            : <h3>Something wrong</h3>
        }   


            






        </div>
    )
}
