import styles from "./ListContainer.module.css";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import { useState } from "react";
import ListItemLayout from "./components/ListItemLayout";
import Pagination from "./components/Pagination";
import ListFilter from "./components/ListFilter";
import OpenClosedFilters from "./components/openClosedFilters";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open ");
  const [list, setList] = useState([
    /** data */
  ]);
  const [page, setPage] = useState(1);
  // const MAX_PAGE = getData().totalCount
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
          <OpenClosedFilters />
          <ListFilter
            onChangeFilter={(filteredData) => {
              // 필터링 된 요소에 맞게 데이터를 불러오기
              // const data = getData("필터링된 정보");
              // setList(data);
            }}
          />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((listItem, index) => (
            <ListItem
              key={index}
              badges={[
                {
                  color: "red",
                  title: "bug",
                },
              ]}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </div>
  );
}
