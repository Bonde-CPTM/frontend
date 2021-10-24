import { useCallback } from "react"
import { FeedbackApiBase } from "./FeedbackApiBase"
import { FeedbackModel } from "./types/FeedbackModel"

export const useFeedbackService = () =>{
    const sendFeedback = useCallback((data: FeedbackModel)=>{
        return FeedbackApiBase.post<{content: FeedbackModel}>('/feedback', {
            ...data
        })
    }, [])
    const getCategorias = useCallback((data: FeedbackModel)=>{
        return FeedbackApiBase.get<{content: FeedbackModel}>('/feedback/categoria')
    }, [])

    return{
        sendFeedback,
        getCategorias
    }
}