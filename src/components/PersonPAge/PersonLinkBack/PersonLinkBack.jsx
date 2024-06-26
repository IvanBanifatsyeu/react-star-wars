import { useNavigate } from "react-router-dom";
import iconBack from './img/left-arrow.svg'
import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
const history = useNavigate()
	const handleGoBack = (e) => {
		e.preventDefault();
		history(-1)
	};

	return (
		<a href="" className={styles.link} onClick={handleGoBack}>
			<img className={styles.link__img} src={iconBack} alt="go back" />
			<span >Go back</span>
		</a>
	);
};

export default PersonLinkBack;
