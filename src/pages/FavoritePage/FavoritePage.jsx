import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
import { removeAll } from "@store/actions";
import { useEffect, useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FavoritePage.module.css";



const FavoritePage = () => {
    const [people, setPeople] = useState([]);
	const [_, forceUpdate] = useReducer(() => ({}), {});
	const storeData = useSelector((state) => state.favoriteReducer);
	const dispatch = useDispatch();

	useEffect(() => {
          const arrayOfObjects = Object.keys(storeData).reduce((acc, key) => {
               acc.push({
                    id: key,
				name: storeData[key].name,
				urlImg: storeData[key].img,
			});
			return acc;
		}, []);
		setPeople(arrayOfObjects);
        
	}, [_]);
     
     const  removeAllFav = () => {
         dispatch(removeAll())
         setPeople([]);
    }

	return (
		<>
			<h1 className="header__text">Favorite page</h1>
			{people.length ? (
				<>
                    <PeopleList people={people} buttonRemove forceUpdate={forceUpdate}/>
                    <button className={styles.removeAllFav} onClick={removeAllFav}>Remove all</button>
                    </>
			) : (
                    <h2 className={styles.comment}>No data</h2>
			)}
               
		</>
	);
};

export default FavoritePage;
