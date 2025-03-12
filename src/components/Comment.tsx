import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state) => state + 1);
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/JonasGabrielMartins.png" alt="" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jonas Gabriel</strong>
                            <time title="28 de Fevereiro ás 11:24" dateTime="2025-02-28 11:24:00">Cerca de 1hr atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button
                        onClick={handleLikeComment}
                    >
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                    
                </footer>

            </div>


        </div>
    )
}