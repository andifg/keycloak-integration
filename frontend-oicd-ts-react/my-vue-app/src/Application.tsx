import React from "react";
import { useAuth } from "react-oidc-context";

function Application() {

    const auth = useAuth();


    async function fetc_api() {

        console.log("Fetch API")

        try {
            const token = auth.user?.access_token;
            const response = await fetch("http://localhost:9000/api/users/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json();
            console.log(result)
        } catch (e) {
            console.error(e);
        }


    }

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        console.log(auth.user);
        return (
        <div>
            Hello {auth.user?.profile.sub}{" "}
            <button onClick={() => void auth.removeUser()}>Log out</button>
            <button onClick={fetc_api}>Fetch API</button>
        </div>
        );
    }

    return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}

export default Application;