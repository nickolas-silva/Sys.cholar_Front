import { FC } from "react";
import { LogoStyled } from "../styles/Header.styles";
import logo from '../../assets/logo.svg';

const Logo: FC = () => (
    <LogoStyled>
        <a href="/">
            <img src={logo}></img>
            Sys.scholar
        </a>
    </LogoStyled>
);

export default Logo;
