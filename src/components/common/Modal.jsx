
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Button from "./Button";
import axios from "axios";

const Modal = ({ onClose }) => {
  const [imgfile, setimageFile] = useState('');
  const [inputvalue, setinputValue] = useState({
    title: "",
    info: "",
    content: "",
    path: "",
    url: "",
  });


  

  const onAddButtonHandler = async () => {

    if(inputvalue.info.length > 20) {
      alert('소개글은 20자 이내로 입력해 주세요!')
      return null
    }else if(inputvalue.title === ""){
      alert('프로젝트명을 입력해 주세요')
      return null
    }if(inputvalue.info ===""){
      alert('소개글을 입력해 주세요')
      return null
    }if(inputvalue.content ===""){
      alert('상세 설명을 입력해 주세요')
      return null
    }if(inputvalue.path ===""){
      alert('경로을 입력해 주세요')
      return null
    }if(inputvalue.url ===""){
      alert('URL을 입력해 주세요')
      return null
    }if(inputvalue){
      axios.post("http://localhost:4000/project", inputvalue);

      onClose(false);
    }
};
    





    


  const outside = useRef();
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
            <Stinput
              type="text"
              placeholder="프로젝트 이름을 입력해 주세요"
              value={inputvalue.title}
              onChange={(e) => {
                setinputValue({                  
                  ...inputvalue,
                  title: e.target.value,
                });
              }}
            />{" "}
            {/* 제목 INPUT */}
            <Stinput
              type="text"
              placeholder="20자 이내로 간단한 소개를 적어주세요"
              value={inputvalue.info}
              onChange={(e) => {
                setinputValue({
                  ...inputvalue,
                  info: e.target.value,
                });
              }}
            />{" "}
            {/* 소개글 INPUT */}
            <Stinput
              type="text"
              placeholder="프로젝트에 대한 설명을 자세히 입력해 주세요"
              value={inputvalue.content}
              onChange={(e) => {
                setinputValue({
                  ...inputvalue,
                  content: e.target.value,
                });
              }}
            />{" "}
            {/* 상세설명 INPUT */}
            <input
              type="file"
              id="input-file"
              style={{ display: "none" }}
              value={imgfile}
              onChange={(e) => {
                setimageFile(e.target.value)
                setinputValue({
                  ...inputvalue,
                  path: e.target.value
                });
                
              }}
            />
            <span>
              <Stinput
                type="text"
                placeholder="파일 경로"
                value={inputvalue.path}
                onChange={(e) => {
                  setinputValue({
                    ...inputvalue,
                    path: e.target.value,
                  });
                }}

              />
              <SearchBtn htmlFor="input-file">...</SearchBtn>
              {/* 썸네일 INPUT */}
            </span>
            <Stinput
              type="text"
              placeholder="Github 주소를 입력해 주세요"
              value={inputvalue.url}
              onChange={(e) => {
                setinputValue({
                  ...inputvalue,
                  url: e.target.value,
                });
              }}
            />{" "}
            {/* URL INPUT */}
          </InputArea>
        </Body>
        <Footer>
          <Button.ButtonA
            active
            size="medium"
            onClick={() => {
              onAddButtonHandler();
            }}
          >
            저장 하기
          </Button.ButtonA>
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






                






                







                    


