import { useSelector } from "react-redux"
import s from "../css/Paginated.module.css"
const Paginated=(props)=>{
    let{allUsersCopiaAmount,page,setPage}=props

let numbers=[]
let aux=1

while(allUsersCopiaAmount>0){
    allUsersCopiaAmount=allUsersCopiaAmount-15
    
    if(allUsersCopiaAmount>0){
        
        numbers.push(aux)
        aux++
        
    }
    }

 //! este handlres cuando apretemos cualquier numero setea el page en el numero que apretemos 
 const handlerPaginater=(numero)=>{

  setPage(numero)
    }
    //! este handler maneja la flechita de adelante 
    const handlerAdelante=()=>{
        if(page<aux-1){
            setPage(page+1)
        }
    }
    
        //! este handler maneja la flechita de atras 
        const handlerAtras=()=>{
            if(page>1){
                setPage(page-1)
            }
    
    }

    if(numbers.length>1){
        return(
          <div className={s.fondo}>
               <button className={s.botones} onClick={handlerAtras}>{"<"}</button>
              {
                  numbers?.map(numero=>{
                      return <button className={numero===page?s.buttClicked:s.botones} onClick={()=>handlerPaginater(numero)} key={numero}>{numero}</button>
                  })
              }
              <button className={s.botones} onClick={handlerAdelante}>{">"}</button>
          </div>
      )
      }
      return (
          <div></div>
      )
}
export default Paginated