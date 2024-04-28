 import styles from "./FavoritePage.module.css";
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FavoritePage = () => {
	const [people, setPeople] = useState([]);
	const storeData = useSelector((state) => state.favoriteReducer);
     // console.log(people)
     // console.log(storeData)
	useEffect(() => {
          const arrayOfObjects = Object.keys(storeData).reduce((acc, key) => {
               acc.push({
                    id: key,
                    name : storeData[key].name, 
                    urlImg:storeData[key].img });
               return acc
          }, [])
          setPeople(arrayOfObjects)
     }, []);

	return (
		<>
			<h1 className='header__text'>Favorite page</h1>
               {people.length ?
               <PeopleList people={people} /> :
               <h2 className={styles.comment}>No data</h2>
               }
			
		</>
	);
};

export default FavoritePage;
