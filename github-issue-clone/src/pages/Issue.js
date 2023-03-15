import styles from "../App.module.css";
import ListContainer from "../ListContainer";
import Footer from "../Footer";

function Issue() {
  return (
    <div className={styles.app}>
      <ListContainer />
      <Footer />
    </div>
  );
}

export default Issue;
