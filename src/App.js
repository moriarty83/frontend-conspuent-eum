
import './App.css';
import PageRouter from './PageRouter';
import MenuAppBar from './components/MenuAppBar';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <PageRouter />
    </div>
  );
}

export default App;
