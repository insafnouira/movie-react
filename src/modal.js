import React from 'react'
import {Modal, Button, Form, Col} from   'react-bootstrap'
import logo1 from './logo1.png'

import './rating.css'
class ModalAdd extends React.Component {
    constructor() {
        super();
     
        this.state = {
      
          inputName:'',
          inputImage:'',
          inputdescp:'',
          inputRat:1,
        };
      }
      // onStarClick(nextValue, prevValue, name) {
      //   this.setState({rating: nextValue});
      // }

      handleChange=(event)=>
     {
          this.setState(
           
            { [event.target.name]:event.target.value} )  
                        
     }

    MyAddMovie=()=>{
      this.props.addMovie({
        image:this.state.inputImage ,
        name:this.state.inputName,
        descp:this.state.inputdescp,
        rating:this.state.inputRat
        

      })
    }


    render() {
        
         
          
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
                        <Form.Control type="name" placeholder="Enter name"  name='inputName' onChange={this.handleChange} value={this.state.inputName}/>
                        </Form.Group>

                        <Form.Group as={Col} className='rating' controlId="formGridRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="Rat" placeholder="Enter Rating"  name="inputRat" onChange={this.handleChange} value={this.state.inputRat}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="description" name="inputdescp" onChange={this.handleChange} value={this.state.inputdescp} />
                    </Form.Group>

                    <Form.Group controlId="formGridLink">
                        <Form.Label>Link image of movie</Form.Label>
                        <Form.Control placeholder="https://" name="inputImage" onChange={this.handleChange} value={this.state.inputImage}/>
                    </Form.Group>

                    
                    
                    <Button   className='button1'  onClick={(this.MyAddMovie)}  >
                       Add
                    </Button>
                   
                    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide }>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
export default ModalAdd;