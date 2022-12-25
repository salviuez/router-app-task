import './home.css';

// const home = ({movies}) => {
//     return(
//         <div className="cardscontainer">
//           {
//             movies.map((movie, index)=>(
//                 <div className="card">
//                     <img src={movie.poster} className="card-img-top" alt="Movie Poster" />
//                     <div className="card-body">
//                     <h5 className="card-title">{movie.name}</h5>
//                     <p className="card-text">{movie.rating}</p>
//                     <p>{movie.description}</p>
//                     <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </div>
//             ))
//           }
//         </div>
//     )
// }

export const Home = ()=>{
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  )
}




