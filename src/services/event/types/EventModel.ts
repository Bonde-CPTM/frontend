export class EventModel{

    constructor(
        public idEvent: string = '',
        public nome: string = '',
        public descricao: string = '',
        public local: string = '',
        public data: string = '',
        public foto: string = ''
    ){}
}