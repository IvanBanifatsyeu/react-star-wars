import { removePersonToFavorite, setPersonToFavorite } from "@store/actions";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styles from "./PersonPhoto.module.css";
import favorite_false from "./img/favorite-false.svg";
import favorite_true from "./img/favorite-true.svg";

const PersonPhoto = ({
	personPhoto,
	personName,
	personId,
	setPersonFavorite,
	personFavorite,
}) => {
	const dispatch = useDispatch();

	const dispatchFavor = () => {
		if (personFavorite) {
			dispatch(removePersonToFavorite(personId));
			setPersonFavorite(!personFavorite);
		} else {
			dispatch(
				setPersonToFavorite({
					[personId]: {
						name: personName,
						img: personPhoto,
					},
				})
			);
			setPersonFavorite(!personFavorite);
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<img className={styles.photo} src={personPhoto} alt={personName} />
			<img
				className={styles.fav}
				src={personFavorite ? favorite_true : favorite_false}
				onClick={dispatchFavor}
				alt="favorite-icon"
			/>
			</div>
		</div>
	);
};

PersonPhoto.propTypes = {
	personPhoto: PropTypes.string,
	personName: PropTypes.string,
	personId: PropTypes.string,
	personFavorite: PropTypes.bool,
	setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
