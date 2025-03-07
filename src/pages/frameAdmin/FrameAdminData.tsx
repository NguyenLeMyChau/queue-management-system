import './FrameAdmin.css';
import '../../containers/table/TableData.css';
import { BsPlusSquareFill } from "react-icons/bs";
// import { RiDownloadCloudFill } from "react-icons/ri";
import TableData from '../../containers/table/TableData';
import usePagination from '../../hooks/usePagination';

interface FrameAdminDataProps {
    itemsPerPage?: number;
    title?: string;
    filterComponent?: React.ReactNode;
    data?: any[];
    columns: any[];
}

const FrameAdminData: React.FC<FrameAdminDataProps> = ({ itemsPerPage, title, filterComponent, data, columns }) => {
    const { totalPages, currentItems, renderPagination } =
        usePagination(data, itemsPerPage ? itemsPerPage : 9);

    return (
        <div className='frame-data-container' style={{ backgroundColor: 'pink' }}>
            <div className='content' style={{ backgroundColor: 'lightblue' }}>
                <header className='frame-data-header'>
                    <h2>{title}</h2>
                    <div className='filter'>
                        {filterComponent}
                    </div>
                </header>

                <main className='frame-data-main'>
                    <div className='frame-data-table'>
                        <TableData
                            data={currentItems}
                            columns={columns}
                        />
                    </div>

                    {totalPages > 0 && (
                        renderPagination()
                    )}

                </main>
            </div>

            <div className='frame-data-add'>
                <button type='button'>
                    <BsPlusSquareFill size={25} />
                    Thêm thiết bị
                </button>
            </div>

        </div>
    );
};

export default FrameAdminData;