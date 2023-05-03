import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import Nav from "../components/common/Nav";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Button from "../components/common/Button";
import axios from "axios";


const Detail = () => {
    const [project,setProject] = useState('')
    const {id} = useParams()
    const fetchProject = async () => {
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/project/${id}`)
        console.log(data)
        setProject(data)
    }

    useEffect(() =>{
        fetchProject()
    },[])
    return (
        <>
            <Layout>
                <Nav />
                <Header />
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
                                <StBtn bc="white" color="black" hovercolor="gray">수정</StBtn>
                                <StBtn bc="white" color="black" hovercolor="gray">삭제</StBtn>
                                </StBtnWrap>

                            <StProjintro>{project.content}</StProjintro>
                        </StProjContents>
                    </StProjWrap>
                </StContainer>
                <Footer />
            </Layout>
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

`;
const StBtn = styled(Button.ButtonC)`
    width: 30px;
    transform: scale(120%);
    :active{
        transform: scale(115%);
    }
`;
