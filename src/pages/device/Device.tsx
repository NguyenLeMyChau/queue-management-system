import { useNavigate } from 'react-router-dom';
import './Device.css';

const Device = () => {
    const navigate = useNavigate();

    const handleAddDeviceClick = () => {
        navigate('/admin/device/add');
    };

    return (
        <div>
            <h1>Device</h1>
            <button onClick={handleAddDeviceClick}>Add device</button>
        </div>
    );
};

export default Device;
