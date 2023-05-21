import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListCointainer from './components/ItemListCointainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListCointainer greeting="Bienvenidos a nuestra tienda virtual!"/>
    </div>
  );
};

export default App;
