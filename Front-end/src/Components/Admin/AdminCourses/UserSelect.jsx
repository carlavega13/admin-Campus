import { useEffect, useState } from "react"
import {IoIosArrowDown} from "react-icons/io"
import { RiDeleteBin2Line } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../../Redux/actions"


const UserSelect=({info,setInfo})=>{
    const users=useSelector(state=>state.allUsers)
    const [user,setUSer]=useState("")
    const [active,setActive]=useState(false)
    const [filteredUsers,setFilteredUsers]=useState(users)
useEffect(()=>{},[users])
const handleClick=(e,name)=>{
      setUSer(name)
      setInfo({
        ...info,
        userid:Number(e.target.id),
        userfullname:name
      })
      setActive(false)
}
const handlerChange=(e)=>{
    setUSer(e.target.value)
    if(e.target.value.length>1){

        setFilteredUsers(users?.filter(u=>u.fullname.includes(`${e.target.value[0].toUpperCase()}${e.target.value.slice(1)}`)))
    }else{
        
        setFilteredUsers(users?.filter(u=>u.fullname.includes(e.target.value)))
    }
    if(user===e.target.value){
        setActive(false)
    }
}

useEffect(()=>{
if(user.length===0){
    setFilteredUsers(users)
}

},[user,users])
return(
    <div>
    <input onChange={handlerChange} value={user} type="text" />{user.length>0&&<RiDeleteBin2Line onClick={()=>setUSer("")}/>}<IoIosArrowDown onClick={()=>setActive(!active)}/>
   {active&& <div>
    {filteredUsers.length===0&&<div>NO SE ENCONTRO USUARIO</div>}
        {filteredUsers?.map(user=>{
            return  (
                <div onClick={(e)=>handleClick(e,user.fullname)} id={user.id}>{user.fullname}</div>
            )
        })}
    </div>}

    </div>
)
}
export default UserSelect