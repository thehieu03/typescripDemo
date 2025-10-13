import Button from "../../Layout/components/Button/Button.tsx";
import {CiSearch} from "react-icons/ci";

const Profile = () => {
    return (
        <div>
            <Button rightIcon={<CiSearch/>} onClick={() => (alert('hieu'))}>Hieudzvl</Button>
        </div>
    );
};

export default Profile;