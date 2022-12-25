import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Movie } from '../../App';
import "./addmovie.css";
import { Navigate, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';


  export function Addmovie({ movieList, setMovieList }){
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");


  const AddMovieValidationSchema = yup.object({
    name : yup.string().required("Why not fill this Name"),
    poster : yup.string().required("Why not fill this poster").min(4, "Need more in poster"),
    rating : yup.number().required("Why not fill this rating").min(0).max(10),
    summary : yup.string().required("Why not fill this summary").min(4, "Need a bigger summary"),
    trailer : yup.string().required("Why not fill this trailer").min(5, "Need a bigger trailer"),
})

  const formik = useFormik({
    initialValues : {
      name : "",
      poster : "",
      rating : "",
      summary : "",
      trailer : "",
    },

    validationSchema : AddMovieValidationSchema,
    onSubmit : (newMovie) => {
      console.log("your values are submitted", newMovie);
      addMovie(newMovie);
    }
  })

  const Navigate = useNavigate();

  const addMovie = (newMovie) => {
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };
    console.log(newMovie);

    // setMovieList([...movieList, newMovie]);
    

    fetch('https://636e65a3182793016f3fb576.mockapi.io/movies', {method: "POST",
    body : JSON.stringify(newMovie),
    headers: {
      "Content-Type": "application/json",
    },
    }).then(()=> Navigate("/films"))
    // }).then((data)=> data.json())

  };



  return (
    <form onSubmit = {formik.handleSubmit}>
      <div className="add-movie-container">
        {/* <input type="text" placeholder = "Name" onChange={(event)=>setName(event.target.value)} value={name} /> */}
        
        <TextField id="outlined-basic" 
          label="Movie Name" 
          variant="outlined" 
          name="name"
          value={formik.values.name} 
          onChange ={formik.handleChange} 
          onBlur = {formik.handleBlur} 
          error = {formik.touched.name && formik.errors.name}
          helperText= {formik.touched.name && formik.errors.name ? formik.errors.name : null}
          />

          {/* {formik.touched.name && formik.errors.name ? formik.errors.name : null} */}
           

        {/* <input type="text" placeholder = "Poster" onChange={(event)=>setPoster(event.target.value)} value={poster} /> */}
        
        <TextField id="outlined-basic" 
          label="Poster" 
          variant="outlined" 
          name="poster"
          value={formik.values.poster} 
          onChange ={formik.handleChange} 
          onBlur = {formik.handleBlur} 
          error = {formik.touched.poster && formik.errors.poster}
          helperText=  {formik.touched.poster && formik.errors.poster ? formik.errors.poster : null} 
          />
           {/* {formik.touched.poster && formik.errors.poster ? formik.errors.poster : null} */}

        {/* <input type="text" placeholder = "Rating" onChange={(event)=>setRating(event.target.value)} value={rating} /> */}
        
        <TextField id="outlined-basic" 
          label="Rating" 
          variant="outlined" 
          name="rating"
          value={formik.values.rating} 
          onChange ={formik.handleChange} 
          onBlur = {formik.handleBlur}
          error = {formik.touched.rating && formik.errors.rating}
          helperText= {formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}
           />
           {/* {formik.touched.rating && formik.errors.rating ? formik.errors.rating : null} */}
          
        {/* <input type="text" placeholder = "Summary" onChange={(event)=>setSummary(event.target.value)} value={summary} /> */}
        
        <TextField id="outlined-basic" 
          label="Summary" 
          variant="outlined" 
          name="summary"
          value={formik.values.summary} 
          onChange ={formik.handleChange} 
          onBlur = {formik.handleBlur}
          error = {formik.touched.summary && formik.errors.summary}
          helperText= {formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}  
          />
           {/* {formik.touched.summary && formik.errors.summary ? formik.errors.summary : null} */}

        <TextField id="outlined-basic" 
          label="Trailer" 
          variant="outlined" 
          name="trailer"
          value={formik.values.trailer} 
          onChange ={formik.handleChange} 
          onBlur = {formik.handleBlur}
          error = {formik.touched.trailer && formik.errors.trailer}
          helperText= {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null}
          />
           {/* {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null} */}

        {/* <button onClick={addMovie}>Add Movie</button> */}
        {/* <Button onClick={addMovie} variant="contained">Add Movie</Button> */}
        <Button type="submit" variant="contained">Add Movie</Button>
      </div>
      
    </form>
  );
}
