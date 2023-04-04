import ShowErro from './ShowErro';
import './boxform.css'
import React,{useState} from 'react'
import './item.css'

const FormAluno = (props) =>{
    const [nomeAluno, setNomeAluno] = useState('');
    const [nfalta, setNFalta] = useState('');
    const [showMsg,setMsgErro] = useState();
   

    const submitHandler = (event) =>{
        event.preventDefault();
        if(nomeAluno.length > 30 || nfalta < 1){
            setMsgErro(!false)
        }
            const aluno={
            nomeA: nomeAluno,
           nunFaltas:nfalta
        }
          props.guardarDados(aluno)
          setNFalta('')
          setNomeAluno('')
        }
        
    
    return(
        <div className='box'>
            <form onSubmit={submitHandler}>
                <div >
                    <div className='nome-aluno'>
     
                        <input type="text"   placeholder="Nome aluno" value={nomeAluno} onChange={e => {
                            setNomeAluno(e.target.value)
                            }}/>
                    </div>
                    <div className='faltas'>
                   
                        <input placeholder="Número de faltas" type="number" value={nfalta} max='30' step='1' min='1'  onChange={e =>{
                           setNFalta(e.target.value)}} />
                    </div>
                </div>
                <div className='botao' >
                    <button type='submit'onClick={()=>setMsgErro(true)}>Adicionar</button>
                       {
                       showMsg ? < ShowErro event={ (props)=> {setMsgErro(false)}}/> : null
                       } 
                       
                </div>
            </form>
        </div>
    );
}
export default FormAluno;