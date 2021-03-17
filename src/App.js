import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componenets/navbar/header.js'
import { InquiryForm } from "./componenets/inquiryForm";
import { Switch, Route } from "react-router-dom";
import {Inquiries } from "./componenets/inquires";

/**
 * @author Rishi
 * @description: Main component that calls all the other components
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/inquiries" component={Inquiries}/>
          <Route path="*" component={InquiryForm} />
      </Switch>
    </div>
  );
}

export default App;
