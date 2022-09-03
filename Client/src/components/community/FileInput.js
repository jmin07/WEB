import { useState, useRef, useEffect } from "react";

function FileInput({ name, value, onChange }) {
    const [preview, setPreview] = useState();
    const inputRef = useRef();

    const handleChange = (e) => {
        console.log(e.target.files);
        const nextValue = e.target.files[0];
        onChange(name, nextValue);
    };

    const handleClearClick = () => {
        const inputNode = inputRef.current;
        if (!inputNode) return; // current 값이 없을 수도 있다.

        inputNode.value = "";
        onChange(name, null);
    };

    useEffect(() => {
        if (!value) return;

        const nextPreview = URL.createObjectURL(value); // 사이드 Effect (메모리 할당)
        setPreview(nextPreview);

        return () => {
            // side Effect 메모리 정리
            setPreview();
            URL.revokeObjectURL(nextPreview);
        };
    }, [value]);

    return (
        <div>
            <img className="inputFile" src={preview} alt="이미지 미리보기" />
            <input
                type="file"
                accept="image/png image/jpeg image/jpg"
                onChange={handleChange}
                ref={inputRef}
            />
            {value && <button onClick={handleClearClick}>X</button>}
        </div>
    );
}

export default FileInput;
