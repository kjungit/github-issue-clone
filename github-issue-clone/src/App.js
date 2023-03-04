import styles from "./App.module.css";
import Header from "./Header";
import ListContainer from "./ListContainer";
import Footer from "./Footer";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.nav}>Nav</div>
      <Header />
      <ListContainer />
      <Footer />
    </div>
  );
}

export default App;
