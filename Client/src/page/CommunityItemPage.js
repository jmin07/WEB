import { useLocation, useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { BackButton } from "../components/community/CommunityStyled";
import "../style/page.css";
export default function CommunityItemPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, image, content, price, date } = location.state;
    const backPage = () => navigate("/community");

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
            </Container>
        </>
    );
}
