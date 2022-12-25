import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function MovieDetail() {
  const { id } = useParams();
  console.log({ id });


  const [movie, setMovie] = useState({});


  const getMovie = () => {
    fetch(`https://636e65a3182793016f3fb576.mockapi.io/movies/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };

  useEffect(() => getMovie(), []);

  const navigate = useNavigate();



  return (
    <div>
      <iframe
        width="100%"
        height="397"
        src={movie.trailer}
        title="Love Today - Official Trailer | @Pradeep Ranganathan  | Yuvan Shankar Raja | AGS"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <div className="movie-details-container">
        <div>
          <div className="movie-specs">
            <h3 className="movie-name">{movie.name} </h3>
            <p className="movie-rating">⭐{movie.rating}</p>
          </div>
          <div>
            <p className="movie-summary">{movie.summary}</p>
          </div>
          <div className='back-button-container'>
            <Button startIcon={<ArrowBackIcon />}
              variant="contained" onClick={() => navigate(-1)}>Back</Button>
          </div>

        </div>
      </div>
    </div>
  );
}
