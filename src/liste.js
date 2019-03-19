import React from 'react';
import Item from './item'
import './item.css'

const Liste=({news})=>{
    return(<div className='list'>
        {news.map((el,index)=>{return<Item  key={index}  item={el}  />})}
       
    </div>)
}
export default Liste;