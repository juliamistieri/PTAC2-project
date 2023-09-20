import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import toyotaMarca from './toyotaMarca.png'
export default function Home() {
    const [name, setName] = useState(0);
    return(
        <div className="casaEstilo">
            <h1>Home</h1>
            <Link to="/todo">Vai para Home</Link>
            <img src={toyotaMarca} alt="imagem" width="100" height="50"></img>
            <p>{name}</p>
            <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
        </div>

    )};