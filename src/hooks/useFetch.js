import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const makeApiCall = async () => {
            const res = await fetchDataFromApi(endpoint);
            setData(res);
            setLoading(false);
        }
        makeApiCall();
    }, [endpoint]);


    return {data, loading};
}

export default useFetch;