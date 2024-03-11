import cn from "classnames";
import styles from "./App.module.css";

const App = () => {
	console.log(typeof styles);
	return <h1 className={cn(styles.header, styles.text)}>Hello gggg</h1>;
};
export default App;
