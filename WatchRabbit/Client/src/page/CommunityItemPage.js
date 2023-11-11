import { useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { BackButton, Button } from "../components/community/CommunityStyled";
import {
    CommentInput,
    CommentItem,
    CommentItemContainer,
    commentContainer,
} from "../components/community/CommunityStyled";
import { getComment, postComment, getcheckUser } from "../api";
import CommentFormList from "../components/community/comment/commentFormList";

import "../style/page.css";
export default function CommunityItemPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [comment, commentSet] = useState([]);
    const [commentReply, commentReplySet] = useState("");
    const [status, statusSet] = useState([]);
    const { idx, title, image, content, price, date } = location.state;

    const backPage = () => navigate("/community");

    const handleInputChange = (e) => {
        commentReplySet(e.target.value);
    };
    const handleOnclick = async () => {
        try {
            const props = { id: idx, value: commentReply };
            const response = await postComment(props);
            if (response.isSuccess) {
                alert(`${response.message}`);
                window.location.replace(`/community/${idx}`);
            } else {
                commentReplySet("");
                alert(`${response.message}`);
            }
        } catch (err) {
            console.log("err", err);
        }
    };

    useEffect(() => {
        // 해당 게시글에 작성되어 있는 댓글 가져오기
        // 이거를 활용할 수는 없을까???
        async function getCommentFunction() {
            const response = await getComment({ id: idx });
            if (response.isSuccess) {
                commentSet(response.result);
            }
        }
        getCommentFunction();
    }, []);

    // useEffect(()=>{
    //     // 해당 게시글 및 댓글이 회원인지 아닌지 확인
    //     async function getcheckUserFunction() {
    //         const response = await getcheckUser({ id: idx});
    //         if (response.isSuccess){
    //             statusSet(response.result);
    //         }
    //     }
    // })

    return (
        <>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        m: 5,
                        mt: 2,
                        background: "#f5f5f5",
                        borderRadius: "5px",
                        p: 5,
                        boxShadow: "0px 0px 5px 1px #ccc",
                        height: "100%",
                        fontFamily: "MICEGothic Bold",
                    }}
                >
                    <BackButton>
                        <button onClick={backPage}>{"<<"}</button>
                    </BackButton>
                    <div className="form">
                        <div className="form_img">
                            <img className="form_img" src={image} alt={title} />
                        </div>
                        <div className="form_content">
                            <h3>제목:</h3>
                            <div className="form_title">
                                <h3>{title}</h3>
                            </div>
                            <div>
                                <h4>작성 날짜: {date}</h4>
                            </div>
                            <p />
                            <p />
                            <h4>가격: {price}</h4>
                            <p />
                            <h4>내용: {content}</h4>
                            <p />
                        </div>
                    </div>
                </Box>
                <Box
                    sx={{
                        m: 5,
                        mt: 2,
                        background: "#f5f5f5",
                        borderRadius: "5px",
                        p: 5,
                        boxShadow: "0px 0px 5px 1px #ccc",
                        height: "100%",
                        fontFamily: "MICEGothic Bold",
                    }}
                >
                    <commentContainer>
                        <h3>댓글 {comment.length}</h3>
                        <CommentInput>
                            <input
                                name="comment"
                                placeholder="댓글을 입력해주세요"
                                value={commentReply}
                                onChange={handleInputChange}
                            />
                            <Button onClick={handleOnclick}>작성</Button>
                        </CommentInput>
                        <CommentFormList items={comment} />
                    </commentContainer>
                    {/* <CommentArea>
                        {post.comments &&
                            post.comments
                                .slice(0)
                                .reverse()
                                .map((comment) => (
                                    <CommentItem key={comment.id}>
                                        <CommentHandler>
                                            <AuthorInfo>
                                                <AuthorProfile>
                                                    {comment?.author?.profile
                                                        ?.imageUrl ? (
                                                        <img
                                                            src={
                                                                comment.author
                                                                    .profile
                                                                    .imageUrl
                                                            }
                                                        />
                                                    ) : (
                                                        <img src="../img/defaultimgGrey.png" />
                                                    )}
                                                </AuthorProfile>
                                                <h3>
                                                    {comment.author.nickname}
                                                </h3>
                                            </AuthorInfo>
                                            <CommentContentInfo>
                                                <span>
                                                    {getElapsedTime(
                                                        comment.createdAt
                                                    )}
                                                </span>
                                                {comment?.author?.id ===
                                                me?.id ? (
                                                    <>
                                                        <span>·</span>
                                                        <span
                                                            id="delete_btn"
                                                            onClick={() =>
                                                                handleDeleteCmt(
                                                                    comment.id
                                                                )
                                                            }
                                                        >
                                                            삭제
                                                        </span>
                                                    </>
                                                ) : null}
                                            </CommentContentInfo>
                                        </CommentHandler>

                                        <p>{comment.content}</p>
                                    </CommentItem>
                                ))}
                    </CommentArea> */}
                </Box>
            </Container>
        </>
    );
}
