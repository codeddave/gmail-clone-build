import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import EmailList from "./components/EmailList/EmailList";
import Header from "./components/Header/Header";
import Mail from "./components/Mail/Mail";
import SendMail from "./components/SendMail/SendMail";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={EmailList} />

            <Route exact path="/mail" component={Mail} />
          </Switch>
        </div>
        <SendMail />
      </div>
    </Router>
  );
}

export default App;
