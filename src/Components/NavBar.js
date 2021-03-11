import React,{useContext, useState} from 'react';
import {GlobalContext} from './GlobalState';
import NightMode from './NightMode';
export default function NavBar({params, setParamsHandler}) {
const {lightTheme} = useContext(GlobalContext);

const fullTimeOnly = useContext(GlobalContext);
const [state, setState] = useState({description:params.description, location:params.location, full_time:params.full_time});
function setParams(e){
    let param = e.target.name;
    let value = e.target.value;
    if(param == "full_time"){
    return  setState(prevState => { return{...prevState, [param] : e.target.checked}})
    }
    return setState(prevState => {return{...prevState, [param]: value}});
}
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setParamsHandler(state);
    } 
    return (
        <div>
        <form onSubmit= {onSubmitHandler}>
        <div className={lightTheme ? "nav" : "dark-nav"}>
            <input type="text" placeholder="Job Description.." value={state.description} name="description" onChange={setParams} />
            <input type="text" placeholder="Location" value={state.location} name="location" onChange={setParams}/>
            <input type="checkbox" name="full_time" className="ft" onChange={setParams} value={state.full_time}/>
            <label htmlFor="fulltime">Full-Time Only</label>
            <button value="submit" type="submit">Search</button>
            <NightMode/>
        </div>
        </form>
        </div>
    )
}
