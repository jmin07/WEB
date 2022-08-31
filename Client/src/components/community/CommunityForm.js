import { useState } from "react";

function CommunityForm() {
    const [title, setTitle] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <from>
            <input value={title} onChange={handleTitleChange}></input>
        </from>
    );
}

export default CommunityForm;
