import { useLocation, useNavigate } from "react-router-dom";


const usePagination = <T,>(items: T[], itemsPerPage: number, page: number) => {
    const navigate = useNavigate();
    const location = useLocation();

    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const goToPage = (page: number) => {
        const currentPath = location.pathname.split("/page")[0];
        console.log('currentPath', currentPath);
        navigate(`${currentPath}/page/${page}`);
    };

    return {
        totalPages,
        currentItems,
        goToPage
    };
};

export default usePagination;
