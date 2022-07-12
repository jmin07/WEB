import { Link, useNavigate } from "react-router-dom";
import {
  Paper,
  IconButton,
  InputBase,
  Box,
  Grid,
  Zoom,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { CenterDiv, Img } from "../style/styled";
import React, { useState } from "react";
import Modal from "react-modal";
import "../style/modal.css";
import "../style/main.css";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "../style/font.css";
import HomeIcon from "@mui/icons-material/Home";

Modal.setAppElement("Title");

export default function Title() {
  // const [modalOpen, setModalOpen] = useState(false);
  // const [search, setsearch] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    const value = e.target[0].value
    if (e.target[0].value !== "") {
      navigate("/home", { state: value });
    }
    e.preventDefault();
  };

  const [sideBar, setSideBar] = useState(false);

  window.onload = function () {
    setSideBar(true);
  };

  return (
    <>
      {/* 타이틀 화면 구현 */}
      <CenterDiv
        width="40%"
        height="90%"
        boxShadow="0px 0px 5px 1px #C0A786"
        borderRadius="7px"
        backgroundColor="#F9F2EA"
      >
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* <Grid item sx={{ margin: 3 }}></Grid> */}
          <Grid item sx={{ margin: 3 }}>
            {/* <Tooltip title="Login" arrow TransitionComponent={Zoom}>
              <IconButton onClick={() => setModalOpen(true)}>
                <AccountCircleIcon
                  fontSize="large"
                  sx={{ color: "dimgray" }}
                />
              </IconButton>
            </Tooltip> */}
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 25 }}>
          <Grid item xs={12}>
            <Box
              sx={{
                typography: "Watch Rabbit",
                fontSize: 60,
                letterSpacing: 8,
                color: "#ff803d",
                fontFamily: "ulsanjunggu",
              }}
            >
              Watch<span style={{ color: "#357a38" }}>Rabbit</span>
              <Img src="/img/carrot.png" width="65px" />
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ mt: 5 }}></Grid>
          <Grid item xs={6} sx={{ mt: 4 }}>
            {/* 검색창 */}
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "60%",
              }}
              onSubmit={onSubmit}
            >
              <InputBase
                sx={{ ml: 2, flex: 1 }}
                placeholder="검색할 물품을 입력하세요"
              />
              <IconButton type="submit" sx={{ p: "10px" }}>
                <SearchIcon />
              </IconButton>
            </Paper>

            {/* <TextField
              color="success"
              sx={{ mt: 1, mb: 2, background: "white" }}
              label="검색할 물품을 입력하세요"
              name=""
              autoComplete=""
              id=""
            >
              <SearchIcon />
            </TextField> */}
          </Grid>

          <Grid item xs={12} sx={{ m: 3 }}>
            <Link to="home">
              <Tooltip title="Main Page" arrow TransitionComponent={Zoom}>
                <IconButton>
                  <HomeIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Link>
          </Grid>
        </Grid>

        {/* 로그인 모달*/}
        {/* <Modal
          style={{
            overlay: {
              background: "rgba(0, 0, 0, 0.7)",
            },
            content: {
              position: "absolute",
              top: "12%",
              left: "36.7%",
              background: "white",
              border: "none",
              width: "23rem",
              height: "33rem",
              boxShadow: "0px 0px 5px 1px dimgray",
            },
          }}
          closeTimeoutMS={300}
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
        >
          <IconButton
            sx={{ position: "absolute", top: "2%", left: "88%" }}
            onClick={() => setModalOpen(false)}
          >
            <CloseIcon color="warning" />
          </IconButton>
          <Login />
          <Grid container>
            <Grid item xs sx={{ ml: 3 }}>
              <Link to="forgotpw" style={{ color: "dodgerblue" }}>
                비밀번호 찾기
              </Link>
            </Grid>
            <Grid item sx={{ mr: 3 }}>
              <Link to="signup" style={{ color: "dodgerblue" }}>
                회원가입
              </Link>
            </Grid>
          </Grid>
        </Modal> */}
      </CenterDiv>

      <Box
        sx={{
          height: "100vh",
          width: "100%",
          background: "rgba(0, 0, 0, 0.8)",
          position: "absolute",
          opacity: sideBar ? "100%" : "0%",
          top: sideBar ? "0%" : "-100%",
          transitionDuration: "1s",
        }}
        onClick={() => setSideBar(false)}
      >
        <IconButton
          onClick={() => setSideBar(false)}
          sx={{ position: "absolute", top: "95%", left: "50%" }}
        >
          <ArrowDropUpIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
        <Box
          sx={{ color: "white", position: "absolute", left: "20%", top: "10%" }}
        >
          <h1>안녕하세요</h1> <p />
          <h2>중고물품의 시세를</h2>
          <p />
          <h2>알려주고 감시해주는</h2>
          <p />
          <h2>
            <span style={{ color: "" }}>감시토끼</span> 입니다
          </h2>
          <br />
          <br />
          <br />
          아무곳이나 클릭하세요
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: sideBar ? "-20%" : "-2%",
          transitionDuration: "1s",
        }}
      >
        <IconButton
          sx={{ opacity: sideBar ? "0%" : "100%" }}
          onClick={() => setSideBar(true)}
        >
          <ArrowDropDownIcon fontSize="large" />
        </IconButton>
      </Box>
    </>
  );
}
