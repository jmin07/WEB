import styled from "styled-components";
import { Colors } from "../../style/colors";

export const BackButton = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const PostButton = styled.div`
    display: flex;
    justify-content: flex-end;

    margin-right: 3.9rem;
`;

export const BtnContainer = styled.div`
    position: relative;
    margin-bottom: 200px;
    div {
        width: 100%;
        p {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 0.9rem;
            font-weight: bold;
            span {
                font-size: 1.5rem;
            }
        }
    }
`;

export const BtnLine = styled.span`
    width: 100%;
    border: 0.5px solid rgb(238, 238, 238);
    position: absolute;
    top: 50%;
`;

export const MoreButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const TitleTextStyle = styled.div`
    font-size: 1.7rem;
    color: #383b40;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
`;

export const MoreDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const CommentInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
        width: 100%;
        height: 43px;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding-left: 10px;
        &:hover {
            background-color: #fafafa;
        }
        &:focus {
            border: 1px solid ${Colors.primaryColor};
        }
    }

    button {
        width: 70px;
        height: 43px;
        background-color: ${Colors.primaryColor};
        color: #fff;
    }
`;

export const Button = styled.button`
    font-size: 0.9rem;
    width: 60px;
    height: 35px;
    line-height: 35px;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    background-color: #e9e9e9;
    margin-left: 10px;
    transition: all 0.1s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
    }
`;

export const CommentArea = styled.div`
    width: 100%;
    margin-top: 30px;
    padding-right: 80px;
    display: flex;
    flex-direction: column;
`;

export const CommentItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-top: 10px;
    width: 100%;
    p {
        width: 90%;
        font-size: 1rem;
    }
`;

export const CommentItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-color: red;
    width: 100%;
    height: 80%;
`;

export const CommentHandler = styled.div`
    display: flex;
    margin-bottom: 12px;
    justify-content: space-between;
    align-items: center;
    h3 {
        font-size: 1rem;
        font-weight: bold;
        margin-right: 24px;
    }
`;

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
`;
export const AuthorProfile = styled.div`
    width: 28px;
    height: 28px;
    margin-right: 5px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;
export const CommentContentInfo = styled.div`
    span {
        color: #888;
        font-size: 0.8rem;
        font-weight: bold;
        margin-right: 10px;
    }
    #delete_btn {
        cursor: pointer;
    }
    #delete_btn:hover {
        color: ${Colors.primaryColor};
        transition: all 0.1s;
    }
`;
