import Button from "../../Layout/components/Button/Button.tsx";
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();

  // Kiểm tra xem URL có phải là profile route không
  if (!location.pathname.startsWith("/@")) {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    );
  }

  const nickname = location.pathname.replace("/@", "");

  return (
    <div>
      <Button rightIcon={<CiSearch />} onClick={() => alert("hieu")}>
        Profile: {nickname}
      </Button>
    </div>
  );
};

export default Profile;
