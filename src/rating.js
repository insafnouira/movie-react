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
    console.log(nextValue)

    this.setState({rating: nextValue})
    this.props.searcRating(nextValue)

  }
  
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div className='star'>
        <p>Search Movies Rating</p>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          
          
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
 
export default Rating ;