import Community from "../components/community";
import {
    Box,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import styled from "styled-components";
import { useContext, useState } from "react";

export default function TraceTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const arr = [1, 2, 3, 4, 5];
    const TitleTextStyle = styled.div`
        font-size: 1.7rem;
        color: #383b40;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1rem;
    `;

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
                    <TitleTextStyle>커뮤니티 게시판</TitleTextStyle>
                    <br />

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
                            <TableBody>
                                {arr.map((item, idx) => (
                                    <Community key={idx}>{item}</Community>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <TablePagination
                        component="div"
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
