import { useNavigate } from 'react-router-dom';
import './Device.css';
import FrameAdminData from '../frameAdmin/FrameAdminData';
import FilterDevice from './FilterDevice';

const Device = () => {
    const navigate = useNavigate();

    const dataDevice = [
        ...Array.from({ length: 99 }, (_, i) => ({
            id: 1 + i,
            name: `Thiết bị ${1 + i}`,
            status: ['Hoạt động', 'Bảo trì', 'Ngừng hoạt động'][i % 3],
            location: ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng'][i % 4]
        }))
    ];

    const columns = [
        { key: 'id', title: 'ID', dataIndex: 'id', width: '10%' },
        { key: 'name', title: 'Tên thiết bị', dataIndex: 'name', width: '30%' },
        { key: 'status', title: 'Trạng thái', dataIndex: 'status', width: '30%' },
        { key: 'location', title: 'Vị trí', dataIndex: 'location', width: '30%' },
    ];

    const handleAddDeviceClick = () => {
        navigate('/admin/device/add');
    };

    return (
        <>
            <FrameAdminData
                title='Danh sách thiết bị'
                filterComponent={<FilterDevice />}
                data={dataDevice}
                columns={columns}
            />
            {/* <button onClick={handleAddDeviceClick}>Add device</button> */}
        </>
    );
};

export default Device;
