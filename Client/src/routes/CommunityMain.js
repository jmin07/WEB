// import Community from "../components/community";
import DiaryList from "../components/community/community.test";
import CommunityForm from "../components/community/CommunityForm";
import "../style/page.css";
import {
    PostButton,
    BtnLine,
    BtnContainer,
    MoreDiv,
    TitleTextStyle,
} from "../style/styled";

import data from "../dummy/community";

import { Box, Button, Container } from "@mui/material";
import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function TraceTable() {
    const [status, setStatus] = useState(false);
    const [title, setTitle] = useState("커뮤니티 게시판");
    const [now, setNow] = useState("글쓰기");
    const [order, setOrder] = useState("createdAt");
    const [offset, setOffset] = useState(0);
    const [hasNext, setHasNext] = useState(false);
    const [items, setItems] = useState([]);
    const sortedItems = items.sort((a, b) => b[order] - a[order]);

    // const navigate = useNavigate();
    function PostClick() {
        if (status) {
            // status 가 참이면 글 작성 중이니까 커뮤니티로 이동
            setStatus(false);
            setTitle("커뮤니티 게시판");
            setNow("글쓰기");
        } else {
            setStatus(true);
            setTitle("커뮤니티 게시글 작성");
            setNow("뒤로가기");
        }
    }

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
                    <TitleTextStyle>{title}</TitleTextStyle>
                    <PostButton>
                        <Button
                            sx={{
                                fontWeight: "bold",
                                color: "black",
                                background: "rgb(238, 238, 238)",
                            }}
                            variant="contained"
                            color="warning"
                            onClick={PostClick}
                        >
                            {now}
                        </Button>
                    </PostButton>
                    {status ? <CommunityForm /> : <DiaryList items={data} />}

                    <BtnContainer>
                        <BtnLine></BtnLine>
                        <MoreDiv>
                            <Button
                                sx={{
                                    fontWeight: "bold",
                                    color: "black",
                                    background: "rgb(238, 238, 238)",
                                }}
                                variant="contained"
                                color="warning"
                            >
                                더보기
                            </Button>
                        </MoreDiv>
                    </BtnContainer>
                    {/*<br />

                    <TableContainer
                        component={Paper}
                        variant="outlined"
                        sx={{
                            background: "",
                            boxShadow: "0px 0px 3px 0px #ccc",
                        }}
                    >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "dotted 1px lightgray",
                                            width: "9rem",
                                        }}
                                    >
                                        번호
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "dotted 1px lightgray",
                                        }}
                                    >
                                        글 제목
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "dotted 1px lightgray",
                                            width: "9rem",
                                        }}
                                    >
                                        카테고리
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "dotted 1px lightgray",
                                            width: "9rem",
                                        }}
                                    >
                                        물품 가격
                                    </TableCell>

                                    <TableCell
                                        align="center"
                                        sx={{ width: "9rem" }}
                                    >
                                        좋아요
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody> */}
                    {/* {arr.map((item) => ( */}

                    {/* ))} */}
                    {/* </TableBody>
                        </Table>
                    </TableContainer> */}
                    {/* <TablePagination
                        component="DeleteButton"
                        count={dataCell.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        labelRowsPerPage="게시글 범위"
                        labelDisplayedRows={function defaultLabelDisplayedRows({
                            from,
                            to,
                            count,
                        }) {
                            return `전체 ${
                                count !== -1 ? count : `more than ${to}`
                            }개 중 ${from}–${to}까지`;
                        }}
                    ></TablePagination> */}
                </Box>
            </Container>
        </>
    );
}
