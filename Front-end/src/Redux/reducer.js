import { GET_COURSES, LOGIN, PUT_USER } from "./actionTypes"

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
    courses:[]
}

const reducer=(state=initialState,action)=>{
switch (action.type) {
    case LOGIN:
        return {
            ...state,
            user:{
                ...action.payload
            //     id:action.payload.id,
            //  username:action.payload.username,
            //  domain:action.payload.domain,
            //  token:action.payload.token,
            //  rol:action.payload.rol
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
    default:
        return {...state}
}
}
 
export default reducer