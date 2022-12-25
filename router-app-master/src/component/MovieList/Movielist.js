import { Movie } from '../../App';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function Movielist() {

  const navigate = useNavigate();
  
  const [movieList, setMovieList] = useState([]);
  // setMovieList([...movieList, newMovie]);
  
 const getMovies = () => {
      fetch('https://636e65a3182793016f3fb576.mockapi.io/movies', {method: "GET"})
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
    }

  useEffect(() => getMovies(), []);

  // useEffect(()=>{
  //   fetch('https://636e65a3182793016f3fb576.mockapi.io/movies', {method: "GET"})
  //   .then((data) => data.json())
  //   .then((mvs) => setMovieList(mvs));
  // }, []);

  const deleteMovie = (id) => {
    //delete -> refresh data or Refetch data

    fetch(`https://636e65a3182793016f3fb576.mockapi.io/movies/${id}`, {
      method : "DELETE",
    }).then(()=> getMovies());
  };

  return (
    <div className="movie-list">
      {movieList.map((mv) => (
        <Movie movie={mv} 
        deleteButton = {<Button onClick = {()=>deleteMovie(mv.id)}><DeleteIcon color="error"/></Button>}
        editButton = {<Button onClick = {()=>navigate(`/movies/edit/${mv.id}`)}><EditIcon color="secondary"/></Button>}
        />
      ))}
    </div>
  );
}
;

