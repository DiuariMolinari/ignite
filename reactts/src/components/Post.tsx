import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

import { useState } from 'react'

interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link',
    content: string
}

interface PostProps {
    author: Author,
    content: Content[],
    publishedAt: Date
}

export function Post({ author, content, publishedAt } : PostProps) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const pusblishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })
   
    const [comments, setComments] = useState(["Parabéns!", "Muito bom!!", "Show! hahaha!"])
    const [newCommentText, setNewCommentText] = useState('')

    const isNewCommentEmpty = newCommentText.length === 0;
    
    function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setComments((prev) => [...prev, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: React.InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Campo obrigatório.')
    }

    function deleteComment(comment: string) {
        setComments((prev) => prev.filter((item) => item !== comment))
    }

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
                    content.map((item) => {
                        if (item.type === 'paragraph') {
                            return <p key={item.content}>{item.content}</p>
                        } 
                        else if (item.type === 'link') {
                            return <p key={item.content}><a href='#'>{item.content}</a></p>
                        }
                    })
                }
            </div>
            
            <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment" 
                    placeholder='Deixe um comentário' 
                    onChange={handleNewCommentChange} 
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map((comment) => {
                        return (
                            <Comment 
                                key={comment} 
                                comment={comment} 
                                onDeleteComment={deleteComment} 
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}
