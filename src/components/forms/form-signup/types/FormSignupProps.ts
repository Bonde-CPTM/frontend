import { LoginModel } from "services/login/types/LoginModel";

export interface FormSignupProps{
    model?: LoginModel
    onSubmit: (model: LoginModel) => any
    errorMessage: string | null | undefined
}