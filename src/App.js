import "./App.css";
import { 
  Header, 
  Navbar
} from './components';

const App = ()  => {
  return (
    <div className="App">
      <Header>
        <Navbar />
      </Header>
    </div>
  );
}

export default App;