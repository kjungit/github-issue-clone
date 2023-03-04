import { useState } from "react";
import cx from "clsx";
import styles from "./openClosedFilters.module.css";

export default function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true);
  // const data = getData();
  // const openData = data.filter((d) => d.state === "open")
  // const closedData = data.filter((d) => d.state === "closed")
  const openModeDataSize = 1; // openData.length
  const closedModeDataSize = 2;

  return (
    <div>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={closedModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </div>
  );
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size}
      {state}
    </span>
  );
}
