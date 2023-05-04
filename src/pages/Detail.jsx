import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import Modal from "../components/common/Modal";
import { useGetDetailProject , delProject } from "../api/project";
import { QueryClient, useMutation } from "react-query";

const Detail = () => {
    // 조회 영역
    const { id } = useParams();
    const { project ,isLoading, isError } = useGetDetailProject(id)
    
    
    //삭제 영역
    const navigate = useNavigate()

    const queryClient = new QueryClient()

    const mutation = useMutation(delProject,{
        onSuccess: () => {
            alert('삭제되었습니다')
            queryClient.invalidateQueries("project")
            navigate('/')
        }
    })
    
    const deleteButtonHandler = async () => {
        if(window.confirm('삭제 하시겠습니까?')){
            await mutation.mutate(id)
        }else{
            return;
        }
    }

    


    // 수정 영역
    const [modal, setModal] = useState(false);
    const clickEditBtnHandler = async () => {
        setModal(true);
    };
    
    // 상태 처리
    if (isLoading) {
        return<div>로딩중입니다..</div>
    }

    if(isError) {
        return <div>오류가 발생하였습니다!</div>
    }


    return (
        <>
            {modal && (
                <Modal
                    onClose={() => {
                        setModal(false);
                    }}
                    project={project}
                    editModeModal={true}
                />
            )}
            {project?
            <StContainer>
                <StProjWrap>
                        <StBtnWrap>
                            <StBtn onClick={() => clickEditBtnHandler(project.id)}>수정</StBtn>
                            <StBtn
                                onClick={() => {
                                    deleteButtonHandler()
                                }}
                            >
                                삭제
                            </StBtn>
                        </StBtnWrap>
                    <StProjThumbnailWrap>
                        <StProjThumbnail src={project.path} alt="" />
                    </StProjThumbnailWrap>
                    <StProjContents>
                        <StProjTitle to={project.url}>
                            {project.title} <StClickIcon>click!</StClickIcon>
                        </StProjTitle>
                        <StProjintro>{project.content}</StProjintro>
                    </StProjContents>
                </StProjWrap>
            </StContainer>:null}
        </>
    );
};

export default Detail;

const StContainer = styled.div`
    margin: 100px 0 100px;
    width: 1000px;
    display: flex;
    justify-content: center;
`;
const StProjWrap = styled.div`
    width: 70%;
`;
const StProjThumbnailWrap = styled.div`
    display: flex;
    height: 400px;
    border-radius: 30px;
    border: 1px solid #eee;
    justify-content: center;
`;
const StProjThumbnail = styled.img`
    border-radius: 30px;
`
const StProjContents = styled.div`
    text-align: justify;
    padding: 30px;
`;
const StProjTitle = styled(Link)`
    font-weight: 800;
    font-size: 30px;
`;
const StProjintro = styled.div`
    margin-top: 20px;
    line-height: 150%;
`;
const StClickIcon = styled.span`
    font-weight: normal;
    font-size: 12px;
    background-color: #eee;
`;
const StBtnWrap = styled.div`
    float: right;
    margin-top: -50px;
    width: 100px;
    display: flex;
    justify-content: center;
    gap: 15px;
`;
const StBtn = styled.button`
    all: unset;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
`;
