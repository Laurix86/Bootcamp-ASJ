
import './App.css';
// import News from './components/News';
// import Boton from './components/Boton';
import Dado from './components/Dado';




function App() {
 

  return (
    <div className="App">
      
     <div className="row justify-content-center align-items-center g-2" >
     <div className='container'>
      <h1 className="display-1">ASJ Newz</h1>
        {/* <Boton />
        
        <News /> */}
        <Dado />
      </div>
      
     </div>
    
      
    </div>
  );
}

export default App;
