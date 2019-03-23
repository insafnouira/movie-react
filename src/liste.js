import React from 'react';
import Item from './item'
import './item.css'
import Hoc from './hoc'





const Liste=({news})=>{
    

    return(<div className='list'>
        {news.map((el,index)=>{return<Item  key={index}  item={el}  id={index} removeMovie={(id)=>this.props.removeMovie(id)} />})}
       
    </div>)
}
export default Hoc(Liste);