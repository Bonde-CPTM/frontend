import { FormError } from "hooks/error-handler/types/FormError";
import { LoginModel } from "services/login/types/LoginModel";

export interface FormLoginProps {
    model?: LoginModel
    onSubmit: (value: LoginModel) => any
    errorMessage?: string | null | undefined
}