import { GET_ALL_USERS, GET_COURSES, LOGIN, PUT_USER } from "./actionTypes"

const initialState={
    user:{
        id:0,
        username:"",
        domain:"",
        token:"",
        rol:"",
        phone:"",
        email:""
    },
    courses:[],
    allUsers:[],
    allUsersCopia:[]
}

const reducer=(state=initialState,action)=>{
switch (action.type) {
    case LOGIN:
        return {
            ...state,
            user:{
                ...action.payload

            }
        }
    case GET_COURSES:
        return{
            ...state,
         courses:action.payload
        }

    case PUT_USER:
        return {
            ...state,
         user:{
            ...action.payload
         }
        }
        case GET_ALL_USERS:
            return{
                ...state,
                allUsers:[...action.payload],
                allUsersCopia:[...action.payload]
            }
    default:
        return {...state}
}
}
 
export default reducer