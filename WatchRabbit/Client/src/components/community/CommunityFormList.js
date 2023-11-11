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

export default function Community({ id, title, category, price, like }) {
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
                    {id}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        borderRight: "dotted 1px lightgray",
                    }}
                >
                    {title}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        borderRight: "dotted 1px lightgray",
                        width: "9rem",
                    }}
                >
                    {category}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        borderRight: "dotted 1px lightgray",
                        width: "9rem",
                    }}
                >
                    {price}
                </TableCell>

                <TableCell align="center" sx={{ width: "9rem" }}>
                    <Button
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                            background: "#ed6c02",
                        }}
                    >
                        {like}
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
}
