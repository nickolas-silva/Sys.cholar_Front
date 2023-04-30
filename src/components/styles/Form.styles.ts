import styled from "styled-components";

export const FormWrapperStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
padding: 32px 0px;
`;

export const FormStyled = styled.article`
background-color: white;
width: 340px;
height: 525px;
border-radius: 5px;
box-shadow: ${({ theme }) => theme.primaryShadow};
overflow: hidden;
display: flex;
flex-direction: column;

`;

export const WrapperInputsStyled = styled.section`
padding: 0px 32px;
display: flex;
flex-direction: column;
gap: 12px;
margin-bottom: 16px;
margin-top: 64px;
`;


export const FormTitleStyled = styled.h1`
background-color: ${({ theme }) => theme.primaryColor};
height: 84px;
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
color: white;

img{
    width: 54px;
}
`;

export const InputStyled = styled.input`
background-color: ${({ theme }) => theme.gray02};
box-shadow: ${({ theme }) => theme.primaryShadow};
height: 42px;
border-radius: 5px;
padding-left: 16px;
display: inline-block;
width: 100%;

&::placeholder{
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
}
`;

export const SubmitButtonStyled = styled.button`
height: 42px;
border-radius: 5px;
margin: 0px 32px;
box-shadow: ${({ theme }) => theme.primaryShadow};
background-color: ${({ theme }) => theme.primaryColor};
color: white;
font-weight: 700;
cursor: pointer;
`;

export const ForgotPasswordStyled = styled.p`
display: flex;
justify-content: flex-end;

a{
    margin-left: -2px;
    color: #3F7CD5;
    font-weight: 700;
}
`;

export const RegisterAccountStyled = styled.a`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 32px;

span,a{
    font-weight: 700;
    font-size: 12px;
    line-height: 27px;
}
span{
    color: #B0AED0;
    margin-bottom: -8px;
}

a{
    color: ${({ theme }) => theme.primaryColor};
}
`;

export const ControlFormStyled = styled.section`
display: flex;
align-items: center;
gap: 32px;
justify-content: center;
margin-bottom: 24px;
`;

export const ControlFormItemStyled = styled.span`
display: inline-block;
width: 20px;
height: 20px;
background-color: ${({ theme }) => theme.gray02};
border-radius: 1000px;
transition: background-color 200ms ease-in;

&.active{
    background-color: ${({ theme }) => theme.primaryColor};
}
`;

export const ControlFormArrowStyled = styled.img`
width: 24px;
height: 24px;
filter: opacity(40%);

&.left{
    rotate:180deg;
}

&.rigth{
    
}

&.active{
    filter: opacity(100%);
    cursor: pointer;
}
`;


export const InputSectionStyled = styled.section`
display: none;
&.visible{
    min-height: 300px;
    max-height: 335px;
    margin-top: 36px;
    display: flex;
    padding: 0px 32px;
    flex-direction: column;
    gap: 12px;
}

`;


export const FormBasicStyled = styled.section`
display: flex;
flex-direction: column;
gap: 12px;
padding: 0px 24px;

button{
    margin-top: 64px !important;
    align-self: flex-end;
    width: 200px;
    margin: unset;
}

`;

export const FormBasicTitleStyled = styled.h2`
line-height: 49px;
font-size: 24px;
margin-bottom: 16px;
`;