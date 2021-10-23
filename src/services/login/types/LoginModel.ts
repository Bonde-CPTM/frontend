export class LoginModel{
    constructor(
        public idLogin: string | null,
        public token: string | null,
        public email: string,
        public nome: string,
        public password: string,
    ){}
}