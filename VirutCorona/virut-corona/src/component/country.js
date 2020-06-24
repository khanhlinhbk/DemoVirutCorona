import React, {useState, useEffect} from 'react';
import {api} from  '../service/api'
import './country.css';
import './pagination.css'
import Pagination from './pagination';
import Search from './search';
import Logo from './images/search.png';
export default function Country(props){
    const[display,setDisplay] = useState(false)
    const[loading,setLoading] = useState(false);
    const[country,setCountry] = useState([]);
    const[filter,setFilter]=useState([]);
    const[pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        totalRows: 221,
    });
   
    useEffect(()=>{
        const getDataApi3 = async () =>{
            setLoading(true);
            const getCountry = await api.getDataApi()
            setCountry(getCountry.data.data[0].table_country);
            setFilter(getCountry.data.data[0].table_country);
            setLoading(false)
        }
        getDataApi3();

    },[]);
     
    function handlePageChange(newPage){
        console.log('New page', newPage);
        setPagination({
            page: newPage,
            limit: 10,
            totalRows: filter.length ,
        }
            )
    }
    function handleFilterChange(newFilters){
        console.log("new filter",newFilters)
        setFilter(filter.filter(item => item.country.toLowerCase().includes(newFilters.searchTerm.toLowerCase())))
       
    }
    function handleDisplay() {
        setDisplay(!display)
    }
    function handleClear(){
        setFilter(country)
    }
    if(loading){
        return(
            <div className="country">
            <h1>Covid-19 các quốc gia</h1>
            <h1>Loading...</h1>
        </div>
        )
    }
    
    
    return(
        <div className="country">
            <h1>Covid-19 các quốc gia</h1>
            
            <table>
                <tr className="item">
                    <td className="countries">
                        <span> Quốc gia</span>
                        <span>
                            <button onClick={handleDisplay}>
                                <img src={Logo} width="10px" height="10px"/>
                                
                            </button>
                        </span>
                        
                    </td>
                    <td className="cases">Nhiễm </td>
                    <td className="new-cases"><p>Mới Nhiễm</p></td>
                    <td className="deaths">Tử vong</td>
                    <td className="new-deaths"><p>Mới tử vong</p></td>
                    <td className="recovers">Khỏi bệnh</td>
                </tr>
                {filter.slice(pagination.limit*(pagination.page-1),pagination.limit*pagination.page).map(item => (
                    <tr className="item1" >
                        <td className="countries">{item.country}</td>
                        <td  className="cases">{item.total_cases}</td>
                        <td className="new-cases"><p>{item.new_cases}</p></td>
                        <td className="deaths">{item.total_deaths}</td>
                        <td className="new-deaths"><p>{item.new_deaths}</p></td>
                        <td className="recovers">{item.total_recovered}</td>
                    </tr>
                ))}
            </table>  
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
            {display? <Search onSubmit={handleFilterChange} clear={handleClear}/> :<span></span>}
        </div>
    )
}