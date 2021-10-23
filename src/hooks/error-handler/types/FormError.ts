export class FormError{
    constructor(
        public isValid: boolean = false,
        public message: string = ''
    ){}
}