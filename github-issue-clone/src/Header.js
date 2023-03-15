import Button from "./components/Button";
import Space from "./components/Space";
import Tabs from "./components/Tabs";
import styles from "./Header.module.css";
import { ReactComponent as Watch } from "./images/watch.svg";
import { ReactComponent as Fork } from "./images/fork.svg";
import { ReactComponent as Star } from "./images/star.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <span className={styles.name}>kjungit</span> /{" "}
          <span className={styles.title}>github-issue-clone</span>
        </div>
        <div className={styles.buttonContainer}>
          <Button>
            <Watch />
            Watch <div className={styles.circle}>1.2k</div>
          </Button>
          <Space />
          <Button>
            <Fork />
            Fork
            <div className={styles.circle}>1.8k</div>
          </Button>
          <Space />
          <Button>
            <Star />
            Star
            <div className={styles.circle}>7.7k</div>
          </Button>
        </div>
      </div>
      <Tabs />
    </div>
  );
}
