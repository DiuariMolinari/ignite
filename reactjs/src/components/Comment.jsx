
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ comment }) {
    return (
        <div className={styles.comment}>
           <Avatar hasBorder={false} src='https://github.com/DiuariMolinari.png' />
           <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diuari Molinari</strong>
                            <time title='11 de maio às 11:13' dateTime={Date.now}>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'> 
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
           </div>
        </div>
    )
}
