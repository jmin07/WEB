import { getCommunity } from "../api";
import DiaryList from "../components/community/CommunityFormList.test";

import {
    PostButton,
    BtnLine,
    BtnContainer,
    MoreDiv,
    TitleTextStyle,
} from "../components/community/CommunityStyled";

import { Box, Button, Container } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoginStatus } from "../api";

export default function CommunityMainPage() {
    const LIMIT = 6;

    const [items, setItems] = useState([]);
    const [order, setOrder] = useState("createdAt");
    const [offset, setOffset] = useState(0);
    const [hasNext, setHasNext] = useState(false);

    // const sortedItems = items.sort((a, b) => b[order] - a[order]); // 내림 차순

    const navigate = useNavigate();

    const postCommunity = async () => {
        const response = await getLoginStatus({ path: "/auth/loginstatus" });
        if (response.isSuccess) {
            navigate("/community/post");
        } else {
            alert(`${response.message}`);
        }
    };

    // post sort
    const handleNewestClick = () => setOrder("createdAt"); //createdAt
    const handleBestClick = () => setOrder("price");

    // post delete
    // const handleDelete = (id) => {
    //     const nextItems = items.filter((item) => item.id !== id);
    //     setItems(nextItems);
    // };

    // orderQuery는 useState의 order과 변수 명이 겹치는 것을 방지
    const handleLoad = useCallback(
        async (options) => {
            const response = await getCommunity(options);
            console.log("response", response);

            if (response.isSuccess) {
                options.offset === 0
                    ? setItems(response.result)
                    : setItems([...items, ...response.result]);
            }
            setOffset(options.offset + response.result.length);
            setHasNext(response.result.hasNext);
        },
        [getCommunity]
    );
    // post read more
    const handleLoadMore = () => {
        handleLoad({ order, offset, limit: LIMIT });
    };

    // useEffect input: callback function, array(dependency list)
    // 처음 콜백함수를 실행하고 이후, array 가 초기 기억한 값이랑 다른 경우에만 다시 콜백함수를 호출한다.
    // order state가 변경 될 때마다, 다시 rendering 이 발생한다.
    useEffect(() => {
        handleLoad({ order, offset: 0, limit: LIMIT });
    }, [order]);

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
                    <PostButton>
                        <Button
                            sx={{
                                fontWeight: "bold",
                                color: "black",
                                background: "rgb(238, 238, 238)",
                                mr: "1rem",
                            }}
                            variant="contained"
                            color="warning"
                            onClick={handleBestClick}
                        >
                            인기순 정렬
                        </Button>

                        <Button
                            sx={{
                                fontWeight: "bold",
                                color: "black",
                                background: "rgb(238, 238, 238)",
                                mr: "1rem",
                            }}
                            variant="contained"
                            color="warning"
                            onClick={handleNewestClick}
                        >
                            최신순 정렬
                        </Button>

                        <Button
                            sx={{
                                fontWeight: "bold",
                                color: "black",
                                background: "rgb(238, 238, 238)",
                            }}
                            variant="contained"
                            color="warning"
                            onClick={postCommunity}
                        >
                            글쓰기
                        </Button>
                    </PostButton>
                    <DiaryList items={items} />
                    {/*onDelete={handleDelete}*/}
                    <BtnContainer>
                        <BtnLine></BtnLine>
                        <MoreDiv>
                            {hasNext ? (
                                <Button
                                    sx={{
                                        fontWeight: "bold",
                                        color: "black",
                                        background: "rgb(238, 238, 238)",
                                    }}
                                    variant="contained"
                                    color="warning"
                                    onClick={handleLoadMore}
                                >
                                    더보기
                                </Button>
                            ) : (
                                <Button
                                    sx={{
                                        fontWeight: "bold",
                                        color: "black",
                                        background: "rgb(238, 238, 238)",
                                    }}
                                    disabled={!hasNext}
                                    variant="contained"
                                    color="warning"
                                >
                                    더 이상 게시글이 없습니다.
                                </Button>
                            )}
                        </MoreDiv>
                    </BtnContainer>
                </Box>
            </Container>
        </>
    );
}
