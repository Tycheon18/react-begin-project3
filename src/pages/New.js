import { useNavigate } from "react-router-dom";
import Header from "../component/header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { DiaryDispatchContext } from "../App";
import { useContext, useEffect } from "react";
import { setPageTitle } from "../util";


const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    const navigate = useNavigate();

    useEffect(() => {
        setPageTitle("새 일기 쓰기");
    }, []);

    const onSubmit = (data) => {
        const { date, content, emotionId } = data;
        onCreate(date, content, emotionId);
        navigate("/", { replace: true });
    }

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <Header 
                title={"새 일기 쓰기"}
                leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}/>}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
};

export default New;