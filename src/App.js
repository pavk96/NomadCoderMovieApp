import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movie =[
  {
    title: "Matrix",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",

  },
  {
    title:"Full Metal Jacket",
    poster:"https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",

  },
  {
    title:"Oldboy",
    poster:"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",

  },
  {
    title:"Star Wars",
    poster:"https://lumiere-a.akamaihd.net/v1/images/tros-hero-in-theaters-mobile-a_e8a421c0.jpeg?region=0,0,1024,626&width=960"

  }
]
class App extends Component {
  render(){
    return (
    <div className="App">
    {movie.map((movie, index )=> {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })}
    </div>
    );
  }
}



export default App;
