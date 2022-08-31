// const BASE_URL = "https://www.watchrabbit.co.kr:8443";
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

// 페이지 네이션 API
// export async function getReviews() {

//     const query = `order=${order}&offset=${offset}&limit=${limit}`;
//     const response = await fetch(
//         `${BASE_URL}/api/film-reviews?${query}`
//     );
//     const body = await response.json();
//     return body;
// }

// export async function createCommunity(){

// }
