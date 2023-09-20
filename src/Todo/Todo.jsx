import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Todo() 
    const [lista, setLista] = useState([]);
    const [idCriar, setIdCriar] = useState(1);
    const [carros, setCarros] = useState("");
    const [marca, setMarca] = useState("");

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            id:idCriar,
            carros:carros,
            marca:marca
        }]);
        setCarros("")
        setMarca("")
        setIdCriar(idCriar + 1)
    };

    const remover = (id) => {
        const auxLista = [];
        lista.map((carros) => {
            if (carros.id !== id) {
                auxLista.push(carros);
            }
        });
        setLista(auxLista);
    }

    return(
        <div class="container">
            <Link to="/">home</Link>
            <h1>Lista de Carros</h1>
            <img src={} alt="imagem" width="100" height="50"></img>
            <form onSubmit={salvar}>
                <input type="text"
                value={carros}
                onChange={(e)=>
                {setCarros(e.target.value)}} />
                <input type="text"
                value={marca}
                onChange={(e)=>
                {setMarca(e.target.value)}} />
                <button>ADICIONAR</button>
            </form>
            {lista.map((carros)=>
            <ul key={carros.id}>
                <li>
                <p>{carros.id}</p>
                <button onClick={() => remover(carros.id)}>REMOVER</button>
                </li>
            </ul>
            )};
        </div>
    )