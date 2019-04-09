import axios from "axios";
const MOVIE_BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = "e12ff996ca75a1814d80d8761b49ef48";

class Api {

    static async getMovies() {
        const res = await axios.get(`${MOVIE_BASE_URL}`,
            {
                params: {
                    api_key: API_KEY,
                    sort_by: "popularity.desc",
                    page: 1
                }
            });
        console.log(res.data.results)

        return res.data.results;
    }

}

export default Api;