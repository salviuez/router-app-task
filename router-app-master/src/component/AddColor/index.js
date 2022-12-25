import "./Addcolor.css";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Addcolor() {
  const [color, setColor] = useState('pink');
  const styles = {
    background: color,
  };

  const [colorList, setColorList] = useState(["red", "yellow", "orange"]);
  return (
    <div>
      <div className="color-tool">
      {/* <input type="text" style={styles} onChange={(event) => setColor(event.target.value)} value={color} /> */}
      <TextField id="outlined-basic"  variant="outlined"  style={styles} onChange={(event) => setColor(event.target.value)} value={color} />

      {/* <button onClick={() => setColorList([...colorList, color])}>Add Color</button> */}
      <Button variant="outlined" onClick={() => setColorList([...colorList, color])}>Add Color</Button>
      {/* {color} */}
      </div>
      {colorList.map((clr) => <ColorBox clr={clr} />)}

    </div>
  );
}
function ColorBox({ clr }) {
  const styles = {
    height: "50px",
    width: "250px",
    background: clr,
    marginTop: "10px",
  };
  return <div style={styles}></div>;

}
