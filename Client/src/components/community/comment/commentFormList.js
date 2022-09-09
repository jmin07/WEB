import { CommentItem } from "../CommunityStyled";

function CommentForm({ item }) {
    return (
        <CommentItem>
            <div>유저 아이디: {item.userIdx}</div>
            <p>{item.content}</p>
        </CommentItem>
    );
}

function CommentFormList({ items }) {
    console.log("items", items);
    console.log(typeof items);
    return (
        <div>
            {items.map((item) => {
                return <CommentForm key={item.idx} item={item} />;
            })}
        </div>
    );
}

export default CommentFormList;
