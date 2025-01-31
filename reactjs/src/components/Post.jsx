import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, content }) {

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/DiuariMolinari.png' />
                    <div className={styles.authorInfo}>
                        <strong>Diuari Molinari</strong>
                        <span>Dev</span>
                    </div>
                </div>
                <time title='11 de maio às 11:13' dateTime={Date.now}>
                    Publicado há 1h 
                </time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Laboriosam, dolores itaque labore, odit error aliquam similique quibusdam</p> 
                <p><a href="#">iusto esse aut vel natus recusandae adipisci officia. Magnam impedit dolorum optio?</a></p>
                <p>
                    <a href="#">#top</a> {' '}
                    <a href="#">#de</a> {' '}
                    <a href="#">#mais</a>
                </p>
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