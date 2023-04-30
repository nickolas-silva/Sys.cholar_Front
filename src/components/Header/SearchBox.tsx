import SearchIcon from "./SearchIcon";
import { SearchBoxStyled } from "../styles/Header.styles";

const SearchBox = () => {

    return (
        <SearchBoxStyled>
            <input placeholder="Pesquisar"/>
            <SearchIcon/>
        </SearchBoxStyled>
    );
}

export default SearchBox;