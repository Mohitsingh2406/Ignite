import axios from "axios";
import { gameDetailsURL,gameScreenshotURL } from "../api";

export const loadGames = (id) => async (dispatch) => {

    dispatch({
        type:"LOADING_DETAIL"
    })

    const detailData = await axios.get(gameDetailsURL(id));
    const screenshotData = await axios.get(gameScreenshotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenshotData.data,
        },
    });
};
