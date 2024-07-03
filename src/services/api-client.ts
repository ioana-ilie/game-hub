import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "7f258ec006644cbf96bdd9bee8f9200e"
    }
})