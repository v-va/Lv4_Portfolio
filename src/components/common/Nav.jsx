import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../common/Modal";

const Nav = () => {
    const [modal, setModal] = useState(false);

    return (
        <>
            <div>
                {modal === true ? <Modal /> : null}
                {modal && (
                    <Modal
                        onClose={() => {
                            setModal(false);
                        }}
                    />
                )}
            </div>
            <StNav>
                <StMenu to={"/"}>HOME</StMenu>
                <StAddBtn bc="#000" color="#fff" hoverbc="#eee" hovercolor="black" outline="#000" size="medium" outbc="black" onClick={() => {
                        setModal(true);
                    }}>
                    + PROJECT
                </StAddBtn>
            </StNav>
        </>
    );
};

export default Nav;

const StNav = styled.div`
    height: 60px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const StMenu = styled(Link)`
    color: #fff;
    margin: 0 15px;
    cursor: pointer;
    font-weight: 900;
    :hover {
        color: #eee;
        font-size: large;
    }
`;
const StAddBtn = styled(Button.ButtonC)`
    margin: 0 15px;
`;
