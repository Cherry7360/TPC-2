
import './App.css';
import { useState } from 'react';
import NovoAluno from './components/NovoAluno';
import ListaAluno from './components/ListaAluno';

export default function App() {
  const[listaAluno,setListaAluno]=useState([])
   function AddAluno(aluno){
        setListaAluno((listaAnterior)=>(
          [aluno,...listaAnterior]
        ))
   }
  return (
    <div className="App">
     <h3>Registar</h3>
     <NovoAluno onNovoAluno={AddAluno}/>
     <ListaAluno listaAluno={listaAluno}/>
    </div>
  );
}


