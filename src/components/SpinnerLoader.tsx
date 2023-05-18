import { FC } from "react";
import { SpinnerLoaderStyled, SpinnerLoaderWrapperStyled } from "./styles/Table.styles";


const SpinnerLoader: FC = () => (
    <SpinnerLoaderWrapperStyled>
        <SpinnerLoaderStyled />
    </SpinnerLoaderWrapperStyled>
);

export default SpinnerLoader;