import React, {
    useState,
    useRef
} from 'react'
import axios from 'axios'

const Inputform = () => {
    const [val, setVal] = useState("")
    const text = useRef(null)

    const chText = (e) => {
        text.current = e.target.value
    }

    const calApi = async () => {
        axios.get('http://localhost:3333/v')
            .then((val) => {
                setVal(val.data.data + text.current)
            })
    }
    // const calApi = () => {
        // setVal(text.current)
    // }


    return (
        <div>
            <input onChange={chText} ref={text} type="text" />
            <button onClick={calApi}>callapi</button>
            <p>{val}</p>
        </div>
    )
}

export default Inputform 