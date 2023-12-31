// const BASE_URL = "https://www.watchrabbit.co.kr:8443";
import axios from "axios";
const BASE_URL = `${
    process.env.REACT_APP_NODE_ENV === "production" ? "https" : "http"
}://www.watchrabbit.co.kr:8443`;

export async function postLoginData(Data) {
    const response = await fetch(`${BASE_URL}${Data.path}`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            email: Data.userEmail,
            password: Data.userPassword,
        }),
    });
    const body = await response.json();
    return body;
}

export async function postEmail(Data) {
    const response = await fetch(`${BASE_URL}${Data.path}`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            email: Data.userEmail,
        }),
    });
    const body = await response.json();
    return body;
}
export async function postGoogle(Data) {
    const response = await fetch(`${BASE_URL}${Data.path}`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
    const body = await response.json();
    return body;
}
export async function postKakao(Data) {
    const response = await fetch(`${BASE_URL}${Data.path}`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
    const body = await response.json();
    return body;
}
export async function getSearchData(Data) {
    const response = await fetch(
        `${BASE_URL}${Data.path}?city=${Data.userCity}&area=${Data.userArea}&value=${Data.userValue}`,
        {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        }
    );
    const body = await response.json();
    return body;
}
export async function getLogOut(Data) {
    const response = await fetch(`${BASE_URL}${Data.path}`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
    const body = await response.json();
    return body;
}
export async function postFindPWD(Data) {
    const response = await fetch(`${BASE_URL}${Data.path}`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            email: Data.userEmail,
            password: Data.userPassword,
        }),
    });
    const body = await response.json();
    return body;
}

//로그인 유지
export async function getLoginStatus(Data) {
    const response = await fetch(`${BASE_URL}${Data.path}`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
    const body = await response.json();
    return body;
}

export async function postTraceData(Data) {
    const response = await fetch(`${BASE_URL}${Data.path}`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            City: Data.traceCity,
            Area: Data.traceArea,
            Value: Data.traceValue,
            MinPrice: Data.traceMinPrice,
            MaxPrice: Data.traceMaxPrice,
        }),
    });
    const body = await response.json();
    return body;
}

export async function postTraceItem(Data) {
    const response = await fetch(`${BASE_URL}${Data.path}`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            traceIdx: Data.traceIdx,
        }),
    });
    const body = await response.json();
    return body;
}

// 게시글 페이지 네이션 API
export async function getCommunity(Data) {
    const query = `order=${Data.order}&offset=${Data.offset}&limit=${Data.limit}`;
    const response = await fetch(`${BASE_URL}/community?${query}`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        header: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
    const body = await response.json();
    return body;
}

// 게시글 내용 등록
export async function createCommunityPost(Data) {
    const response = await fetch(`${BASE_URL}/community/new`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: new URLSearchParams(Data),
    });
    const body = response.json();
    return body;
}

// // 게시글 이미지 등록
// export async function createCommunityImage(Data) {
//     const response = await fetch(`${BASE_URL}/community/post`, {
//         method: "POST",
//         mode: "cors",
//         credentials: "include",
//         body: Data,
//     });

//     const body = await response.json();
//     return body;
// }

// 댓글 읽어오기
export async function getComment(Data) {
    const response = await fetch(`${BASE_URL}/community/${Data.id}/reply`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
    });
    const body = await response.json();
    return body;
}

// 댓글 작성하기
// export async function postComment(Data) {
//     console.log("Data", Data);
//     console.log("Data", Data.value);
//     const response = await fetch(`${BASE_URL}/community/${Data.id}/reply/new`, {
//         method: "POST",
//         mode: "cors",
//         credentials: "include",
//         body: JSON.stringify({
//             content: "테스트",
//         }),
//     });

//     const body = await response.json();
//     return body;
// }

export function postComment(Data) {
    const result = axios
        .post(
            `${BASE_URL}/community/${Data.id}/reply/new`,
            {
                comment: Data.value,
            },
            {
                withCredentials: true,
            }
        )
        .then((response) => {
            const result = response.data;
            return result;
        })
        .catch((err) => {
            console.log("postComment err", err);
        });
    return result;
}


// export function getcheckUser(Data) {
//     const result = axios
//         .get(

//         )
// } 