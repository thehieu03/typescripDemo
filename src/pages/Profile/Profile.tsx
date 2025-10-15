import Button from "../../Layout/components/Button/Button.tsx";
import { CiSearch } from "react-icons/ci";
import { useLocation, useParams, Navigate } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const params = useParams();
  const rawParam = params.nickname ?? "";
  // If the path is "/@nickname", params.nickname will be "@nickname"
  // If the path is "/nickname", it will be "nickname"
  const hasAtPrefix = rawParam.startsWith("@");
  const nickname = hasAtPrefix ? rawParam.slice(1) : rawParam;
  // Optional: Normalize to "/@nickname" if user hit "/nickname"
  if (!hasAtPrefix && nickname) {
    return (
      <Navigate
        to={`/@${nickname}`}
        replace={true}
        state={{ from: location }}
      />
    );
  }

  return (
    <div>
      <Button rightIcon={<CiSearch />} onClick={() => alert("hieu")}>
        Profile: {nickname}
      </Button>
    </div>
  );
};

export default Profile;
