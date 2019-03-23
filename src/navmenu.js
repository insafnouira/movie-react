import React, {Component} from 'react';
import { Navbar, Nav, Form,FormControl,Button  } from 'react-bootstrap';
import Rating from './rating'
import logo1 from './logo1.png'

import ModalAdd from './modal';
 class Navmenu extends Component {
    constructor(props) {
        super(props);
        this.state = { modalShow: false ,keyword:''};
    }
   
    handelchange=(event)=>{
      this.setState({keyword:event.target.value}, ()=>this.props.searchname(this.state.keyword));
     
      
  }
 

   
     render() { 
      let modalClose = () => this.setState({ modalShow: false });
         return ( <Navbar bg="light" expand="lg" fixed="top">
         <Navbar.Brand href="#home">
                < img src={logo1} alt='/' />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav ">
           <Nav className="mr-auto ">
             <Nav.Link href="#home">Home</Nav.Link>
             <Nav.Link href="#link"
              onClick={() => this.setState({ modalShow: true })} >
              Add movie</Nav.Link>
              
              <ModalAdd show={this.state.modalShow}
                        onHide={modalClose}

                        addMovie={this.props.addMovie} />

           </Nav>
           <Form inline>
             <Rating searcRating={val=>this.props.searcRating(val)} />
             <FormControl type="text" placeholder="Search movies" className="mr-sm-2"  value={this.state.keyword} onChange={this.handelchange} />
             <Button variant="outline-success">Search</Button>
           </Form>
         </Navbar.Collapse>
       </Navbar> );
     }
 }
  
 export default Navmenu ;
