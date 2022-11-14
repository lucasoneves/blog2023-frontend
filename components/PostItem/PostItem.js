import styles from "./PostItem.module.css";
import Link from "next/link";
const PostItem = ({ title, description, slug }) => {
  return (
    <Link href={`/post/${slug}`}>
      <div className={styles["post-item"]}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default PostItem;
