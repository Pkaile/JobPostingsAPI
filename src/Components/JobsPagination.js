import React,{useContext} from 'react';
import {GlobalContext} from './GlobalState';
export default function JobsPagination({page, setPage, hasNextPage}) {
    const {lightTheme} = useContext(GlobalContext);
 function changePage(pageChange){
     setPage(pageChange);
 }
    return (
        <div className={lightTheme ? "pages" : "pages-dark"}>
            {page > 2 && <p className="page" onClick={e => changePage(1)}>1...</p>   }
            {page !== 1 && <p className="page" onClick ={e => changePage(page- 1)}>{page - 1}</p>}
            <p className="page active">{page}</p>
            {hasNextPage && <p onClick={e => changePage(page +1 )}>{ page + 1}</p>}
        </div>
    )
}
