import { FC } from 'react';
import { UserOptionsStyled } from '../styles/Header.styles';
import userDefaultImage from '../../assets/user-logo.svg';

const UserOptions: FC = () => {
    return (
        <UserOptionsStyled>
            <img src={userDefaultImage}/>
        </UserOptionsStyled>
    );
}

export default UserOptions;
