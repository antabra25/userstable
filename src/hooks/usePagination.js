import {useState} from "react";

function usePagination() {

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    }
    const limit = 10;
    const skip = (page - 1) * limit;

    return {
        page,
        handleChange,
        limit,
        skip
    }
}

export default usePagination;