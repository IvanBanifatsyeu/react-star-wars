import PropTypes from "prop-types";
import styles from "./UiInput.module.css";
import "../index.css";
import cn from "classnames";
import icon from "./img/cross.svg";

const UiInput = ({ value, handleInputChange, placeholder, classes }) => (
	<div className={cn(styles.wrapper_input, classes)}>
		<input
			type="text"
			value={value}
			onChange={(e) => handleInputChange(e.target.value)}
			placeholder={placeholder}
			className={styles.input}
		/>
		<img
			className={cn(styles.clear, !value && styles.clear__disabled)}
			src={icon}
			onClick={() => value && handleInputChange("")}
			alt="clear"
		/>
	</div>
);

UiInput.propTypes = {
	value: PropTypes.string,
	handleInputChange: PropTypes.func,
	placeholder: PropTypes.string,
	classes: PropTypes.string,
};

export default UiInput;
