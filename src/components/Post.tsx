import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";


import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: string;
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    contents: Content[];
}

export function Post({ author, publishedAt, contents }: PostProps) {
    const [comments, setComments] = useState([
        "Post muito bacana, hein?!",
        "Muito bom Devon, parabéns!! 👏👏"
    ])

    const [newCommentText, setNewCommentText] = useState("");

    const publishedAtFromatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
    
        setComments([...comments, newCommentText]);
        setNewCommentText("");
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório!");
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtFromatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    contents.map(line => {
                        if (line.type === "paragraph"){
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type === "link") {
                            return <p key={line.content}><a href="">{line.content}</a></p>
                        } else {
                            return <a key={line.content} href="">{line.content}</a>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment" 
                    placeholder="Deixe seu comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty} >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}
