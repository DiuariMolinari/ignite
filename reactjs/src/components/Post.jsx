import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const pusblishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {pusblishedDateRelativeToNow} 
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map((item, index) => {
                        if (item.type === 'paragraph') {
                            return <p key={index}>{item.content}</p>
                        } 
                        else if (item.type === 'link') {
                            return <p><a key={index} href='#'>{item.content}</a></p>
                        }
                    })
                }
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment comment={"Parabéns!"}/>
                <Comment comment={"Muito bom!!"}/>
                <Comment comment={"Show!"}/>
            </div>
        </article>
    )
}
