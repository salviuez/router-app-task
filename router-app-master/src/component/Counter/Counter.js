import { useState } from 'react';
import './Counter.css';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <div className="counter-container">
      <IconButton color="primary" aria-label="add to shopping cart" onClick={() => setLike(like + 1)}>
      👍 
      <Badge badgeContent={like} color="primary"></Badge>
      </IconButton>

      <IconButton color="primary" aria-label="add to shopping cart" onClick={() => setDislike(dislike + 1)}>
      👎 
      <Badge badgeContent={dislike} color="error"></Badge>
      </IconButton>

      {/* <button onClick={() => setLike(like + 1)}> 👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}> 👎 {dislike}</button> */}
      </div>
    </div>
  );
}
