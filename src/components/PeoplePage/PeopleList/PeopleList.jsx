import { removePersonToFavorite } from "@store/actions";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import icon from "./img/deleteBtn.svg";

import styles from "./PeopleList.module.css";

const PeopleList = ({ people, buttonRemove, forceUpdate }) => {
	const dispatch = useDispatch();

	const handleDelCharacter = (id) => {
		dispatch(removePersonToFavorite(id));
		forceUpdate();
	};

	return (
		<ul className={styles.list__container}>
			{people.map(({ name, url, id, urlImg }) => (
				<li className={styles.list__item} key={id}>
					<Link to={`/people/${id}`}>
						<img className={styles.person__photo} src={urlImg} alt={name} />{" "}
						<p>{name}</p>{" "}
					</Link>
					{buttonRemove && (
						<img
							src={icon}
							alt=""
							className={styles.btnRemove}
							onClick={(_) => handleDelCharacter(id)}
						/>
					)}
				</li>
			))}
		</ul>
	);
};

PeopleList.propTypes = {
	people: PropTypes.array,
};

export default PeopleList;
