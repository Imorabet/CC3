import { useSelector } from "react-redux";

function DetailUser() {
    const user=useSelector(state=>state.user.user)
    return ( 
        <div>
            <img src={user.image} alt='' />
            <h2>{user.firstName}</h2>
            <h3>{user.lastName}</h3>
            <p>{user.age}</p>
            <p>{user.gender}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.weight}</p>
            <p>{user.height}</p>
            <p>{user.birthDate}</p>
            <p>{user.eyeColor}</p>
            <p>{user.bloodGroup}</p>
            
            
        </div>
     );
}

export default DetailUser;