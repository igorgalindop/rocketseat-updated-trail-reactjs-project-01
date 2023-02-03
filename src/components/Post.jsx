import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://github.com/igorgalindop.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Igor Galindo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13h" dateTime="2023-02-02 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum 👋</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem, ipsam laudantium, deleniti tempora ullam ducimus enim iste quae magni magnam in similique non consequatur quod asperiores voluptates, ipsum corporis.</p>
                <p><a href=''>lorem.ipsum/link</a></p>
                <p>
                    <a href=''>#lorem</a>
                    <a href=''>#ipsum</a>
                </p>
            </div>
        </article>
    )
}