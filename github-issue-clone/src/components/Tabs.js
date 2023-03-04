import styles from "./Tabs.module.css";
import cx from "clsx";
import { useState } from "react";
import { ReactComponent as Code } from "../images/code.svg";
import { ReactComponent as Issues } from "../images/issue.svg";
import { ReactComponent as Requests } from "../images/requests.svg";
import { ReactComponent as Actions } from "../images/actions.svg";
import { ReactComponent as Projects } from "../images/projects.svg";
import { ReactComponent as Wiki } from "../images/wiki.svg";
import { ReactComponent as Security } from "../images/security.svg";
import { ReactComponent as Insights } from "../images/insights.svg";

const tabList = [
  { title: "Code", icon: <Code /> },
  { title: "Issues", icon: <Issues /> },
  { title: "Pull requests", icon: <Requests /> },
  { title: "Actions", icon: <Actions /> },
  { title: "Projects", icon: <Projects /> },
  { title: "Wiki", icon: <Wiki /> },
  { title: "Security", icon: <Security /> },
  { title: "Insights", icon: <Insights /> },
];

export default function Tabs() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, index) => (
        <Tab
          key={`${index}`}
          title={tab.title}
          selected={selectedTabIndex === index}
          onClick={() => setSelectedTabIndex(index)}
          icon={tab.icon}
        />
      ))}
    </ul>
  );
}

function Tab({ title, selected, onClick, number, icon }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        {icon}
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  );
}
