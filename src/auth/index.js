
export const signup = (email,password,username) => {
    return fetch(`http://localhost:3001/signup?userID=${email}&name=${username}&pwd=${password}`, {
        method: "POST",
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const signin = (emailID,password) => {
    return fetch(`http://localhost:3001/signin?user=${emailID}&pwd=${password}`, {
        method: "GET",
        headers: {
            Accept:"application/json",
            "content-type":"application/json"
        },
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const authenticate =  (jwt,next) => {
    if(typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(jwt))
        next()
    }

}

export const signout = (next) => {
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt");
        window.location.reload();
    }
}

export const isAuthenticated = () => {
    if(typeof window == "undefined") {
        return false
    }
    if(localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }
}

export const forgotPassword = email => {
    console.log('email: ', email);
    return fetch(`${process.env.REACT_APP_API_URL}/forgot-password/`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
        .then(response => {
            console.log('forgot password response: ', response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const resetPassword = resetInfo => {
    return fetch(`${process.env.REACT_APP_API_URL}/reset-password/`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resetInfo)
    })
        .then(response => {
            console.log('forgot password response: ', response);
            return response.json();
        })
        .catch(err => console.log(err));
};