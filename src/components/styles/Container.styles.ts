import styled from "styled-components";


export const ContainerStyled = styled.div`
margin: 0px auto;
margin-top: 32px;
background-color: white;
width: 800px;
border-radius: 5px;
box-shadow: ${({theme})=>theme.primaryShadow};
padding: 36px 12px;
`;

export const ContainerWrapperStyled = styled.div`
width: 100%;
padding-bottom: 64px;
`;