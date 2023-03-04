import { useState } from "react";
import styles from "./ListFilter.module.css";
import Modal from "./Modal";

export default function ListFilter({ onChangeFilter }) {
  return (
    <div>
      <div className={styles.filterLists}>
        <ListFilterItem>Author</ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>Projects</ListFilterItem>
        <ListFilterItem>Milestones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
    </div>
  );
}

function ListFilterItem({ children, onChangeFilter }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={() => setShowModal(true)}>
        {children} <span className={styles.dropdown}></span>
      </span>
      <div className={styles.modalContainer}>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          placeholder="Filter labels"
          searchDataList={["bug", "labels", "Apple"]}
          onClickCell={() => {
            onChangeFilter();
          }}
        />
      </div>
    </div>
  );
}
