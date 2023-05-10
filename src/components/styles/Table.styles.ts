import styled from "styled-components";


export const TableStyled = styled.ul`
display: flex;
flex-direction: column;
gap: 8px;
list-style: none;
height: 500px;
li:nth-child(odd){
    background-color: ${({ theme }) => theme.gray01};
}

li:nth-child(even){
    background-color: ${({ theme }) => theme.gray02};
}

li{
    display: flex;
    align-items: center;
    height: 32px;
    padding: 0px 32px;
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.primaryShadow};
}


li.notas{
    display: grid;
    grid-template-columns: 400px repeat(5,1fr);
    justify-items: center;
    span:first-child{
        justify-self: start;
    }
}

&.delete li ,&.select li{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
li.action{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
}
`;

export const TableTitleStyled = styled.h2`

background-color: ${({ theme }) => theme.gray03};
height: 32px;
margin-bottom: 12px;
border-radius: 5px;
display: flex;
align-items: center;
padding-left: 32px;
padding-right: 32px;
font-size: 14px;
font-weight: 600;
box-shadow: ${({ theme }) => theme.primaryShadow};

&.notas{
    display: grid;
    grid-template-columns: 400px repeat(5,1fr);
    justify-items: center;
    span:first-child{
        justify-self: start;
    }
}

`;

export const CheckboxStyled = styled.span`
border: 1px solid black;
width: 16px;
height: 16px;
border-radius: 1000px;
background-color: rgba(233, 236, 239, 1);

&.active{
    background-color: rgba(173, 181, 189, 1);
}


`;

export const ActionButtonStyled = styled.button`
background-color: ${({ theme }) => theme.primaryColor};
font-size: 12px;
font-weight: 500;
color: white;
display: inline-block;
padding: 6px;
box-sizing: content-box;
cursor: pointer;
margin-left:auto;
border-radius: 2px;
margin-top: 16px;
`;