// axios 요청이 들어가는 모든 모듈
import { useQuery } from "react-query";
import axios from "axios";
// 조회
const getProject = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/project`)

    return response.data
}
// 상세페이지 조회
const GetDetailProject = (id) => {
    const { data :project, isLoading, isError } = useQuery(
      ['project', id],
      async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/project/${id}`);
        return response.data;
      }
    );

    return {project, isLoading, isError};
  };
// 추가
const addProject = async (inputvalue) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/project`,inputvalue)
};

// 삭제
const delProject = async (id) => {
    const response = axios.delete(`${process.env.REACT_APP_SERVER_URL}/project/${id}`)
    return response.data
}
// 수정
const editProject = async (project) => {
    const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/project/${project.id}`,project)
    return response
}

export { getProject, GetDetailProject, addProject, delProject, editProject };