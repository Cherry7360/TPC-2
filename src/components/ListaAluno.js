import Aluno from "./Aluno";

export default function ListaAluno(props){

    return(
        <div>{
            props.listaAluno.map((infoAluno)=>(

                <Aluno nome={infoAluno.nomeA} faltas={infoAluno.nunFaltas}/>
            ))
            }
            
        </div>
    )
}