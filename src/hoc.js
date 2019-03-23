import React,{Component} from 'react';
import Spinner from './spinner';

 const Hoc =(WrappedComponent) => {
      return (class Hoc extends Component {
    
        
        render() { 
            return (this.props.isloading ? <Spinner/> :<WrappedComponent{...this.props}/>);
        }
       
    })
   
}  
export default Hoc;  

