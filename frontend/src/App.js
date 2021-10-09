import { Switch, Route } from "react-router";

import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";

import Inventory from "./pages/Inventory";
import Wiki from "./pages/Wiki";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Switch>
          <Route exact path={["/"]} component={Inventory} />
          <Route path={"/wiki"} component={Wiki} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
