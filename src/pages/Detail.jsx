import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../components/common/Modal";

const Detail = () => {
    // 조회 영역
    const [project, setProject] = useState("");
    const { id } = useParams();
    const fetchProject = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/project/${id}`);
        setProject(data)
    };
    useEffect(() => {
        fetchProject();
    }, []);

    //삭제 영역
    const navigate = useNavigate();

    const onDeleteButtonHandler = async (id) => {
        if (window.confirm("삭제 하시겠습니까?")) {
            axios.delete(`${process.env.REACT_APP_SERVER_URL}/project/${id}`);
            navigate("/");
            setProject("");
            alert("삭제되었습니다");
        } else {
            return;
        }
    };

    
    // 수정 영역
    const [modal, setModal] = useState(false);
    const clickEditBtnHandler = async () => {
        setModal(true);
    };

    return (
        <>
            {modal && (
                <Modal
                    onClose={() => {
                        setModal(false);
                    }}
                    project={project}
                />
            )}
            <StContainer>
                <StProjWrap>
                    <StProjThumbnail>
                        <img src={project.path} alt="" />
                    </StProjThumbnail>
                    <StProjContents>
                        <StProjTitle to={project.url}>
                            {project.title} <StClickIcon>click!</StClickIcon>
                        </StProjTitle>
                        <StBtnWrap>
                            <StBtn onClick={() => clickEditBtnHandler(project.id)}>수정</StBtn>
                            <StBtn
                                onClick={() => {
                                    onDeleteButtonHandler(project.id);
                                }}
                            >
                                삭제
                            </StBtn>
                        </StBtnWrap>
                        <StProjintro>{project.content}</StProjintro>
                    </StProjContents>
                </StProjWrap>
            </StContainer>
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
const StProjThumbnail = styled.div`
    height: 400px;
    background-color: lightgray;
    border-radius: 30px;
`;
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
    margin-top: -10px;
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
