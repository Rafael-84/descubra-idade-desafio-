import { useState, type FormEvent } from 'react';
import './App.css';

function App() {

  interface DescobrirIdadeProps{
    nome: string;
    idade: string;
  }
   
  const [nome, setNome] = useState('');
  const [anoDigitado, setAnoDigitado] = useState('');
  const [resultado, setResultado] = useState<DescobrirIdadeProps>({
    nome: nome,
    idade: '',
  });
  

  function calculaIdade(e : FormEvent){
    e.preventDefault()
    const anoAtual = new Date().getFullYear()
    const contaResultado = anoAtual - Number(anoDigitado);
    if(nome && anoDigitado === ''){
      alert("Preencha todos os campos");
      return;
    }

    if(Number.isNaN(contaResultado)){
      alert("Digite um número válido")
      return
    }

    if(nome && anoDigitado !== '' ||  !Number.isNaN(contaResultado)){
      setResultado({
        nome: nome,
        idade: String(contaResultado),
      });
    }

    console.log(resultado.nome, resultado.idade)
    
  }

  return (   
      
      <main>
        <section className="container">
          <h1>Descubra sua idade</h1>
          <div className="container-form">
            <form className='formulario' onSubmit={calculaIdade}>
              <label>Digite seu nome?</label>
              <input className='input' type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Digite seu nome...' required />
              
              <label htmlFor="">Digite o ano que nasceu?</label>
              <input className='input' type="text" value={anoDigitado} onChange={(e) => setAnoDigitado(e.target.value)} placeholder='Digite o ano de nascimento...' required />
              <button  type='submit' className="button" >Descobrir idade</button>
            </form>

            {resultado.nome && resultado.idade !== '' &&  <span className='resultado-condicional'>{resultado.nome} você tem: <p>{resultado.idade} anos</p></span>}
          </div>
        </section>
      </main>
     
  )
}

export default App
