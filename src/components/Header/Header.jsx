import Favorite from "@components/Favorite";
import { useTheme } from "@context/ThemeProvider";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import icon_neitral from "./img/icon-colorful.svg";
import icon_dark from "./img/icon-dark.svg";
import icon_light from "./img/icon-light.svg";

const Header = () => {
	let  themeApp = useTheme().theme;

	if (typeof themeApp !== "string") {
		themeApp = "neitral";
	}
	const themeList = {
		icon_neitral,
		icon_dark,
		icon_light,
	};

	return (
		<div className={styles.container}>
			<ul className={styles.container__list}>
				<li>
					<NavLink to="/">
						<img
							className={styles.logo}
							src={themeList[`icon_${themeApp}`]}
							alt="icon star war"
						/>
					</NavLink>
				</li>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/people/?page=1&limit=10">People</NavLink>
				</li>
				<li>
					<NavLink to="/search">Search</NavLink>
				</li>
				<li>
					<NavLink to="/views">Top Views</NavLink>
				</li>
				<li>
					<NavLink to="/not-found">Not Found</NavLink>
				</li>
				<li>
					<NavLink to="/fail">Fail</NavLink>
				</li>
			</ul>
			<Favorite />
		</div>
	);
};

export default Header;
