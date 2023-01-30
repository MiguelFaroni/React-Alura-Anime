import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';


function App() {

    const times = [
        {
        nome : 'Top',
        corPrimaria : '#57c278',
        corSecundaria : '#d9f7e9'
    },
    {
        nome : 'Bom',
        corPrimaria : '#82CFFA',
        corSecundaria : '#E8F8FF'
    },
    {
        nome : 'Mediano',
        corPrimaria : '#A6D157',
        corSecundaria : '#F0F8E2'
    },
    {
        nome : 'Ruim',
        corPrimaria : '#E06B69',
        corSecundaria : '#FDE7E8'
    },
    {
        nome : 'Horrivel',
        corPrimaria : '#DB6EBF',
        corSecundaria : '#FAE9F5'
    },
    ]

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) =>{
        debugger        
        setColaboradores([...colaboradores,colaborador])
    }

  return (
    <div className="App">
        <Banner />
        <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado= {colaborador => aoNovoColaboradorAdicionado(colaborador)} />
        {times.map(time => <Time 
         key={time.nome} 
         nome={time.nome} 
         corPrimaria = {time.corPrimaria}  
         corSecundaria = {time.corSecundaria}
         colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome )}
         />)}
        <Rodape />
                
    </div>
  );
}

export default App;
