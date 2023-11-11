const arr = [
    {
        id: 0,
        title: "아이폰팔아욤",
        image: "../static/roopy.png",
        category: "전자제품",
        price: 200000,
        like: 1,
    },
    {
        id: 1,
        title: "아이폰팔아욤1",
        image: "../static/roopy.png",
        category: "전자제품",
        price: 500000,
        like: 5,
    },
    {
        id: 2,
        title: "아이폰팔아욤2",
        image: "../static/roopy.png",
        category: "전자제품",
        price: 100000,
        like: 0,
    },
    {
        id: 3,
        title: "아이폰팔아욤3",
        image: "../static/roopy.png",
        category: "전자제품",
        price: 20000,
        like: 6,
    },
    {
        id: 4,
        title: "아이폰팔아욤4",
        image: "../static/roopy.png",
        category: "전자제품",
        price: 3000,
        like: 2,
    },
];

const test = arr.sort((a, b) => b["price"] - a["price"]);
console.log("Test", test);
// export default arr;
