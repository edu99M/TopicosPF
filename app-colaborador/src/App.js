import logo from './logo.svg';
import './App.css';
import Colaborador from './Colaborador';
import ColaboradoresList from './ColaboradoresList';
import ColaboradoresForm from './ColaboradoresForm';

function App() {
  return (
    <div className="App">
      <Colaborador />
      <ColaboradoresList/>
      <ColaboradoresForm/>

    </div>
  );
}

export default App;
