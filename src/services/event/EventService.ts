import { useCallback } from "react"
import { EventApiBase } from "./EventApiBase"
import { EventModel } from "./types/EventModel"

export const useEventService = () => {

    const newEvent = useCallback((data: EventModel)=>{
        return EventApiBase.post('/event', {
            ...data
        })
    }, [])

    const editEvent = useCallback((data: EventModel)=>{
        return EventApiBase.patch<{
            content: EventModel
        }>('/event', {
            ...data
        })
    }, [])

    const getEventById = useCallback((id: string) => {
        console.log(id)
        return EventApiBase.get<{
            content: EventModel
        }>('/event/' + id)
    }, [])

     const getEventAll = useCallback(() => {
        return EventApiBase.get<{
            content: Array<EventModel>
        }>('/event/')
    }, [])
    
    
    return{
        newEvent,
        getEventById,
        editEvent,
        getEventAll
    }
}
