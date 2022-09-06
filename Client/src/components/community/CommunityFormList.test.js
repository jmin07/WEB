import React from "react";
import { useEffect, useNavigate } from "react-router-dom";
import "../../style/page.css";
import timeFunction from "../../utils/time";
// import * as AiIcons from "react-icons/ai";

function DefaultPage({ item }) {
    // const handleDeleteClick = () => onDelete(item.id);
    const navigate = useNavigate();
    const backPage = () => navigate("/community");

    const handleClick = () => {
        navigate(`/community/${item.idx}`, {
            state: {
                title: item.title,
                image: item.img,
                content: item.content,
                price: item.price,
                date: item.createdAt,
            },
        });
    };

    const time = timeFunction(item.createdAt);
    return (
        <div className="DiaryListItem Box" onClick={handleClick}>
            <div className="DiaryListItem Img">
                <img className="img" src={item.img} alt={item.titles} />
            </div>
            <div className="DiaryListItem Title">제목: {item.title}</div>
            <div className="DiaryListItem Price">가격: {item.price}</div>
            <div className="DiaryListItem Date">날짜: {time}</div>
        </div>
    );
}

function DiaryList({ items }) {
    return (
        <div className="DiaryListItem">
            {items.map((item) => {
                return (
                    <DefaultPage key={item.idx} item={item} /> // onDelete={onDelete}
                );
            })}
        </div>
    );
}

export default DiaryList;
