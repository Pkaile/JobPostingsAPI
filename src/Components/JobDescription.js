import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from './GlobalState';
import ReactMarkdown from 'react-markdown';
import NightMode from './NightMode';
import app from '../App';

export default function JobDescription({match, jobs}) {
console.log(jobs);
const job = jobs.filter(job => { return job.id == match.params.id });

const {type, created_at, location, title, company, url, company_logo, company_url, description} = job[0] || {};
const {lightTheme} = useContext(GlobalContext);
const {dateFormat} = useContext(GlobalContext);
const postedDate = dateFormat(created_at);
let companyUrl = "";
if(company_url != null && company_url.length > 6) {
 companyUrl = company_url; 
} 
    return (
        <div className={lightTheme ? "card-desc" : "dark-desc"}>
            <div className="nav pos-nav">
            <Link to="/" className="btn">⬅ Go Back</Link>
               <NightMode/>
            </div>
        <div className="body">
            <div className="desc-job">   
        <div className="top">
            <p className="card-type dot">{type}</p>
            <p className='card-type'>{postedDate}</p>
            </div>
            <h1 className='title'>{title}</h1>
            <p className="desc-location">{location} {company}</p>
            <a href={url} className="btn apply">Apply Now</a>
            </div>
            <ReactMarkdown className="desc-text" source={description}/>
            <br/>
            <br/>
        </div>
        <div className="desc-job desc-card">   
        <div className="top">
            <p className="card-type dot">{type}</p>
            <p className='card-type'>{postedDate}</p>
            </div>
            <h1 className='title'>{title}</h1>
            <p className="desc-location">{location}</p>
            <a href="{url}" className="btn apply">Apply Now</a>
            </div>
        </div>
    )
}
