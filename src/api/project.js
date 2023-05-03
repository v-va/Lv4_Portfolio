// axios 요청이 들어가는 모든 모듈
import axios from "axios";

// 수정
const editProject = async () => {
    const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/project`)
    return response
}

export { editProject };