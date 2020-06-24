import React, {useState,useRef} from 'react';
import propTypes from  'prop-types';
import './pagination.css'
Search.propTypes = {
    onSubmit: propTypes.func,
};

Search.defaultProps = {
    onSubmit: null,
}

export default function Search(props) {
    //const a = document.getElementsByClassName("input")
    const {onSubmit,clear} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);
     
    function handleSearchTermChange(e){
        const value = e.target.value
        setSearchTerm(value);
        if(!onSubmit) {return};
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        };

        typingTimeoutRef.current = setTimeout(()=>{
            const formValues = {
                searchTerm: value
            };
            onSubmit(formValues)
        },1000)
        
    }
    function handleReset(){
        clear()
    }
    return(
        <div className="hide">
        <form>
            <input className="input"
            placeholder="Search Country"
            type="text" 
            value={searchTerm}
            onChange={handleSearchTermChange}
            />   
        </form>
        <button onClick={handleReset}>Reset</button>
        </div>
    )
}