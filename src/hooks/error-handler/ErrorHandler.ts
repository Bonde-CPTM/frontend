import { useCallback } from "react"

export const useErrorHandler = () => {
    const handleError = useCallback((e: any)=>{
        if(e){
            if(e.response){
                if(e.response.data){
                    console.log(e.response.data)
                } else {
                    console.log(e)
                }
            } else {
                console.log(e)
            }
        } else{
            console.log(e)
        }
    }, [])
    return{
        handleError
    }
}
