import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    const [name, setName] = useState(0);
    return(
        <div>
            <h1>Home</h1>
            <Link to="/todo">Vai para Home</Link>
            <p>{name}</p>
            <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
        </div>

    )};