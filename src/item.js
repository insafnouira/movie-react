import React, {Component} from 'react';
import { Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component'
import './item.css'
class Item extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
       };
      
}

  
    render() { 
      

        const {item,id}=this.props
        return ( 
         
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} alt='No Image Available' className='image'/>
        
        <Card.ImgOverlay className='starStat'>
          
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={item.rating}

            />
    
        </Card.ImgOverlay>
        
        <Card.Body>
          <Card.Title className='name'>{item.name}</Card.Title>
          <Card.Text className='desc'>{item.descp}</Card.Text>
          
        </Card.Body>
        <Card.Footer>
            <button className='button-Remove'  onClick={()=>this.props.removeMovie(id)}>Remove</button>
        </Card.Footer>
      </Card> 
      );
    }
}
 
export default Item;