import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componenets/navbar/header.js'
import { HeaderImg } from "./componenets/navbar/harderImg";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderImg />
    </div>
  );
}

export default App;
