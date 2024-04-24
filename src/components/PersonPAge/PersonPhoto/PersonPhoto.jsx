import PropTypes from "prop-types";
import styles from "./PersonPhoto.module.css";
import { useDispatch } from "react-redux";
import { setPersonToFavorite, removePersonToFavorite } from "@store/actions";

const PersonPhoto = ({ personPhoto, personName, personId }) => {
	const dispatch = useDispatch();

	const add = () => {
		dispatch(
			setPersonToFavorite({
				[personId]: {
					name: personName,
					img: personPhoto,
				},
			})
		);
	};

	const remove = () => {
		dispatch(removePersonToFavorite(personId));
	};

	return (
		<>
			<div className={styles.container}>
				<img className={styles.photo} src={personPhoto} alt={personName} />
			</div>
			<div >
				<button onClick={add}>Add to favorite</button>
				<button onClick={remove}>Remove from favorite</button>
			</div>
		</>
	);
};

PersonPhoto.propTypes = {
	personPhoto: PropTypes.string,
	personName: PropTypes.string,
	personId: PropTypes.string,
};

export default PersonPhoto;
