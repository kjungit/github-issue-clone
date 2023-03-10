import styles from "./Tabs.module.css";
import { useLocation, Link } from "react-router-dom";

import cx from "clsx";
import { ReactComponent as Code } from "../images/code.svg";
import { ReactComponent as Issues } from "../images/issue.svg";
import { ReactComponent as Requests } from "../images/requests.svg";
import { ReactComponent as Actions } from "../images/actions.svg";
import { ReactComponent as Projects } from "../images/projects.svg";
import { ReactComponent as Wiki } from "../images/wiki.svg";
import { ReactComponent as Security } from "../images/security.svg";
import { ReactComponent as Insights } from "../images/insights.svg";

const tabList = [
  { pathname: "/code", name: "Code", icon: <Code /> },
  { pathname: "/issue", name: "Issues", icon: <Issues /> },
  {
    pathname: "/pulls",
    name: "Pull request",
    icon: <Requests />,
  },
  {
    pathname: "/actions",
    name: "Actions",
    icon: <Actions />,
  },
  {
    pathname: "/projects",
    name: "Projects",
    icon: <Projects />,
  },
  { pathname: "/Wiki", name: "Wiki", title: "Wiki", icon: <Wiki /> },
  {
    pathname: "/security",
    name: "Security",
    icon: <Security />,
  },
  {
    pathname: "/insights",
    name: "Insights",
    icon: <Insights />,
  },
];

export default function Tabs() {
  const { pathname } = useLocation();

  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, index) => (
        <Tab
          key={`${index}`}
          item={tab}
          selected={(pathname === "/" ? "issue" : pathname) === tab.pathname}
          icon={tab.icon}
        />
      ))}
    </ul>
  );
}

function Tab({ item, selected, icon }) {
  return (
    <li>
      <Link to={item.pathname}>
        <button className={cx(styles.tab, { [styles.selected]: selected })}>
          {icon}
          <span>{item.name}</span>
        </button>
      </Link>
    </li>
  );
}
