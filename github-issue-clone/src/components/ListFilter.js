import axios from "axios";
import { useState, useEffect } from "react";
import { GITHUB_API } from "../api";
import styles from "./ListFilter.module.css";
import Modal from "./Modal";

export default function ListFilter({ onChangeFilter }) {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);
  const filterList = ["Label", "Milestone", "Assignee"];

  async function getData(apiPath) {
    const data = await axios.get(
      `${GITHUB_API}/repos/facebook/react/${apiPath}`,
    );
    let result = [];

    // 각 다른 데이터값을 가공
    switch (apiPath) {
      case "assignees":
        result = data.data.map((data) => ({
          name: data.login,
        }));
        break;
      case "milestones":
        result = data.data.map((data) => ({
          name: data.title,
        }));
        break;
      case "label":
      default:
        result = data.data;
    }
    setList(result);
  }

  useEffect(() => {
    if (showModal) {
      const apiPath = `${showModal.toLowerCase()}s`;
      getData(apiPath);
    }
  }, [showModal]);

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterLists}>
        {filterList.map((filter, index) => (
          <ListFilterItem
            key={index}
            searchDataList={list}
            onClick={() => setShowModal(filter)}
            onClose={() => setShowModal()}
            showModal={showModal === filter}
            onChangeFilter={onChangeFilter}
          >
            {filter}
          </ListFilterItem>
        ))}
      </div>
    </div>
  );
}

function ListFilterItem({
  children,
  placeholder,
  searchDataList,
  showModal,
  onClick,
  onClose,
  onChangeFilter,
}) {
  const [list, setList] = useState(searchDataList);

  useEffect(() => {
    setList(searchDataList);
  }, [searchDataList]);

  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={onClick}>
        {children} <span className={styles.dropdown}></span>
      </span>
      <div className={styles.modalContainer}>
        <Modal
          title={children}
          opened={showModal}
          onClose={onClose}
          placeholder={placeholder}
          searchDataList={list}
          onClickCell={(params) => {
            onChangeFilter(params);
          }}
        />
      </div>
    </div>
  );
}
