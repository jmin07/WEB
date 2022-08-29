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
    Button,
} from "@mui/material";

export default function Community() {
    return (
        <>
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

                <TableCell align="center" sx={{ width: "9rem" }}>
                    <Button
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                            background: "#ed6c02",
                        }}
                    >
                        좋아요
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
}
