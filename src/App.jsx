import { BrowserRouter } from "react-router-dom"

import { AppRouter } from "./router/AppRouter"
import { Test } from "./test/Test"

export const App = () => {
    return(
        <BrowserRouter>
            <AppRouter />
            {/* <Test /> */}

        </BrowserRouter>
    )
}
