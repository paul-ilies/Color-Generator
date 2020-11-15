import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('Hello');
  }


  return (
    <React.Fragment>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handlerSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025' />
          <button className="btn" type='submit'>Submit</button>
        </form>
      </section>

      <section className="colors">
        <h4>color list</h4>
      </section>

    </React.Fragment>
  )
}

export default App
