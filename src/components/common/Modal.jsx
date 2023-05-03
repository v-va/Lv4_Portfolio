import React, { useRef } from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components'
import Button from './Button';


const Modal = ({onClose}) => {
    const outside = useRef()
    return createPortal(
    <ModalBG
      ref={outside}
      onClick={(e) => {
        if (e.target === outside.current) onClose(false);
      }}
    >
      <Modalbox>
        <Headers>
          PROJECT 추가
          <CloseBtn
            onClick={() => {
              onClose(false);
            }}
          >
            X
          </CloseBtn>
        </Headers>
        <Line />
        <Body>
          <TextArea>
            <span>제목</span>
            <span>소개글</span>
            <span>상세 설명</span>
            <span>썸네일</span>
            <span>URL</span>
          </TextArea>
          <InputArea>
            <Stinput /> {/* 제목 INPUT */}
            <Stinput /> {/* 소개글 INPUT */}
            <Stinput /> {/* 상세설명 INPUT */}
            <input type="file" 
            id="input-file" 
            style={{ display: "none" }}
            value={imgfile}
            onChange={(e) => {setimageFile(e.target.value)}} 
            />
            <span>  
              <Stinput type="text" value={imgfile}/> {/* 썸네일 INPUT */}
              <SearchBtn htmlFor="input-file">...</SearchBtn>
            </span>
            <Stinput /> {/* URL INPUT */}
          </InputArea>
        </Body>
        <Footer>
          <Button.ButtonA size="medium">저장 하기</Button.ButtonA>
        </Footer>
      </Modalbox>
    </ModalBG>,
    document.getElementById('modal')

  )
}


export default Modal

const Footer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 30px;
    margin-top : 40px;
`

const Line = styled.hr`
  /* margin-top: 15px; */
  border: 1px solid #eee;
`;

const ModalBG = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index:999;
`

const SearchBtn = styled.button`
    width: 30px;
    height: 20px;
    margin-left: 20px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    :active{
        background-color: black;
        color: white;
    }
`

const Modalbox = styled.div`
  background-color: white;
  width: 800px;
  height: 500px;
  border-radius: 30px;
  z-index: 100;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.35);


`;

const CloseBtn = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  background-color: white;
  color: black;
  font-weight: 900;
  font-size: 20px;
  border: 1.5px solid black;
  :hover {
    transform: scale(115%);
  }
`;

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  font-weight: 700;
  /* margin-top: 15px; */
  height: 65px;
  color: white;
  background-color: black;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  
`;

const Body = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;



`

const Stinput = styled.input`
  width: 550px;
  height: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  font-weight: 700;
  padding-left: 10px;
  border-color: #eee;
`;

const TextArea = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  width: 160px;
  color: gray;
`;

const InputArea = styled.div`
    gap: 30px;
    display: flex;
    flex-direction: column;

    

`






                






                







                    


