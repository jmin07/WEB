import React from "react";
import { BackButton } from "./CommunityStyled";
import { useNavigate } from "react-router-dom";

function communityItem(item) {
    const navigate = useNavigate();
    const backPage = () => navigate("/community");

    return (
        <>
            <BackButton>
                <button onClick={backPage}>{"<<"}</button>
            </BackButton>
            <img src={item.img} alt={item.title}></img>
            <h1>{item.title}</h1>
            <h3>가격: {item.price}</h3>
            <p>내용</p>
            <p>{item.content}</p>
        </>
    );
}

export default communityItem;
