import React, {useState,useEffect} from 'react';
import {api} from  '../service/api';
import './global.css';
export default function Global(props){
    const[world,setWorld] = useState({})

    useEffect(()=>{
        const getDataApi0 = async () =>{
            const get_world = await api.getDataApi()
            setWorld(get_world.data.data[0].table_world);
        }
        getDataApi0();

    },[]);
     


    // useEffect(async () => {
    //     const result = await axios(
    //       'https://gw.vnexpress.net/cr/?name=world_coronavirus',
    //     );
    //     setWorld(result.data.data.data[0].table_world);
    //   }, []);
    return(
       <div className="global">
            <h1>Covid-19 trên thế giới</h1>  
            
                <div className="content"> 
            <div className="case">
                <p>Nhiễm</p>
                <p className="total-case">{world.total_cases}</p>
                <p className="new-case">{world.new_cases}</p>
            </div>
            <div className="death">
                <p>Tử vong</p>
                <p className="total-death">{world.total_deaths}</p>
                <p className="new-death">{world.new_deaths}</p>
            </div>
            <div className="recover">
                <p>Khỏi bệnh</p>
                <p className="total-recover">{world.total_recovered}</p>
                <p className="new-recover">{world.new_recovered}</p>
            </div>
            </div>   
        </div>
     )
}

