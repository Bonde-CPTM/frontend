import { EventModel } from "services/event/types/EventModel";

export interface FormEventProps{
    model?: EventModel
    onSubmit: (model: EventModel) => any
    errorMessage?: string | null | undefined,
}