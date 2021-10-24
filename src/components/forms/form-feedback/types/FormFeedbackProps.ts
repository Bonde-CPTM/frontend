import { FeedbackModel } from "services/feedback/types/FeedbackModel";

export interface FormFeedbackProps{
    onSubmit: (model: FeedbackModel) => any
    errorMessage?: string | null | undefined
}