import styles from "./PostItem.module.css";

const PostItem = ({ title }) => {
  return (
    <div className={styles["post-item"]}>
      <h3>{title}</h3>
    </div>
  );
};

export default PostItem;
