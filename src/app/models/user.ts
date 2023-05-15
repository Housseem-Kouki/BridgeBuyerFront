import { Role } from "./role";

export class User {
    idUser!:number;
    email!: string;
    password!: string;
    phoneNumber!:string;
    lname!:string;
    fname!:string;
    role !: Role;
    enabled !: boolean;
    idrole!:number;
    createdAt!:Date;
    constructor(idUser:number,email:string, password:string, lname:string,phoneNumber:string,
         idrole : number,fname:string ,role : Role, enabled: boolean , createdAt:Date) {
        this.idUser = idUser;
        this.email = email;
        this.password = password;
        this.lname = lname;
        this.fname = fname;
        this.role = role;
        this.enabled = enabled;
        this.idrole = idrole;
        this.createdAt = createdAt;
        this.phoneNumber = phoneNumber

    };
    }