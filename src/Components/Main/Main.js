import React from 'react'
import {Switch, Router, Route} from 'react-router-dom'
import Aboutscreen from '../Aboutscreen/Aboutscreen'
import Detail from '../Detail/Detail'
import Homescreen from '../Homescreen/Homescreen'
import Ingridients from '../Ingridients/Ingridients'
import Output from '../Output/Output'

export default function Main() {
    return (
        <div>
    <Switch>
        <Route exact path='/' component={Homescreen}/>
        <Route exact path='/detail/:id' component={Detail}/>
        <Route exact path='/ingridients/:name' component={Ingridients}/>

    </Switch>
        </div>
    )
}
