import FormAluno from "./FormAluno";


const NovoAluno = (props) => {

    const dadosAluno = (item)=>{
        console.log(item)
        props.onNovoAluno(item)
    }  
    return(
        <div >
            <FormAluno guardarDados={dadosAluno} />
        </div>
    )
}
export default NovoAluno;
