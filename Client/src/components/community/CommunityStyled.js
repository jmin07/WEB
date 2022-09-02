import styled from "styled-components";

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
