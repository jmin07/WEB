import { CommentItem, CommentItemContainer } from "../CommunityStyled";

function CommentForm({ item }) {
    return (
        <CommentItem>
            <div>유저 아이디: {item.userIdx}</div>
            <p>{item.content}</p>
        </CommentItem>
    );
}

function CommentFormList({ items }) {
    return (
        <CommentItemContainer>
            {items.map((item) => {
                return <CommentForm key={item.idx} item={item} />;
            })}
        </CommentItemContainer>
    );
}

export default CommentFormList;
