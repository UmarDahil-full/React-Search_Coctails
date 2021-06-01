import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <ul>
           <Link to ='/'><li>ГЛАВНОЕ</li></Link>
           <Link to ='/about'><li>О НАС</li></Link>
           <Link to ='/detail/123123'><li>ОДИН КОКТЕЙЛЬ</li></Link>

            </ul>
        </div>
    )
}
