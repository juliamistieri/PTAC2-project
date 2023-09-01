import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Todo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [idCriar, setIdCriar] = useState(1);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            id:idCriar,
            atividade:atividade
        }]);
        setAtividade("")
        setIdCriar(idCriar + 1)
    };

    const remover = (id) => {
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }

    return(
        <div class="container">
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>
            <form onSubmit={salvar}>
                <input type="text"
                value={atividade}
                onChange={(e)=>
                {setAtividade(e.target.value)}} />
                <button>ADICIONAR</button>
            </form>
            {lista.map((ativ)=>
            <ul key={ativ.id}>
                <li>
                <p>{ativ.atividade}</p>
                <button onClick={() => remover(ativ.id)}>REMOVER</button>
                </li>
            </ul>
            )};
        </div>
    )
}