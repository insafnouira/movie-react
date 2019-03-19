import React from 'react';

import StarRatingComponent from 'react-star-rating-component';
 import './rating.css'
class Rating extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1,
      value: 0
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue})
    this.props.searcRating(nextValue)

  }
  
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div className='star'>
        <p>Search movies with Rating</p>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          
          onChange={this.handelchange2}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
 
export default Rating ;