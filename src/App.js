import React, { Component } from 'react';
import Liste from './liste'
import './App.css';
import Navmenu from './navmenu';


 
const data=[
  {
    id:'1',
    image: 'http://images.fandango.com//mdcsite/images/featured/201809/fan_brielarson_captainmarvel_20180918.jpg',
    name:'Captain Marvel Trailer ',
    descp: 'See the first trailer for the next Marvel Studios movie, Captain Marvel, starring Brie Larson. Watch now.',
    
    rating:3
  
  },
  {
    id:'2',
    image: 'http://images.fandango.com//mdcsite/images/featured/201809/fan_thepredator2018_blog_20180916.jpg',
    name:'Next Three Horror Franchise Movies  ',
    descp:'From Halloween to a Shining prequel, here are the next three movies that  horror franchises.',
    
    rating:4
  },
  
  {
    id:'3',
    image: 'http://images.fandango.com/images/fandangoblog/FAN_BENAFFLECKBATMAN_BLOG_20172806.jpg',
    name:'The Next Batman? ',
    descp:'Are we about to get a new actor as Batman? We explore all the possibilities in the latest Comics on Film column.',
    
    rating:5
  },
  {
    id:'4',
    image: 'http://images6.fanpop.com/image/photos/33300000/star-wars-anakin-and-padme-33336314-600-454.png',
    name:'Star Wars: The Last Jedi',
    descp:'Are we about to get a new actor as Batman? We explore all the possibilities in the latest Comics on Film column.',
    
    rating:1
  },
  {
    id:'5',
    image: 'https://m.media-amazon.com/images/M/MV5BMTY1OTA2MjI5OV5BMl5BanBnXkFtZTgwNzkxMjU4NjM@._V1_UY268_CR3,0,182,268_AL_.jpg',
    name:' Glass',
    descp:'Security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb,  personalities.',
    
    rating:3
  },
  {
    id:'6',
    image: 'https://m.media-amazon.com/images/M/MV5BMjMzOTUwNzgyOV5BMl5BanBnXkFtZTgwNjk3MTQwNzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    name:' The Kid Who Would Be King',
    descp:'A band of kids embark on an epic quest to thwart a medieval menace.',
    
    rating:4
  }
  ]
  
class App extends Component {
  constructor(props){
    super(props)
      this.state={
          news:data,
          // filtred:data,
          
          isloading: true,
         
      
      }
    }


  serach(keyword){
    // let filter1=this.state.news.filter((el,i)=>{return el.name.toLocaleLowerCase().indexOf(keyword)>-1})
    this.setState({news:data.filter((el,i)=>el.name.toLowerCase().indexOf(keyword)>-1)})
  }


  searchRat(val){
    // let filter1=this.state.news.filter((el,i)=>{return el.rating === val})
    this.setState({news:data.filter((el,i)=>el.rating === val)})
  }


  componentDidMount(){
    return setTimeout(() => {this.setState({isloading:false}) }, 2000)
  }


  addMovie=(newMovie) => {
    
    this.setState({news:this.state.news.concat(newMovie)
                  //  filtred:this.state.filtred.concat(newMovie)
                  })
  }    
   

  removeMovie=(id)=>
  {
      this.setState({ news:this.state.news.filter((el,index)=>(index !== id))})
  }       
      
   

  
  render() {
    console.log(this.state.news)
    return (
      <div className="App">
       <Navmenu  searchname={(keyword)=>this.serach(keyword)}
                 searcRating={(val)=>this.searchRat(val)}
                 addMovie={this.addMovie}/>


       <Liste news={this.state.news}
              isloading={this.state.isloading}
              newdata={this.state.newdata}
              removeMovie={this.removeMovie} /> 
       
      </div>
    );
  }
}

export default App;
