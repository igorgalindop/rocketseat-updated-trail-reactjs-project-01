import { Trash, HandsClapping } from 'phosphor-react';

import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/igorgalindop.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igor Galindo</strong>
                            <time title="11 de março às 09:13h" dateTime="2023-03-11">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom dev, parabéns 👏👏</p>
                </div>

                <footer>
                    <button>
                        <HandsClapping />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}