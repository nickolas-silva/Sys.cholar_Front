import { FC } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import InfoBarAlunos from "../../components/InfoBar/InfoBarAlunos";


const EditUser: FC = () => {
    const { user } = useParams<{ user: string }>();
    
    return (
        <>
            <Header>
                <InfoBarAlunos/>
            </Header>
        </>
    );
}

export default EditUser;