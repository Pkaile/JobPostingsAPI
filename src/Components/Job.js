import React,{useContext, useState} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {GlobalContext} from './GlobalState';
import ft from './ft.png';
import pt from './pt.png';
import contract from './contract.png';

export default function Job({job}) {
const [open, isOpen] = useState(false);
const postedType = iconFormat(job.type);
const {lightTheme} = useContext(GlobalContext);
const {dateFormat} = useContext(GlobalContext);
    function iconFormat(type){
        if(type == "Full Time") return (ft);
            else if( type == "Part Time") return (pt);
            return (contract);
    }
    const postedDate = dateFormat(job.created_at);
    return (
        <div className= {lightTheme ? "card" : "card dark"}>
        <Link to={`/JobDescription/${job.id}`}>
            <div className="card-top">
            <p className="card-type dot">{job.type}</p>
            <p className='card-type'>{postedDate}</p>
            </div>
            <h3 className='card-title'>{job.title}</h3>
            <img className='card-icon' src={postedType} alt="Logo"/>
            <p className="card-company">{job.company}</p>
            <p className='card-location'>{job.location}</p>
        </Link>
        </div>
    )
}
