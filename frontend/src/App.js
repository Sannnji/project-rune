import { Switch, Route } from "react-router";

import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Wiki from "./pages/Wiki";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/wiki" component={Wiki} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
