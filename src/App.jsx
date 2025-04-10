import { useState } from 'react'
import './App.css'
import { XFollowCard } from './XFollowCard'
export function App (){
    return(
        <section className='App'>
            <XFollowCard userName="midudev" name="Miguel Ángel Durán" />
            <XFollowCard userName="MoureDev" name="Brais Moure" />
            <XFollowCard userName="TheCinesthetic" name="cinesthetic."/>
            <XFollowCard userName="kevin_monca" name="Kevin Moncayo"/>
            <XFollowCard userName="PunchingCat" name="Punch Cat"/>
        </section>
    )
}