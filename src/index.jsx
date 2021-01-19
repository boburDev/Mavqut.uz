import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import App from './components/app/app'
import { TypeProvider } from './components/UserMain/Context'
import { SideBarProvider } from './components/SideBar/Navigation/Context'
import { LogOutProvider } from './components/Logout/Context'
import { ServerProvider } from './components/app/ServerContext'
import { RegistrationProvider } from "./components/Register/Registration_Context"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TypeProvider>
        <SideBarProvider>
          <LogOutProvider>
            <ServerProvider>
              <RegistrationProvider>
                <App />
              </RegistrationProvider>
            </ServerProvider>
          </LogOutProvider>
        </SideBarProvider>
      </TypeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)