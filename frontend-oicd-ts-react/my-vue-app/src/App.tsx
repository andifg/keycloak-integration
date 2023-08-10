import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthProvider } from "react-oidc-context";
import Application from "./Application";


const oidcConfig = {
  authority: "http://localhost:8080/realms/Demo",
  client_id: "react-app",
  redirect_uri: "http://localhost:5173",
  
  // ...
};


function onSigninCallback() {
  window.location.href = "/";
}



function App() {

  return (
    <>
    <h1>React App</h1>
    <AuthProvider {...oidcConfig} onSigninCallback={onSigninCallback}>
      <Application />
    </AuthProvider>
    </>
  )
}

export default App
