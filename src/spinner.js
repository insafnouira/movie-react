import React from 'react';
import { css } from '@emotion/core';
// First way to import
// Another way to import
import ClipLoader from 'react-spinners/ClipLoader';
import './item.css'
 
const override = css`
    display: block;
    margin-top: 220 ;
    border-color: red;
`;
 
class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={50}
          
          color={'#ff3399'}
          
          isloading={this.state.isloading}
        />
      </div> 
    )
  }
}
export default Spinner;