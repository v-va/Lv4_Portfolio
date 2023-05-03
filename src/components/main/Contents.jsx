import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contents = () => {
    return (
        <>
            <StContainer>
                    <StProjWrap to={"/detail/1"}>
                        <StProjThumbnail>
                            <img src="" alt="" />
                        </StProjThumbnail>
                        <StProjContents>
                            <StProjTitle>PROJECT A</StProjTitle>
                            <div className="projInfo">이 페이지는 어떠어떠한 페이지 입니다.</div>
                        </StProjContents>
                    </StProjWrap>
                    <StProjWrap>
                        <StProjThumbnail>
                            <img src="" alt="" />
                        </StProjThumbnail>
                        <StProjContents>
                            <StProjTitle>PROJECT A</StProjTitle>
                            <div className="projInfo">이 페이지는 어떠어떠한 페이지 입니다. 이런 저런 내용이 있고, 그렇습니다.</div>
                        </StProjContents>
                    </StProjWrap>
                    <StProjWrap>
                        <StProjThumbnail>
                            <img src="" alt="" />
                        </StProjThumbnail>
                        <StProjContents>
                            <StProjTitle>PROJECT A</StProjTitle>
                            <div className="projInfo">이 페이지는 어떠어떠한 페이지 입니다. 이런 저런 내용이 있고, 그렇습니다. 하하하하하하하하하하하. 만드는데 힘들었어요 ㅠㅠㅋㅋㅋ 예쁘게 봐주세요 🤭🥳😇</div>
                        </StProjContents>
                    </StProjWrap>
                    <StProjWrap>
                        <StProjThumbnail>
                            <img src="" alt="" />
                        </StProjThumbnail>
                        <StProjContents>
                            <StProjTitle>PROJECT A</StProjTitle>
                            <div className="projInfo">이 페이지는 어떠어떠한 페이지 입니다. 이런 저런 내용이 있고, 그렇습니다. 하하하하하하하하하하하. 만드는데 힘들었어요 ㅠㅠㅋㅋㅋ 예쁘게 봐주세요 🤭🥳😇</div>
                        </StProjContents>
                    </StProjWrap>
                    <StProjWrap>
                        <StProjThumbnail>
                            <img src="" alt="" />
                        </StProjThumbnail>
                        <StProjContents>
                            <StProjTitle>PROJECT A</StProjTitle>
                            <div className="projInfo">이 페이지는 어떠어떠한 페이지 입니다. 이런 저런 내용이 있고, 그렇습니다. 하하하하하하하하하하하. 만드는데 힘들었어요 ㅠㅠㅋㅋㅋ 예쁘게 봐주세요 🤭🥳😇</div>
                        </StProjContents>
                    </StProjWrap>
            </StContainer>
        </>
    );
};

export default Contents;

const StContainer = styled.div`
    margin: 30px 0 100px;
    width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
    column-gap: 40px;
    padding: 40px;
`;
const StProjWrap = styled(Link)`
    border: 1px solid #eee;
    border-radius: 15px;
`;
const StProjThumbnail = styled.div`
    height: 300px;
    background-color: #ccc;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;
const StProjContents = styled.div`
    height: 150px;
    text-align: justify;
    padding: 15px 30px 30px;
`;
const StProjTitle = styled.h2`
    padding: 10px 0;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
`;
