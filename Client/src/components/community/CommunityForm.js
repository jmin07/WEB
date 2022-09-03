import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "./CommunityStyled";
import "./CommunityForm.css";
import FileInput from "./FileInput";

function CommunityForm() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        title: "",
        content: "",
        imgFile: null,
    });

    const backPage = () => navigate("/community");

    const handleChange = (name, value) => {
        setValues((preValues) => ({
            ...preValues,
            [name]: value,
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const image = e.target.imgFile;
        console.log("image", image);
        console.log(values);
    };

    return (
        <>
            <BackButton>
                <button onClick={backPage}>{"<<"}</button>
            </BackButton>
            <form className="CommunityForm" onSubmit={handleSubmit}>
                <FileInput
                    name="imgFile"
                    value={values.imgFile}
                    onChange={handleChange}
                />
                <p>제목</p>
                <input
                    className="inputTitle"
                    name="title"
                    value={values.title}
                    onChange={handleInputChange}
                />
                <p>가격</p>
                <input
                    className="inputPrice"
                    name="price"
                    value={values.price}
                    onChange={handleInputChange}
                />
                <p>내용</p>
                <textarea
                    className="textarea"
                    name="content"
                    value={values.content}
                    onChange={handleInputChange}
                />
                <button type="submit">작성</button>
            </form>
        </>
    );
}

export default CommunityForm;
