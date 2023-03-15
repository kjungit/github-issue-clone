import styles from "./Badge.module.css";

export default function Badge({ name, color }) {
  return (
    <span
      className={styles.badge}
      style={{
        backgroundColor: `#${color}33`,
        border: `1px solid #${color}80`,
        color: `#${color}`,
      }}
    >
      {name}
    </span>
  );
}
