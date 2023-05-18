interface jwtPayload {
    role: string,
    id: number,
    exp: number
}

interface roles {
    isDiretor: boolean,
    isStudent: boolean,
    isTeacher: boolean,
    isLogged:boolean
}

function getRoles(role: string): roles {
    const userRoles: roles = {
        isDiretor: false,
        isStudent: false,
        isTeacher: false,
        isLogged:false
    };

    switch (role) {
        case 'diretor':
            userRoles.isDiretor = true;
            break;
        case 'professor':
            userRoles.isTeacher = true;
            break;
        case 'aluno':
            userRoles.isStudent = true;
            break;
    }
    userRoles.isLogged = userRoles.isDiretor || userRoles.isStudent || userRoles.isTeacher;

    return userRoles;
}

export function setUserRole(token: string) {
    const encodedString: string = token.split(".")[1];
    const decodedString: string = atob(encodedString);
    const { role ,id} = <jwtPayload>JSON.parse(decodedString);
    localStorage.setItem("role", role);
    localStorage.setItem("id", id.toString());
}

export function getUserRole(): roles {
    const role: string = localStorage.getItem("role");
    return getRoles(role);
}