import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../Redux/actions";

const AdminUsers=()=>{
    const dispatch=useDispatch()
    const {user,allUsers}=useSelector(state=>state)
    console.log(user);
    if(allUsers?.length===0){
        dispatch(getAllUsers({domain:user?.domain,token:user?.token}))
        return( 
            <>
            LOADING!!!!!
            </>
        )
    }

return(
    <div>
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    </div>
)
}
export default AdminUsers