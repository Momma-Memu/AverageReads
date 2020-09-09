import { handleErrors } from "./utils.js";

document.addEventListener('DOMContentLoaded', () => {
    const logInForm = document.querySelector(".log-in-form");
    const signUpForm = document.querySelector(".sign-up-form");

    logInForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(logInForm);
        const email = formData.get("email");
        const password = formData.get("password");
        const body = { email, password };
        try {
            const res = await fetch("http://localhost:8080/users/token", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) {
                throw res;
            }
            const {
                token,
                user: { id },
            } = await res.json();
            // storage access_token in localStorage:
            localStorage.setItem("AVG_READS_ACCESS_TOKEN", token);
            localStorage.setItem("AVG_READS_CURRENT_USER_ID", id);
            // window.location.href = "/";

        } catch (err) {
            handleErrors(err);
        }
    });

    signUpForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(signUpForm);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        const body = { email, password, username };
        try {
            const res = await fetch("http://localhost:8080/users", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) {
                throw res;
            }
            const {
                token,
                user: { id },
            } = await res.json();
            // storage access_token in localStorage:
            localStorage.setItem("AVG_READS_ACCESS_TOKEN", token);
            localStorage.setItem("AVG_READS_CURRENT_USER_ID", id);
            // window.location.href = "/";
            console.log(token)
        } catch (err) {
            handleErrors(err);
        }
    });

});