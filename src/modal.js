import React from 'react'
import {Modal, Button, Form, Col} from   'react-bootstrap'
import logo1 from './logo1.png'
import StarRatingComponent from 'react-star-rating-component';
import './rating.css'
class ModalAdd extends React.Component {
    constructor() {
        super();
     
        this.state = {
          rating: 1,
          value: 0
        };
      }
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
    render() {
        
          const { rating } = this.state;
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            < img src={logo1} alt='Logo' />
            
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group as={Col} className='rating' controlId="formGridRating">
                        <Form.Label>Rating</Form.Label>
                            <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={rating}
                                    onStarClick={this.onStarClick.bind(this)}
                                    
                                    />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="description" />
                    </Form.Group>

                    <Form.Group controlId="formGridLink">
                        <Form.Label>Link image of movie</Form.Label>
                        <Form.Control placeholder="https://" />
                    </Form.Group>

                    

                    <Button  type="submit" className='button1'>
                        Add
                    </Button>
                    
                    </Form>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.props.onHide}>Close</Button> */}
          </Modal.Footer>
        </Modal>
      );
    }
  }
export default ModalAdd;