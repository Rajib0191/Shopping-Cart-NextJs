import { createContext, useReducer } from "react";
import favouriteReuder from "../reducer/favouriteReducer";

export const FavouriteContext = createContext();

const FavouriteProvider = (props) => {
    const [favouriteState, dispatchFavouriteAction] = useReducer(favouriteReuder, []);
    // console.log(favouriteState)
    return (
        <FavouriteContext.Provider value={{ favouriteState, dispatchFavouriteAction }}>
            {props.children}
        </FavouriteContext.Provider>
    )
}
export default FavouriteProvider;