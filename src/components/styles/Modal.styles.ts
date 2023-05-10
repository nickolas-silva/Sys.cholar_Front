import styled from "styled-components";

export const ModalWrapperStyled = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
`;

export const ModalStyled = styled.article`
background-color: white;
width: 425px;
height: 300px;
border-radius: 5px;
position: relative;
display: flex;
align-items: center;
justify-content: center;

h2{
    text-align: center;
    font-size: 24px;
    margin-bottom: 24px;
}

& > section{
    margin: 0px 32px;
}
`;

export const CloseButtonStyled = styled.span`
font-size: 16px;
color: black;
margin-left: auto;
font-weight: 700;
cursor: pointer;
position: absolute;
right: 24px;
top: 24px;
`;

export const ModalInfoBox = styled.section<{ fontSize: number }>`
background-color: ${({ theme }) => theme.gray02};
height: 48px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: ${({ theme }) => theme.primaryShadow};
font-weight: 600;
font-size: ${(props) => props.fontSize}px;
`;

export const ModalMessageBox = styled.p`
font-size: 12px;
margin-bottom: 16px;
span{
    margin-left: 4px;
    color:red;
}
`;