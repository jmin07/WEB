import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "./CommunityStyled";
import "./CommunityForm.css";
import FileInput from "./FileInput";
import { createCommunityImage, createCommunityPost } from "../../api";
import axios from "axios";
function CommunityForm() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        title: "",
        content: "",
        price: "",
        imgFile: null,
    });

    const backPage = () => navigate("/community");

    const handleChange = (name, value) => {
        setValues((preValues) => ({
            ...preValues,
            [name]: value,
        }));
    };

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        await handleChange(name, value);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const post = new FormData(); // formData

            post.append("title", values.title); // formData.append 하구
            post.append("content", values.content);
            post.append("price", values.price);
            post.append("image", e.target.files.src);

            const result = await createCommunityPost(post);
            if (result.isSuccess) {
                alert(`${result.message}`);
                navigate("/community");
            } else {
                alert(`다시 시도해주세요.`);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <BackButton>
                <button onClick={backPage}>{"<<"}</button>
            </BackButton>
            <form
                className="CommunityForm"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <FileInput
                    name="imgFile"
                    value={values.imgFile || ""}
                    onChange={handleChange}
                />
                <p>제목</p>
                <input
                    className="inputTitle"
                    name="title"
                    value={values.title || ""}
                    placeholder="제목을 입력해 주세요"
                    onChange={handleInputChange}
                />
                <p>가격</p>
                <input
                    className="inputPrice"
                    name="price"
                    value={values.price || ""}
                    placeholder="생각하고 있는 가격을 입력해 주세요"
                    onChange={handleInputChange}
                />
                <p>내용</p>
                <textarea
                    className="textarea"
                    name="content"
                    value={values.content || ""}
                    placeholder="내용을 입력해 주세요"
                    onChange={handleInputChange}
                />
                <button type="submit">작성</button>
            </form>
        </>
    );
}

export default CommunityForm;
