import { useState } from "react";
import { Link } from "react-router-dom";
export default function Todo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [idCount, setIdCount] = useState(1);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            id:idCount,
            atividade:atividade
        }]);
        setAtividade("")
        setIdCount(idCount + 1)
    };

    return(
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>
            <form onSubmit={salvar}>
                <input type="text"
                onChange={(e)=>
                {setAtividade(e.target.value)}} />
                <button>ADD</button>
            </form>
            {lista.map((ativ)=>
            <div>
                <p key={ativ.id}> {ativ.id}: {ativ.atividade}</p>
            </div>
            )};
        </div>
    )
}