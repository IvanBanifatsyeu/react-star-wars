import PropTypes from "prop-types";
import styles from "./UiButton.module.css";

const UiButton = ({text, onClick, disabled}) => {
	return (
		<button
			 onClick={onClick}
			 disabled={disabled}
			className={styles.button}
		>
			{text}
		</button>
	);
};

// UiButton.propTypes = {
// //	test: PropTypes.string,
// };

export default UiButton;
