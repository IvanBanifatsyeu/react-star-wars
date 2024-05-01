import { THEME_LIGHT, THEME_DARK, THEME_NEITRAL , useTheme } from "@context/ThemeProvider";

const ChosseSide = () => {
	const isTheme = useTheme();
	console.log(isTheme);

	return (
		<>
			{isTheme.theme}
			<button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
			<button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
			<button onClick={() => isTheme.change(THEME_NEITRAL)}>Neitral</button>
		</>
	);
};

// ChosseSide.propTypes = {
// //	test: PropTypes.string,
// };

export default ChosseSide;
