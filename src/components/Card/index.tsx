import styles from "./Card.module.css";
import { Link } from "react-router-dom";

interface CardProps {
  username: string;
  description: string;
  image: string;
  route: string;
}

export function Card({ username, description, image, route }: CardProps) {
  return (
    <a href={route}>
      <div className={styles.card}>
        <div className={styles.details}>
          <img src={image} alt="" />
          <div>
            <p>{username}</p>
            <p>{description}</p>
          </div>
        </div>
        <span className="material-symbols-outlined">chevron_right</span>
      </div>
    </a>
  );
}
