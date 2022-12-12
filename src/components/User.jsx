import { useNavigate } from "react-router-dom";

function User({userObj}) {
    const navigate=useNavigate()
  return (
        <div>
          <img src={userObj.image} alt={userObj.firstName} />
          <h2>
            {userObj.firstName} {userObj.lastName}
          </h2>
          <button onClick={()=>navigate(`/detailUser/${userObj.id}`)}>Detail user</button>
          <button onClick={()=>navigate(`/listeTaches/${userObj.id}`)}>Liste des taches</button>
        </div>
      
  );
}

export default User;
