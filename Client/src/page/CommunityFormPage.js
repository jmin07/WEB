import CommunityForm from "../components/community/CommunityForm";
import { Box, Container } from "@mui/material";
import { TitleTextStyle } from "../components/community/CommunityStyled";

export default function CommunityPage() {
    return (
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
                <TitleTextStyle>게시글 작성</TitleTextStyle>
                <CommunityForm></CommunityForm>
            </Box>
        </Container>
    );
}
