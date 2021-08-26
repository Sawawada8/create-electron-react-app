import logo from './logo.svg';
import './App.css';
import React, {
    useState, 
    useEffect,
    useRef
} from 'react'
import axios from 'axios'

import InputForm from './Components/InputForm'

function App() {
    const [text, setText] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3333')
            .then((val) => {
                console.log(val.data)
                setText(val.data.data)
            })
    }, [])

    const connetApi = () => {
        axios.get('http://localhost:3333')
            .then((val) => {
                setText('::api::' + val.data.data + '::api::')
            })
    }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> {text} </p>
          <InputForm />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          !!!!!Learn Rea act
        </a>
        <button onClick={() => setText(text + "add!")}>hello</button>
        <button onClick={connetApi}>api</button>
        <button onClick={() => {
          axios.post('http://localhost:3333/', {iii:'postttttt'})
            .then((val) => {
              console.log(val.data)
              setText(val.data.data)
            })
        }}>post btn</button>
      </header>
    </div>
  );
}

export default App;

