import cx from "clsx";
import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}) {
  const [filteredData, setFilteredData] = useState(searchDataList);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setFilteredData(searchDataList);
  }, [searchDataList]);

  useEffect(() => {
    if (searchValue === "") {
      setFilteredData(searchDataList);
    } else {
      const filteredSearchList = searchDataList.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredData(filteredSearchList);
    }
  }, [searchDataList, searchValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>Filter by {title}</span>
        <button onClick={onClose}>
          <svg aria-label="CloseMenu" role="img" viewBox="0 0 16 16" width="16">
            <path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
          </svg>
        </button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={styles.list}>
        {filteredData.map((data) => (
          <div
            role="button"
            onClick={() => {
              const isLabel = title.toLowerCase() === "label";
              const paramKey = isLabel ? "labels" : title.toLowerCase();
              onClickCell({ [paramKey]: data.name });
            }}
            key={data.name}
            className={styles.item}
          >
            {data.name}
          </div>
        ))}
      </div>
    </div>
  );
}
