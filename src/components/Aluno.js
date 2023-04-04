
export default function Aluno(props){
    return(
        <div className="card">
            <p>Nome: {props.nome}    Faltas: {props.faltas}</p>
        </div>
    )
}