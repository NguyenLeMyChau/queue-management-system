import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const usePagination = <T,>(data: T[] = [], itemsPerPage: number, stateInitialize: boolean = true) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { search } = location;
    const queryParams = new URLSearchParams(search);
    const pageNumber = queryParams.get('page');

    const page = stateInitialize ? (pageNumber ? parseInt(pageNumber, 10) : 1) : (pageNumber ? parseInt(pageNumber, 10) : undefined);
    const safePage = page ?? 1;

    const [currentPage, setCurrentPage] = useState(safePage);

    useEffect(() => {
        setCurrentPage(safePage);
    }, [safePage]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const goToPage = (page: number) => {
        const currentPath = location.pathname;
        navigate(`${currentPath}?page=${page}`);
        setCurrentPage(page);
    };

    const handlePageClick = (selectedItem: { selected: number }) => {
        goToPage(selectedItem.selected + 1);
    };

    const renderPagination = () => (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={totalPages}
            marginPagesDisplayed={1} // Số lượng trang hiển thị ở 2 bên (trang đầu và trang cuối)
            pageRangeDisplayed={2} // Số lượng trang hiển thị ở giữa (trang hiện tại + 2 trang)
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            forcePage={currentPage - 1}
        />
    );

    return {
        totalPages,
        currentItems,
        goToPage,
        currentPage,
        renderPagination,
    };
};

export default usePagination;