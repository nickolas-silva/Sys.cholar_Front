import styled from "styled-components";

export const HeaderStyled = styled.header`

background-color: ${({ theme }) => theme.primaryColor};
height: 110px;
padding: 0px 48px;
box-shadow: ${({ theme }) => theme.primaryShadow};

& > section:first-child{
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
}

& > section:last-child{
    height: 50%;
}

&.empty{
    height: 75px;
    & > section:first-child{
        padding-top: 0px;
        height: 100%;
    }
    & > section:last-child{
        display: none;
    }
}

`;

export const LogoStyled = styled.section`
a{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 54px;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;

    img{
        object-fit: cover;
        width: 48px;
    }
}

`;

export const SearchBoxStyled = styled.section`

width: 525px;
height: 36px;
background-color: rgba(66, 165, 245, 255);
padding: 0px 8px;
display: inline-flex;
align-items: center;
justify-content: flex-start;

input {
    height: 100%;
    background-color: transparent;
    width: 100%;
    color: white;

    &::placeholder {
        color: rgba(155, 207, 249, 255);
    }
            
}

svg {
    color: rgba(155, 207, 249, 255);
    width: 18px;
    cursor: pointer;
}

`;

export const UserOptionsStyled = styled.section`
 display: inline-flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 border: 1px solid white;
 height: 32px;
 border-radius: 1000px;
 
 img {
     height: 100%;
     object-fit: contain;
 }
`;

export const InfoBarStyled = styled.ul`
padding: 0px 12px;
height: 100%;
display: flex;
align-items: end;
list-style: none;
gap: 48px;
color: white;
font-size: 12px;
font-weight: 400;

&.professor,&.disciplina{
    justify-content: space-between;
}

&.alunos{
    justify-content: flex-start;

    li strong{
        margin-right: 2px;
    }
}
`;


export const InfoBarItemStyled = styled.li<{ active?: boolean }>`
height: 32px;
display: inline-flex;
align-items: center;
border-bottom-width: 2px;
border-bottom-style: solid;
border-bottom-color: ${(props) => props.active ? 'white' : 'transparent'};
`;