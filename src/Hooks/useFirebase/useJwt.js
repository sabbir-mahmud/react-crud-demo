const generateToken = async (email) => {
    fetch("https://sabbir-assignment-11.herokuapp.com/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    })
        .then((res) => res.json())
        .then((data) => {
            const token = data.accessToken;
            localStorage.setItem(email, token);
        });

};

export default generateToken;