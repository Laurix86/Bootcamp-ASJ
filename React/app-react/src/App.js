
import './App.css';
// import News from './components/News';
// import Boton from './components/Boton';
import Dado from './components/Dado';
import Componente2 from './components/Componente2';
import Usuarios from './components/Usuarios';




function App() {
 

  return (
    <div className="App">
      
     <div className="row justify-content-center align-items-center g-2" >
     <div className='container'>
      <h1 className="display-1 mb-5">ASJ Newz</h1>
        {/* <Boton />
        
        <News /> */}
        <Dado />
        <Componente2 />
        <Usuarios />
  
      </div>
      
     </div>
    
      
    </div>
  );
}

export default App;
