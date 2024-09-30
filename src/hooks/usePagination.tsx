import { useLocation, useNavigate } from "react-router-dom";

const usePagination = <T,>(data: T[], itemsPerPage: number, stateInitialize: boolean) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { search } = location;
    const queryParams = new URLSearchParams(search);
    const pageNumber = queryParams.get('page');

    // Chỉ khởi tạo page=1 nếu shouldInitialize là true
    const page = stateInitialize && !pageNumber ? 1 : (pageNumber ? parseInt(pageNumber, 10) : 1);

    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const goToPage = (page: number) => {
        const currentPath = location.pathname;
        navigate(`${currentPath}?page=${page}`);
    };

    return {
        totalPages,
        currentItems,
        goToPage,
        currentPage: page,
    };
};

export default usePagination;
