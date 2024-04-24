// import styles from "./FavoritePage.module.css";
import { useSelector } from "react-redux";

const FavoritePage = () => {
     const storeData = useSelector(state => state.favoriteReducer)
     return <><h2>{storeData}</h2></>
};



export default FavoritePage;