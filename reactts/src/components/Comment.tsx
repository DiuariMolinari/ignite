
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    comment: string,
    onDeleteComment: (comment: string) => void
}

export function Comment({ comment, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(comment)
    }

    function handleLikeComment() {
        setLikeCount((prev) => prev + 1);
    }

    return (
        <div className={styles.comment}>
           <Avatar hasBorder={false} src='https://github.com/DiuariMolinari.png' />
           <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diuari Molinari</strong>
                            <time title='11 de maio às 11:13' dateTime={Date.now().toString()}>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'> 
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment} >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
           </div>
        </div>
    )
}
