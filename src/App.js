import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import EmailList from "./components/EmailList/EmailList";
import Header from "./components/Header/Header";
import Mail from "./components/Mail/Mail";
import SendMail from "./components/SendMail/SendMail";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import { setCurrentUser } from "./redux/user/userActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";

function App({ isMessageOpen }) {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      dispatch(setCurrentUser(user));
    });
    return () => unsubscribeFromAuth();
  }, []);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={EmailList} />

              <Route exact path="/mail" component={Mail} />
            </Switch>
          </div>
          {isMessageOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}
const mapStateToProps = (state) => ({
  isMessageOpen: state.mail.isMessageOpen,
});
export default connect(mapStateToProps)(App);
