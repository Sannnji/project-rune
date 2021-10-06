import { Switch, Route } from "react-router";

import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Wiki from "./pages/Wiki";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Switch>
          <Route exact path={["/"]} component={Home} />
          <Route path={"/wiki"} component={Wiki} />
          <Route path={"/inventory"} component={Inventory} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
