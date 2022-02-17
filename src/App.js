
import './App.css';
import PageRouter from './PageRouter';
import MenuAppBar from './components/MenuAppBar';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <PageRouter />
      <Footer />
    </div>
  );
}

export default App;
