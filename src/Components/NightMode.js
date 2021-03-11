import React,{useContext} from 'react';
import {GlobalContext} from './GlobalState';
export default function NightMode() {
const {toggleTheme} = useContext(GlobalContext);
const {lightTheme} = useContext(GlobalContext);
function themeSwitch(e){
        toggleTheme();
        }
    return (
        <>
        <label htmlFor="checkbox" className="checkbox-holder">
         <input type="checkbox" name="checkbox" className="slider-checkbox" value="toggle"  onChange={e => themeSwitch(e.target.value)} defaultChecked={!lightTheme}/>
         <span className="slider"></span>
         </label> 
        </>
    )
}
