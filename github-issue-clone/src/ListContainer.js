import styles from "./ListContainer.module.css";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ListItemLayout from "./components/ListItemLayout";
import Pagination from "./components/Pagination";
import ListFilter from "./components/ListFilter";
import OpenClosedFilters from "./components/openClosedFilters";
import axios from "axios";
import { GITHUB_API } from "./api";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open ");
  const [checked, setChecked] = useState(false);
  const [list, setList] = useState([]); /** data */
  const maxPage = 10;

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? 1, 10);
  const state = searchParams.get("state");

  async function getData(params) {
    const data = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`, {
      params,
    });
    setList(data.data);
  }

  useEffect(() => {
    getData(searchParams);
  }, [searchParams]);

  return (
    <div>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <Button
            style={{
              fonsSize: "14px",
              backgroundColor: "#2ea043",
              color: "white",
            }}
          >
            New issue
          </Button>
        </div>
        <ListItemLayout className={styles.listFilter}>
          <OpenClosedFilters
            isOpenMode={state !== "closed"}
            onClickMode={(state) => setSearchParams({ state })}
          />
          <ListFilter
            onChangeFilter={(params) => {
              // 필터링 된 요소에 맞게 데이터를 불러오기
              // const data = getData("필터링된 정보");
              setSearchParams(params);
            }}
          />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((listItem) => (
            <ListItem
              data={listItem}
              key={listItem.id}
              checked={checked}
              onChangeCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={maxPage}
          currentPage={page}
          onClickPageButton={(pageNumber) =>
            setSearchParams({ page: pageNumber })
          }
        />
      </div>
    </div>
  );
}
