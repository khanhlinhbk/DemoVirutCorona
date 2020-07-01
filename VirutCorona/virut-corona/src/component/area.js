import React, {useState,useEffect} from 'react';
import {api} from '../service/api';
import './area.css';
export default function Area(props){
    const[loading, setLoading] = useState(false);
    const[area1,setArea1] = useState([])
    const[area2,setArea2] = useState([])
    const[area3,setArea3] = useState([])
    const[area4,setArea4] = useState([])
    const[area5,setArea5] = useState([])
    useEffect( () => {
        
        const getDataApiv2 = async () => {
            setLoading(true);
            const getDataApi1 = await api.getDataApi()
            setArea1(getDataApi1.data.data[0].table_country[0]);
            setArea2(getDataApi1.data.data[0].table_country[2]);
            setArea3(getDataApi1.data.data[0].table_country[3]);
            setArea4(getDataApi1.data.data[0].table_country[4]);
            setArea5(getDataApi1.data.data[0].table_country[8]);
            setLoading(false);
        }
        getDataApiv2();    
        
      }, []);


    if(loading){
        return(
            <div className="area">
            <h1>Covid-19 các khu vực trên thế giới</h1>
            <h1>Loading ...</h1>
            </div>
        )
    }
else{
    return(
        <div className="area">
            <h1>Covid-19 các khu vực trên thế giới</h1>
            <div className="area-content">
                    <div className="area-area">
                    <span>{area1.country}</span>
                    <p>
                    <i>Nhiễm : </i>
                    <strong>{area1.total_cases}</strong>
                    <br></br>
                    <span>{area1.new_cases}</span>
                    </p>
                    <p>
                    <i>Tử vong : </i>
                    <strong>{area1.total_deaths}</strong>
                    <br></br>
                    <span>{area1.new_deaths}</span>
                    </p>
                    <p>
                    <i>Khỏi : </i>
                    <strong>{area1.total_recovered}</strong>
                    </p> 
                 </div>
                 <div className="area-area">
                    <span>{area2.country}</span>
                    <p>
                    <i>Nhiễm : </i>
                    <strong>{area2.total_cases}</strong>
                    <br></br>
                    <span>{area2.new_cases}</span>
                    </p>
                    <p>
                    <i>Tử vong : </i>
                    <strong>{area2.total_deaths}</strong>
                    <br></br>
                    <span>{area2.new_deaths}</span>
                    </p>
                    <p>
                    <i>Khỏi : </i>
                    <strong>{area2.total_recovered}</strong>
                    </p> 
                 </div>
                 <div className="area-area">
                    <span>{area3.country}</span>
                    <p>
                    <i>Nhiễm : </i>
                    <strong>{area3.total_cases}</strong>
                    <br></br>
                    <span>{area3.new_cases}</span>
                    </p>
                    <p>
                    <i>Tử vong : </i>
                    <strong>{area3.total_deaths}</strong>
                    <br></br>
                    <span>{area3.new_deaths}</span>
                    </p>
                    <p>
                    <i>Khỏi : </i>
                    <strong>{area3.total_recovered}</strong>
                    </p> 
                 </div>
                 <div className="area-area">
                    <span>{area4.country}</span>
                    <p>
                    <i>Nhiễm : </i>
                    <strong>{area4.total_cases}</strong>
                    <br></br>
                    <span>{area4.new_cases}</span>
                    </p>
                    <p>
                    <i>Tử vong : </i>
                    <strong>{area4.total_deaths}</strong>
                    <br></br>
                    <span>{area4.new_deaths}</span>
                    </p>
                    <p>
                    <i>Khỏi : </i>
                    <strong>{area4.total_recovered}</strong>
                    </p> 
                 </div>
                 <div className="area-area">
                    <span>{area5.country}</span>
                    <p>
                    <i>Nhiễm : </i>
                    <strong>{area5.total_cases}</strong>
                    <br></br>
                    <span>{area5.new_cases}</span>
                    </p>
                    <p>
                    <i>Tử vong : </i>
                    <strong>{area5.total_deaths}</strong>
                    <br></br>
                    <span>{area5.new_deaths}</span>
                    </p>
                    <p>
                    <i>Khỏi : </i>
                    <strong>{area5.total_recovered}</strong>
                    </p> 
                 </div>
                
            
            </div>
        </div>
    )
}
    
}