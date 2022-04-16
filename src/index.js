import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
	<React.StrictMode>
		<MoralisProvider
			appId="U86brVW6b2EBga8J5BPWTHHRUiixTAP9o0N8BAM8"
			serverUrl="https://i6kvoec0tfye.usemoralis.com:2053/server">
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MoralisProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
