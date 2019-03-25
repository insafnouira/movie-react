import React from 'react';
import Item from './item'
import './item.css'
import Hoc from './hoc'





const Liste=({news,removeMovie})=>{
    

    return(<div className='list'>
        {news.map((el,index)=>{return<Item  key={index}  item={el}  id={index} removeMovie={removeMovie} />})}
       
    </div>)
}
export default Hoc(Liste);