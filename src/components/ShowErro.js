export default function ShowErro(props){
    return(
    <div className="modal">
        <div className="container">
            <div className="content_falta ">
                <h3>Input de falta invalido</h3>
              <div >
                 <p>Por Favor digite um valor entre 1 a 30 !!!  </p>
              <button  onClick={props.event}> ok   </button>
              </div>
            </div>
              

        </div>  
    </div>
    )
}/*<div className="nomeInvalido">
              <h3>Input de nome invalido</h3>
              <p>Por Favor digite um nome válido!!!</p>
              <button> ok </button>
        </div>*/