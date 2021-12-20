import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import  HeaderApp  from "./components/HeaderApp";
import { BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";

const App = () => {
  return (
    <Container>
      <div className="App">
        <BrowserRouter>
          <HeaderApp />
        </BrowserRouter>
        <Home />
      </div>
    </Container>
  );
};

export default App;
