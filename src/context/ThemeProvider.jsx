import React, { useContext, useState } from "react";
import { changeCssVAriables } from "@services/changeCssVariables";
import { setLocalStorage, getLocalStorage } from "@utils/localStore";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";
export const THEME_NEITRAL = "neitral";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children, ...props }) => {
	
	changeCssVAriables(getLocalStorage("theme") );
	const [theme, setTheme] = useState(
		getLocalStorage("theme") ? getLocalStorage("theme") : THEME_DARK
	);
	const change = (name) => {
		setTheme(name);
		changeCssVAriables(name);
		setLocalStorage("theme", name);
	};

	return (
		<ThemeContext.Provider value={{ theme, change }} {...props}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
