import { Trash, HandsClapping } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [applaudCount, setApplaudCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleApplaudComment() {
    setApplaudCount(applaudCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/igorgalindop.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Galindo</strong>
              <time title="11 de março às 09:13h" dateTime="2023-03-11">Cerca de 1h atrás</time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleApplaudComment}>
            <HandsClapping />
            Aplaudir <span>{applaudCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}