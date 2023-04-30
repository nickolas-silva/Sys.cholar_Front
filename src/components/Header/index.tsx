import { FC, ReactNode } from "react";
import { HeaderStyled } from "../styles/Header.styles";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import UserOptions from "./UserOptions";

interface props{
    children?:ReactNode
}

const Header: FC<props> = ({children}) => {
    
    return (
        <HeaderStyled className={!children ? 'empty' : ''}>
            <section>
                <Logo/>
                <SearchBox />
                <UserOptions/>
            </section>
            <section>
                {children}
            </section>
        </HeaderStyled>
    );
}

export default Header;