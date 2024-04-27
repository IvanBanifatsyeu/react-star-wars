import { Link } from "react-router-dom";
import styles from "./Favorite.module.css";
import FavoriteIcon from "./img/bookmark.svg";
import { useSelector } from "react-redux";
import _ from 'lodash'

const Favorite = () => {
   const counterFav =  useSelector(store => store.favoriteReducer
   )
   console.log(_.size)

	return (
		<div>
			<Link to="/favorite">
                <span className={styles.counter}>{_.size(counterFav)}</span>
				<img className={styles.icon} src={FavoriteIcon} alt="FavoriteIcon" />
			</Link>
		</div>
	);
};

export default Favorite;
