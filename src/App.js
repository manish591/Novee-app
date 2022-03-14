import "./App.css";
import { 
  Header, 
  Navbar,
  Sidebar
} from './components';

const App = ()  => {
  return (
    <div className="App">
      <Sidebar />
      <Header>
        <Navbar />
      </Header>
    </div>
  );
}

export default App;