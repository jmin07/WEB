import { React, useState } from "react";

//MUI 스타일
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

export default function Community() {
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
                                        지역 / 동네
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "dotted 1px lightgray",
                                            width: "9rem",
                                        }}
                                    >
                                        판매자/매너온도
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
                                        분류
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
                                        게시글 보기
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    );
}
