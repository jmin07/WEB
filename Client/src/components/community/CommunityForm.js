import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "./CommunityStyled";
import "./CommunityForm.css";
import FileInput from "./FileInput";
import { createCommunity } from "../../api";
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

    const handleSubmit = async (e) => {
        // 여기서 넘겨주고 있어욤
        e.preventDefault();
        const post = new FormData(); // formData
        const data = e.target.image.value;
        console.log("data", e.target.image.src);

        post.append("imgFile", data); // formData.append 하구

        const response = await createCommunity(post); // API 실행

        if (response.isSuccess) {
            console.log("완료되었습니다.");
        }
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
                    placeholder="제목을 입력해 주세요"
                    onChange={handleInputChange}
                />
                <p>가격</p>
                <input
                    className="inputPrice"
                    name="price"
                    value={values.price}
                    placeholder="생각하고 있는 가격을 입력해 주세요"
                    onChange={handleInputChange}
                />
                <p>내용</p>
                <textarea
                    className="textarea"
                    name="content"
                    value={values.content}
                    placeholder="내용을 입력해 주세요"
                    onChange={handleInputChange}
                />
                <button type="submit">작성</button>
            </form>
        </>
    );
}

export default CommunityForm;
