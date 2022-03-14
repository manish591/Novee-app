import "./App.css";
import { 
  Header, 
  Navbar,
  Sidebar,
  Carousel
} from './components';

const App = ()  => {
  return (
    <div className="App">
      <Sidebar />
      <Header>
        <Navbar />
        <Carousel />
      </Header>
    </div>
  );
}

export default App;