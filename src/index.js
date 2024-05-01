import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import App from "@pages/App";

import "@styles/index.css";

import store from "@store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider >
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>
);
