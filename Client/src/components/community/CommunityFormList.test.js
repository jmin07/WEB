import React from "react";

// import * as AiIcons from "react-icons/ai";

function DefaultPage({ item }) {
    // const handleDeleteClick = () => onDelete(item.id);

    return (
        <div className="DiaryListItem Box">
            <div className="DiaryListItem Img">
                <img src={item.img} alt={item.title} />
                {/* <AiIcons.AiOutlineCloseCircle onClick={handleDeleteClick} /> */}
            </div>
            <div className="DiaryListItem Title">제목: {item.title}</div>
            <div className="DiaryListItem Date">가격: {item.price}</div>
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
