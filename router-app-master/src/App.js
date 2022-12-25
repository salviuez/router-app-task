import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Home } from './component/Home';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { Header } from './component/Header';
import { Addcolor } from "./component/AddColor";
import { NotFound } from "./component/Not Found"
import { Counter } from './component/Counter/Counter';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Addmovie } from './component/AddMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Movielist } from './component/MovieList/Movielist';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { MovieDetail } from './component/MovieDetails/MovieDetail';
import { BasicForm } from './BasicForm';
import { EditMovie } from './component/EditMovie/EditMovie';





const Initial_Movie_List = [
  {
    name: "Vikram",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    rating: 8.4,
    summary:
      "Members of a black ops team must track and eliminate a gang of masked murderers."
  },
  {
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
  },
  {
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
  },
  {
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
  },
  {
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8
  },
  {
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
  },
  {
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
  },
  {
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
  },
  {
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
  }
];





// const MovieList = [
//   {
//     id : 1,
//     name : "Vikram",
//     rating : "⭐ 8.4",
//     description : "some description",
//     poster : "https://th.bing.com/th/id/OIP.8XfOHUBg-hzg3-fyNbI1AgAAAA?pid=ImgDet&rs=1"
//   },
//   {
//     id : 2,
//     name : "Naruto",
//     rating : "⭐ 9.8",
//     description : "some description",
//     poster : "https://th.bing.com/th/id/OIP.JqjUpQZnjt6vMbWt5F95WgAAAA?pid=ImgDet&w=400&h=600&rs=1"
//   },
//   {
//     id : 3,
//     name : "Tokyo Revengers",
//     rating : "⭐ 9.7",
//     description : "some description",
//     poster : "https://th.bing.com/th/id/OIP.ei8yzGP6-0AtDCx38w7PigHaLH?pid=ImgDet&rs=1"
//   },
// ]



export function Movie( {movie, deleteButton, editButton} ){

  const [show, setShow] = useState(true);

const styles = {
  color : movie.rating > 8.5 ? "green" : "red",
};
  // const movie = {
  //   name: "Vikram",
  //   poster:
  //     "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
  //   rating: 8.4,
  //   summary:
  //     "Members of a black ops team must track and eliminate a gang of masked murderers."
  // }

  const Navigate = useNavigate();

  return (
  
  <Card className ="movie-container">
    <img src ={movie.poster} alt ={movie.name} className ="movie-poster" /> 
    <CardContent className ="movie-specs">
     <h3 className ="movie-name">{movie.name} 
      <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>setShow(!show)}>
      { show ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart" 
        onClick={()=>Navigate(`/movies/${movie.id}`)}>
      <InfoIcon />
      </IconButton>
    </h3>
     <p style={styles} className="movie-rating">⭐{movie.rating}</p>
    </CardContent>

    <CardActions>
    {/* <button onClick={()=>setShow(!show)}>Toggle Summary</button> */}
    { show ? <p className="movie-summary">{movie.summary}</p> : null}
    </CardActions>

    <CardActions>
    <Counter /> {editButton} {deleteButton} 
    </CardActions>
  </Card> 
  
  )}




function App() {
  // const[movies, setMovies] = useState(MovieList);

  const [movieList, setMovieList] = useState([]);
  
  const [mode, setMode] = useState("dark")

  const themeCtx = createTheme({
  palette: {
    mode: mode,
  },
  
});

  const navigate = useNavigate();





  return (
    <ThemeProvider theme={themeCtx}>
    <Paper sx = {{
      minHeight: "100vh",
      borderRadius: "0px",
    }} 
    elevation={4}>
    <div className="App">
      
       {/* <Addcolor /> */}
      {/* <Header />
      <Footer /> */}
      <div className="content-gap">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
          <Button color="inherit" onClick={()=>navigate("/films")}>Movies</Button>
          <Button color="inherit" onClick={()=>navigate("/movie/add")}>Add Movie</Button>
          <Button color="inherit" onClick={()=>navigate("/color-game")}>Color Game</Button>
          <Button color="inherit" onClick={()=>navigate("/basicform")}>Basic Form</Button>
          <Button 
          sx={{
            marginLeft : "auto",
          }}
          startIcon= {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          color="inherit" onClick={()=>setMode(mode === "dark" ? "light" : "dark" )}>
          {mode === "dark" ? "light" : "dark"} Mode </Button>
        </Toolbar>
      </AppBar>
      </div>
      
    {/* <div className="welcome-note">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to ="/films">Movies</Link></li>
        <li><Link to="/movie/add">Add Movie</Link></li>
        <li><Link to="/color-game">Color Game</Link></li>
      </ul>
    </div> */}



      <browserRouter>
        <Routes>
        <Route path ="/" element={<Home />}></Route>
        {/* <Route path="/movies" element={<Movielist movieList = {movieList}  setMovieList = {setMovieList} />}></Route> */}
        <Route path="/movies" element={<Movielist />}></Route>
        <Route path ="/films" element={<Navigate replace to = "/movies" />}/>
        <Route path ="/color-game" element={<Addcolor />}></Route>
        <Route path ="/movie/add" element={<Addmovie movieList = {movieList}  setMovieList = {setMovieList}/>}></Route>
        <Route path ="/movies/:id" element={<MovieDetail />}></Route>
        <Route path ="/movies/edit/:id" element={<EditMovie />}></Route>
        <Route path ="/basicform" element={<BasicForm />}></Route>
        <Route path ="*" element={<NotFound />}></Route>
        </Routes>
      </browserRouter>

      
      {/* <NotFound /> */}
      
  {/* <Movielist movieList = {movieList}  setMovieList = {setMovieList} /> */}
    </div>
    </Paper>
    </ThemeProvider>
  );
}


export default App;