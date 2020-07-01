import React from 'react';
import Header from './component/header';
import Global from './component/global';
import Country from './component/country';
import Area from './component/area';
import './App.css';

export default function App() {
  return (
    <div>    
   <Header />
   <Global/>
   <Area/>
   <Country/>
   <div>
     <a className="footer" href="https://www.facebook.com/trinhkhanh.link?ref=bookmarks">Made by: Khánh Linh</a>
   </div>
    </div>
  );
}


