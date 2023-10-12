import React from 'react';
import styles from './card.css';

export function Card() {
  return (
    <li className={styles.card}>
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        className={styles.avatar}
                        src=""
                        alt="avatar"/>
                    <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
                </div>
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>опубликовано </span>
                    4 часа назад
                </span>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>
                    Следует отметить, что новая модель организационной деятельности Следует
                </a>
            </h2>
        </div>
        <div className={styles.preview}>
            <img
                className={styles.previewImg}
                src="#"
            />
        </div>
        <div className={styles.menu}>
            <button className={styles.menuButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20" fill="none">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
                    <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
                    <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
                </svg>
            </button>
        </div>
        <div className={styles.controls}>
            <div className={styles.karmaCounter}>
                <button className={styles.up}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                    </svg>
                </button>
                <span className={styles.karmaValue}>234</span>
                <button className={styles.down}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                    </svg>
                </button>
            </div>
            <button className={styles.commentsButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z" fill="#C4C4C4"/>
                </svg>
                <span className={styles.commentsNumber}>13</span>
            </button>
        </div>
        <div className={styles.actions}>
            <button className={styles.shareButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z" fill="#C4C4C4"/>
                </svg>
            </button>

            <button className={styles.saveButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#C4C4C4"/>
                </svg>
            </button>
        </div>
    </li>
  );
}
