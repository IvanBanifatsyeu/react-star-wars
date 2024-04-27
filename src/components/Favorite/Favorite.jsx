import _ from "lodash";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Favorite.module.css";
import FavoriteIcon from "./img/bookmark.svg";

const Favorite = () => {
	const counterFav = useSelector((store) => store.favoriteReducer);
    const counter =  _.size(counterFav).toString().length > 2 ? '...' : _.size(counterFav)
	return (
		<div className={styles.container}>
			<Link to="/favorite">
				<span className={styles.counter}>{counter}</span>
				<img className={styles.icon} src={FavoriteIcon} alt="FavoriteIcon" />
			</Link>
		</div>
	);
};

export default Favorite;
