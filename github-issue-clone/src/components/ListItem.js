import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";
import Badge from "./Badge";

export default function ListItem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  data,
}) {
  dayjs.extend(relativeTime);

  const badges = data.labels;
  const date = data.state === "open" ? data.created_at : data.closed_at;
  const state = data.state === "open" ? "opened" : "colosed";
  return (
    <ListItemLayout>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {data.labels.length > 0 &&
            badges.map((badgeProps, index) => (
              <Badge key={index} {...badgeProps} />
            ))}
        </div>
        <div className={styles.description}>
          #{data.number} {state} {dayjs(date).fromNow()}
        </div>
      </div>
    </ListItemLayout>
  );
}
