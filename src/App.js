import Header from './components/Header'
import Routes from './routes';
import allRoutes from './data/appRoutes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header sections={allRoutes} />
      <div className="App-content">
        <Routes allRoutes={allRoutes} />
      </div>
      <footer className="App-footer">
        Todos os direitos reservados. Créditos à Victoria Luquet (vllst)
      </footer>
    </div>
  );
}

export default App;
