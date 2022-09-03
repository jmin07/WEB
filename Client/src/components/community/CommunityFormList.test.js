import React from "react";
import "../../style/page.css";
import timeFunction from "../../utils/time";
// import * as AiIcons from "react-icons/ai";

function DefaultPage({ item }) {
    // const handleDeleteClick = () => onDelete(item.id);
    const time = timeFunction(item.createdAt);
    return (
        <div className="DiaryListItem Box">
            <div className="DiaryListItem Img">
                <img className="img" src={item.img} alt={item.titles} />
            </div>
            <div className="DiaryListItem Title">제목: {item.title}</div>
            <div className="DiaryListItem Price">가격: {item.price}</div>
            <div className="DiaryListItem Date">날짜: {time}</div>
        </div>
    );
}

function DiaryList({ items, onDelete }) {
    return (
        <div className="DiaryListItem">
            {items.map((item, index) => {
                return (
                    <DefaultPage key={index} item={item} /> // onDelete={onDelete}
                );
            })}
        </div>
    );
}

export default DiaryList;
