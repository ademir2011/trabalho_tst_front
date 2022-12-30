type SignUpType = {
    name: string;
    email: string;
    password: string;
}

type SignInType = {
    email: string;
    password: string;
}

export function signUp({name, email, password} : SignUpType): Promise<Response> {

    return fetch('https://tstapi.ffcloud.com.br/auth/signup', {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    });

}

export function signIn({email, password} : SignInType): Promise<Response> {

    return fetch('https://tstapi.ffcloud.com.br/auth/signin', {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

}

