import React from 'react';
import propTypes from 'prop-types';
import './pagination.css'
Pagination.propTypes = {
    pagination: propTypes.object.isRequired,
    onPageChange: propTypes.func,
};
Pagination.defaultProps = {
    onPageChange: null,
};

function check(page,totalPages){
    var start, end;
    var first=false
    var last=false;
    if((page-4)>0){
        first=true;
    }
    if(page-(-4)<(totalPages+1)){
        last=true;
    }
    var d=page-2;
    var e=page-(-2);
    if(d<=1&&e>(totalPages-1)){start=2;end=totalPages-1}
    else if(d<=1&& totalPages<=5){
        start=2;
        end=e;
    }
    else if(d<=1&& totalPages>5){
        start=2;
        end=5;
    }
    else if(e>(totalPages-1)&& (totalPages-4)>1){
        end=totalPages-1;
        start=totalPages-4;
    }
    else if(e>(totalPages-1)&& (totalPages-4)<=1){
        end=totalPages-1;
        start=2;
    }
    else{
        start=d;
        end=e;
    }
    return{first:first,last:last,start:start,end:end}
}
export default function Pagination(props){
    const{pagination,onPageChange} = props;
    const {page, limit, totalRows} = pagination;
    const totalPages = Math.ceil(totalRows/limit);
    //console.log(totalPages)
    // var a=[];
    
    //     for(let i=1;i<=totalPages;i++){
    //             if(i==totalPages){a.push('ne')}
    //             if(i<6 || i==totalPages){ a.push(i)}
           
    //     }
        
        
        const checkPage = check(page,totalPages)
        const a=[]
        for(let i=checkPage.start;i<=checkPage.end;i++){
            a.push(i)
        }
        if(checkPage.first && checkPage.last){  
            a.unshift("pr")
            a.unshift(1)
            a.push("ne");
            a.push(totalPages)
      // setPages(a)
        }else if(!checkPage.first && !checkPage.last){
            if(totalPages===0 || totalPages===1){
                a.unshift(1)
               // setPages(a)
            }else{ a.unshift(1)
                a.push(totalPages)
          //setPages(a)
        }
           
        }
         else if(checkPage.first && !checkPage.last) {
            a.unshift("pr")
            a.unshift(1)
            a.push(totalPages)
       //setPages(a)
        } else if(!checkPage.first && checkPage.last) {
            a.unshift(1)
            a.push("ne");
            a.push(totalPages)
       //setPages(a)
        }
    function handlePageChange(newPage) {
        if(onPageChange) {
            onPageChange(newPage)
        }
    }
    
  
  
    return(
        <div className=" button-total">
            <button className=" button" disabled={page <=1} onClick={() => handlePageChange(page-1)}
            >
                Prev
            </button>
            
                {a.map(item=>( 
                    (item==="ne")?
                <button className=" button2" onClick={() => handlePageChange(page+4)} >•••</button> :
                    (item==="pr")?
                    <button className=" button2" onClick={() => handlePageChange(page-4)} >•••</button>:
                    (item===page)?
                <button className=" button1" onClick={() => handlePageChange(item)} >{item}</button>:  
                <button className=" button" onClick={() => handlePageChange(item)} >{item}</button>
                ))}
            
            <button className=" button" disabled={page >=totalPages} onClick={() => handlePageChange(page+1)}
            >
                Next
            </button>
        </div>
    )
}