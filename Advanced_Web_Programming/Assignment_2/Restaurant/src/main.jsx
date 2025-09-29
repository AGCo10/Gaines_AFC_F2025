import React from 'react' ;
import ReactDom from "react-dom/client" ;
import App from "./App.jsx" ;
import "./index.css" ;

ReactDOM.createRoot(document.getElementsById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)