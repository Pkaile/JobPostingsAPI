import React, {useState, useContext} from 'react';
import useFetchJobs from './Components/useFetchJobs';
import JobsList from './Components/JobsList';
import NavBar from './Components/NavBar';
import {GlobalContext, GlobalProvider} from './Components/GlobalState';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import JobDescription from './Components/JobDescription';
import './Main.css';
import JobsPagination from './Components/JobsPagination';

function App() {
  const [params, setParams] = useState({description:"", location: "", full_time:false});
  const [page, setPage] = useState(1);
  
  const {jobs, loading, error, hasNextPage} = useFetchJobs(page, params);
  console.log(jobs, loading, error, hasNextPage);
  function setParamsHandler(state){
    setParams(state);    
  }

  return (
    <GlobalProvider>
    <Router>
    <Switch>
  <Route  path="/" exact component={() => {return(
    <>
    <NavBar params={params} setParamsHandler={setParamsHandler}/>
    <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
    {loading && <h2 className='loading'>loading...</h2>}
    {error && <h2 className='error'>There was an error. Please refresh and try again</h2>}
    <JobsList jobs={jobs}/>
    </>
  )}}/>
  <Route path='/JobDescription/:id' component={(props)=> {return(
    <JobDescription {...props} jobs={jobs}/>)}}/>
  
  </Switch>
  </Router>  
  </GlobalProvider>
   
  );
}
export default App;
