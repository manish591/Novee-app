import "./App.css";
import { 
  Header, 
  Navbar,
  Sidebar,
  Carousel,
  Footer
} from './components';

import {
  Home
} from './pages';

const App = ()  => {
  return (
    <div className="App">
      <Sidebar />
      <Header>
        <Navbar />
        <Carousel />
      </Header>
      <Home />
      <Footer />
    </div>
  );
}

export default App;