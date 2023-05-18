import { FC, ReactNode, useEffect } from "react"
import { getUserRole } from "../utils/role";
import { useLocation, useNavigate } from "react-router-dom";


interface props {
    children: ReactNode
}

const Authentication: FC<props> = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation()
    const role = getUserRole();

    useEffect(() => {

        const path:string = location.pathname;
        if (!role.isLogged) {
            if (path === "/register") { return }
            navigate("/login");
        }

        if (role.isLogged) {
            if (path === "/login") {
                navigate("/");
            }else if(path === "/register"){
                navigate("/");
            }
        }
    }, [navigate]);

    return (
        <>
            {children}
        </>
    );
}

export default Authentication;