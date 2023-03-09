import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";

import Code from "./pages/Code";
import Actions from "./pages/Actions";
import CreateIssue from "./pages/CreateIssue";
import Issue from "./pages/Issue";
import Projects from "./pages/Projects";
import PullRequest from "./pages/PullRequest";
import Security from "./pages/Security";
import Wiki from "./pages/Wiki";
import Insights from "./pages/Insights";
import Nav from "./components/Nav";
import Header from "./Header";

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />}></Route>
        <Route path="/issue" element={<Issue />}></Route>
        <Route path="/new" element={<CreateIssue />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/Pulls" element={<PullRequest />}></Route>
        <Route path="/code" element={<Code />}></Route>
        <Route path="/security" element={<Security />}></Route>
        <Route path="/actions" element={<Actions />}></Route>
        <Route path="/wiki" element={<Wiki />}></Route>
        <Route path="/insights" element={<Insights />}></Route>
      </Routes>
    </div>
  );
}

export default App;
