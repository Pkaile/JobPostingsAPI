import React, {createContext, useState, useEffect} from 'react'
export const GlobalContext = createContext();
export const GlobalProvider = (({children}) => {
const savedTheme_key = "savedTheme_key";
const savedThemeCheck = JSON.parse(localStorage.getItem(savedTheme_key));
const [lightTheme, setTheme] = useState(savedThemeCheck);
const [ft, setFullTime] = useState(false);
const [type, setType] = useState({});
function setJobType(value){
setType(value);
}
function toggleTheme(){
    setTheme(!lightTheme);
    let lightThemeSave = lightTheme;
    //stringifying for IE versions that are not compatible with storing booleans in local storage
    localStorage.setItem(savedTheme_key, JSON.stringify(!lightThemeSave));
}
function fullTimeOnly(){
    setFullTime(!ft);
}
function dateFormat(dateString){
    dateString = new Date(dateString);
    //the current date minus the old date divided by 1000 to get the number of seconds it has been
    let seconds = Math.floor((new Date - dateString) / 1000);
    let interval = seconds/ 31536000;
    if(interval > 1){
        return Math.floor(interval) + " Years Ago";
    }
    interval = seconds/ 2628288;
    if(interval > 1){
        if(interval = 1 ) return Math.floor(interval) + " Year Ago";
        return Math.floor(interval) + " Month Ago";
    }
    interval = seconds/ 86400;
    if(interval > 1){
        if(interval = 1 ) return Math.floor(interval) + " Day Ago";
        return Math.floor(interval) + " Days Ago";
    }
    interval = seconds/ 3600;
    if(interval > 1){
        if(interval = 1 ) return Math.floor(interval) + " Hour Ago";
        return Math.floor(interval) + " Hours Ago";
    } else{
        return "Less than an Hour Ago";
    }
}
useEffect(() => {
    if(!lightTheme){
    document.body.classList.add('night');
    } else document.body.classList.remove('night');
}, [lightTheme])
return(
    <GlobalContext.Provider value={{lightTheme, toggleTheme, fullTimeOnly, setJobType, dateFormat}}>
        {children}
    </GlobalContext.Provider>
)
});