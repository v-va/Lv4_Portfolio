import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <>
            <StHeaderWrap>
                <StHeader>Frontend Developer Portfolio</StHeader>
            </StHeaderWrap>
            <StLineWrap>
                <StLine></StLine>
                <StLine2></StLine2>
            </StLineWrap>
        </>
    );
};

export default Header;

const StHeaderWrap = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
`;
const StHeader = styled.h1`
    margin-left: 40px;
    font-size: 50px;
    font-weight: 800;
`;
const StLineWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const StLine = styled.div`
    width: 82%;
    border-bottom: 1px solid #ccc;
`;
const StLine2 = styled.div`
    margin-top: 7px;
    width: 87%;
    border-bottom: 3px solid #ccc;
`;
