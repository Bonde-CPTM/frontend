import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEventService } from "services/event/EventService"
import { EventModel } from "services/event/types/EventModel"

export const EventPage = () => {
    const { id } = useParams<{id: string}>()
    const [event, setEvent] = useState<EventModel>(new EventModel())
    const { } = useEventService()
    return(
        <>
            
        </>
    )
}
