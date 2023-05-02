import React from 'react'
import styled, { css } from 'styled-components'


const ButtonFrame = ({ children, ...restProps }) => {
    return (
        <StButton {...restProps}>
            {children}
        </StButton>
            )
        }

                
const ButtonA = (props) => {
    return(
        <ButtonFrame
        {...props}
        color='black'
        bc='white'
        outline
        hoverbc='black'
        hovercolor='white'
        />
        )
    }
const ButtonB = (props) => {
    return(
        <ButtonFrame
        {...props}
        color='white'
        bc='black'
        outline
        hoverbc='white'
        hovercolor='black'
        />
        )
    }
const ButtonC = (props) => {
    return(
        <ButtonFrame
        {...props}
        />
        )
    }

const Button ={ButtonA,ButtonB,ButtonC}
export default Button;


const StButton = styled.button`
    background-color: ${({ bc }) => bc};
    border-radius: 30px;
    color: ${({ color }) => color};
    border: none;
    cursor: pointer;
    margin: 5px;
    font-weight: 900;

  :hover {
    background-color:  ${({ hoverbc }) => hoverbc};
    color:${({ hovercolor }) => hovercolor};
  }


    ${({outline,bc,outbc})=>{
        if(outline) {
            return css`
                border: 2px solid ${({ outbc }) => outbc};
                background-color: ${({ bc }) => bc};
            `
        }
    }}

    ${({size}) => {
        switch(size) {
            case "large":
                return css`
                    width: 120px;
                    height: 40px;
                    
                    `
            case "medium":
                return css`
                    width: 95px;
                    height: 35px;
                    `
            
            default:
                return css`
                    width: 50px;
                    height: 30px;
                    font-size: 12px;
                `
        }
    }
}
`

const StBtninner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;



`
