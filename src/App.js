import logo from './logo.svg';
import './App.css';
import NavBar from './components/NabBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting='Bienvenido a Infinito - Arte con Papel' />
      </header>
    </div>
  );
}

export default App;
