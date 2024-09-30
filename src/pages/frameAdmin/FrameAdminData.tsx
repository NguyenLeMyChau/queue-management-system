import './FrameAdmin.css';
import '../../containers/table/TableData.css';
import { BsPlusSquareFill } from "react-icons/bs";
import { RiDownloadCloudFill } from "react-icons/ri";
import TableData from '../../containers/table/TableData';
import usePagination from '../../hooks/usePagination';

interface FrameAdminDataProps {
    // data: Array<any>;
    // columns: Array<any>;
    itemsPerPage?: number;
    stateInitialize?: boolean;
}

const FrameAdminData: React.FC<FrameAdminDataProps> = ({ itemsPerPage, stateInitialize }) => {
    const data = [
        { id: 1, name: 'Thiết bị 1', status: 'Hoạt động', location: 'Hà Nội' },
        { id: 2, name: 'Thiết bị 2', status: 'Bảo trì', location: 'Hồ Chí Minh' },
        { id: 3, name: 'Thiết bị 3', status: 'Ngừng hoạt động', location: 'Đà Nẵng' },
        { id: 4, name: 'Thiết bị 4', status: 'Hoạt động', location: 'Hải Phòng' },
        { id: 5, name: 'Thiết bị 1', status: 'Hoạt động', location: 'Hà Nội' },
        { id: 6, name: 'Thiết bị 2', status: 'Bảo trì', location: 'Hồ Chí Minh' },
        { id: 7, name: 'Thiết bị 3', status: 'Ngừng hoạt động', location: 'Đà Nẵng' },
        { id: 8, name: 'Thiết bị 4', status: 'Hoạt động', location: 'Hải Phòng' },
        { id: 9, name: 'Thiết bị 5', status: 'Hoạt động', location: 'Hà Nội' },
        { id: 10, name: 'Thiết bị 6', status: 'Bảo trì', location: 'Hồ Chí Minh' },
        { id: 11, name: 'Thiết bị 7', status: 'Ngừng hoạt động', location: 'Đà Nẵng' },
        { id: 12, name: 'Thiết bị 8', status: 'Hoạt động', location: 'Hải Phòng' },
        { id: 13, name: 'Thiết bị 9', status: 'Hoạt động', location: 'Hà Nội' },
        { id: 14, name: 'Thiết bị 10', status: 'Bảo trì', location: 'Hồ Chí Minh' },
        { id: 15, name: 'Thiết bị 11', status: 'Ngừng hoạt động', location: 'Đà Nẵng' },
        { id: 16, name: 'Thiết bị 12', status: 'Hoạt động', location: 'Hải Phòng' },
        { id: 17, name: 'Thiết bị 13', status: 'Hoạt động', location: 'Hà Nội' },
        { id: 18, name: 'Thiết bị 14', status: 'Bảo trì', location: 'Hồ Chí Minh' },
        { id: 19, name: 'Thiết bị 15', status: 'Ngừng hoạt động', location: 'Đà Nẵng' },
        { id: 20, name: 'Thiết bị 16', status: 'Hoạt động', location: 'Hải Phòng' },
    ];

    const columns = [
        { key: 'id', title: 'ID', dataIndex: 'id', width: '10%' },
        { key: 'name', title: 'Tên thiết bị', dataIndex: 'name', width: '30%' },
        { key: 'status', title: 'Trạng thái', dataIndex: 'status', width: '30%' },
        { key: 'location', title: 'Vị trí', dataIndex: 'location', width: '30%' },
    ];


    const { totalPages, currentItems, goToPage, currentPage } =
        usePagination(data, itemsPerPage ? itemsPerPage : 9, false);

    return (
        <div className='frame-data-container'>
            <div className='content'>
                <header className='frame-data-header'>
                    <h2>Danh sách thiết bị</h2>
                    <div className='filter'>
                        Filter
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
                        <div className='pagination'>
                            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                                &lt;
                            </button>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => goToPage(index + 1)}
                                    className={currentPage === index + 1 ? 'active' : ''}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                                &gt;
                            </button>
                        </div>
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
