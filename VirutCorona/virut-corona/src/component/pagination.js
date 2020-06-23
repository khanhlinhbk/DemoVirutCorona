import React, {useState,useEffect} from 'react';
import propTypes from 'prop-types';
import './pagination.css'
Pagination.propTypes = {
    pagination: propTypes.object.isRequired,
    onPageChange: propTypes.func,
};
Pagination.defaultProps = {
    onPageChange: null,
};
export default function Pagination(props){
    const{pagination,onPageChange} = props;
    const {page, limit, totalRows} = pagination;
    const totalPages = Math.ceil(totalRows/limit)
    console.log(totalPages)
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
            <button className=" button" onClick={() => handlePageChange(1)}>1</button>
            <button className=" button" onClick={() => handlePageChange(2)}>2</button>
            <button className=" button"onClick={() => handlePageChange(3)}>3</button>
            <button className=" button" onClick={() => handlePageChange(4)}>4</button>
            <button className=" button" onClick={() => handlePageChange(5)}>5</button>
            <button className=" button" onClick={() => handlePageChange(6)}>6</button>
            <button className=" button" onClick={() => handlePageChange(7)}>7</button>
            <button className=" button" onClick={() => handlePageChange(8)}>8</button>
            <button className=" button" onClick={() => handlePageChange(9)}>9</button>
            <button className=" button" onClick={() => handlePageChange(10)}>10</button>
            <button className=" button" onClick={() => handlePageChange(11)}>11</button>
            <button className=" button" onClick={() => handlePageChange(12)}>12</button>
            <button className=" button" onClick={() => handlePageChange(13)}>13</button>
            <button className=" button" onClick={() => handlePageChange(14)}>14</button>
            <button className=" button" onClick={() => handlePageChange(15)}>15</button>
            <button className=" button" onClick={() => handlePageChange(16)}>16</button>
            <button className=" button" onClick={() => handlePageChange(17)}>17</button>
            <button className=" button" onClick={() => handlePageChange(18)}>18</button>
            <button className=" button" onClick={() => handlePageChange(19)}>19</button>
            <button className=" button" onClick={() => handlePageChange(20)}>20</button>
            <button className=" button" onClick={() => handlePageChange(21)}>21</button>
            <button className=" button" onClick={() => handlePageChange(22)}>22</button>
            <button className=" button" onClick={() => handlePageChange(23)}>23</button>
            <button className=" button" disabled={page >=totalPages} onClick={() => handlePageChange(page+1)}
            >
                Next
            </button>
        </div>
    )
}