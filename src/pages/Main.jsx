import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProject } from "../api/project";



const Main = () => {
    const {isLoading, isError, data} = useQuery("projects", getProject)

    if (isLoading) {
        return<div>로딩중입니다..</div>
    }

    if(isError) {
        return <div>오류가 발생하였습니다!</div>
    }

    return (
        <>
        {data?
            <StContainer>
                {data.map((pj) => {
                    return (
                        <StProjWrap to={`/detail/${pj.id}`} key={pj.id}>
                            <div>
                                <StProjThumbnail src={process.env.PUBLIC_URL + pj.path} alt="" />
                            </div>
                            <StProjContents>
                                <StProjTitle>{pj.title}</StProjTitle>
                                <StProjInfo>{pj.info}</StProjInfo>
                            </StProjContents>
                        </StProjWrap>
                    );
                })}
            </StContainer>:null}
        </>
    );
};

export default Main;

const StContainer = styled.div`
    margin: 30px 0 100px;
    width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 60px;
    column-gap: 40px;
    padding: 40px;
`;
const StProjWrap = styled(Link)`
    border: none;
    box-shadow: 0 8px 32px 0 rgba(155, 152, 152, 0.37);
    border-radius: 15px;
    background-color: #eee;
`;
const StProjThumbnail = styled.img`
    height: 250px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;
const StProjContents = styled.div`
    max-width: 438px;
    height: 150px;
    text-align: justify;
    padding: 15px 30px 30px;
    background-color: #eee;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: hidden;
`;
const StProjTitle = styled.h2`
    padding: 10px 0;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
const StProjInfo = styled.div`

    height: 40px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical; 
`
