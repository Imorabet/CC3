import { useSelector } from "react-redux";
import User from "./User";

function ListUser() {
  const user = useSelector(state => state.user.user);
  return (
    <div>
      {user.map((item) => (
        <User userObj={item} />
      ))}
    </div>
  );
}

export default ListUser;
