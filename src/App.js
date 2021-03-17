import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componenets/navbar/header.js'
import { InquiryForm } from "./componenets/inquiryForm";

function App() {
  return (
    <div className="App">
      <Header />
      <InquiryForm />
    </div>
  );
}

export default App;
