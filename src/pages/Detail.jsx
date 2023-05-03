import React from "react";
import Layout from "../components/common/Layout";
import Nav from "../components/common/Nav";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const Detail = () => {
    return (
        <>
            <Layout>
                <Nav />
                <Header />
                <StBtnWrap>
                    <StBtn bc="#000" color="#fff" hoverbc="#eee" hovercolor="black" outline="#000" size="medium" outbc="black" >수정</StBtn>
                    <StBtn bc="#000" color="#fff" hoverbc="#eee" hovercolor="black" outline="#000" size="medium" outbc="black" >삭제</StBtn>
                </StBtnWrap>
                <StContainer>
                    <StProjWrap>
                        <StProjThumbnail>
                            <img src="" alt="" />
                        </StProjThumbnail>
                        <StProjContents>
                            <StProjTitle>
                                PROJECT A <StClickIcon>click!</StClickIcon>
                            </StProjTitle>

                            <StProjintro>이 페이지는 어떠어떠한 페이지 입니다. 이런 저런 내용이 있고, 그렇습니다. 하하하하하하하하하하하. 만드는데 힘들었어요 ㅠㅠㅋㅋㅋ 예쁘게 봐주세요 🤭🥳😇</StProjintro>
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
`;
const StBtn = styled(Button.ButtonC)``;
