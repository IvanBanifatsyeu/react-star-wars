import {
	THEME_LIGHT,
	THEME_DARK,
	THEME_NEITRAL,
	useTheme,
} from "@context/ThemeProvider";
import classNames from "classnames";
import styles from "./ChosseSide.module.css";
import { useState } from "react";
import { getLocalStorage } from "@utils/localStore";


const ChosseSide = () => {
	const isTheme = useTheme();
	const [activeTheme, setActiveTheme] = useState(typeof getLocalStorage('theme') === 'string' ? getLocalStorage('theme') : 'neitral');

	return (
		<>
			{" "}
			<div className={styles.wrapper}>
				<h3 className={styles.header}>Choose theme</h3>
				<div className={styles.tri_state_toggle}>
					<input
						className={classNames(styles.button, styles.button_dark)}
						type="radio"
						style={{
							backgroundColor: activeTheme === "dark" ? "#ae72c2" : "",
							pointerEvents: activeTheme === "dark" ? "none" : "",
						}}
						onClick={() => {
							isTheme.change(THEME_DARK);
							setActiveTheme("dark");
						}}
					/>
					<input
						className={classNames(styles.button, styles.button_neitral)}
						type="radio"
						style={{
							backgroundColor: activeTheme === "neitral" ? "#ae72c2" : "",
							pointerEvents: activeTheme === "neitral" ? "none" : "",
						}}
						onClick={() => {
							isTheme.change(THEME_NEITRAL);
							setActiveTheme("neitral");
						}}
					/>
					<input
						className={classNames(styles.button, styles.button_light)}
						type="radio"
						style={{
							backgroundColor: activeTheme === "light" ? "#ae72c2" : "",
							pointerEvents: activeTheme === "light" ? "none" : "",
						}}
						onClick={() => {
							isTheme.change(THEME_LIGHT);
							setActiveTheme("light");
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default ChosseSide;
