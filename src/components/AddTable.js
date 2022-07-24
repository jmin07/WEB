import data from "../data";
import { useState, useMemo } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { Paper, Button, InputBase, TableContainer, Table } from "@mui/material";
import { postTraceData } from "../api";

export default function AddTable({ children }) {
  const [currentCountry, setCurrentCountry] = useState("서울");
  const [currentCity, setCurrentCity] = useState(data[currentCountry][0]);
  const countries = useMemo(() => Object.keys(data), []);
  const cities = useMemo(() => data[currentCountry], [currentCountry]);
  const onChange = (e) => {
    const currentCountry = e.target.value;
    setCurrentCountry(currentCountry);
    setCurrentCity(data[currentCountry][0]);
  };
  const onChange2 = (e) => {
    setCurrentCity(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const city = e.target[0].value;
    const area = e.target[1].value;
    const value = e.target[2].value;
    const minPrice = e.target[3].value;
    const maxPrice = e.target[4].value;
    const data = "/db/trace";
    const props = {
      path: data,
      traceCity: city,
      traceArea: area,
      traceValue: value,
      traceMinPrice: minPrice,
      traceMaxPrice: maxPrice,
    };
    postTraceData(props);
  };
  return (
    <TableContainer
      component="form"
      variant="outlined"
      sx={{ background: "white" }}
      onSubmit={onSubmit}
    >
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell
              align="center"
              sx={{ borderRight: "dotted 1px lightgray", width: "11rem" }}
            >
              <select
                name="selectId1"
                id="selectId1"
                onChange={onChange}
                value={currentCountry}
                style={{ padding: "0.4rem", border: "none", outline: "none" }}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </TableCell>
            <TableCell
              align="center"
              sx={{ borderRight: "dotted 1px lightgray", width: "11rem" }}
            >
              <select
                name="selectId2"
                id="selectId2"
                value={currentCity}
                onChange={onChange2}
                style={{ padding: "0.4rem", border: "none", outline: "none" }}
              >
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </TableCell>
            <TableCell
              align="center"
              sx={{ borderRight: "dotted 1px lightgray", width: "11rem" }}
            >
              <input
                placeholder="추적할 물품"
                style={{
                  padding: "0.7rem",
                  border: "none",
                  outline: "none",
                }}
              />
            </TableCell>
            <TableCell
              align="center"
              sx={{ borderRight: "dotted 1px lightgray", width: "11rem" }}
            >
              <input
                placeholder="최저가"
                style={{
                  padding: "0.7rem",
                  border: "none",
                  outline: "none",
                }}
              />
            </TableCell>
            <TableCell
              align="center"
              sx={{ borderRight: "dotted 1px lightgray", width: "11rem" }}
            >
              <input
                placeholder="최고가"
                style={{
                  padding: "0.7rem",
                  border: "none",
                  outline: "none",
                }}
              />
            </TableCell>
            <TableCell align="center">
              <Button type="submit" variant="outlined" sx={{ width: "11rem" }}>
                추적 시작
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
