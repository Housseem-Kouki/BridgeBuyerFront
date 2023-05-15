import { Privilege } from "./privileges";
import { User } from "./user";

export class Role {
    idRole!:number;
    roleName!: string;
    etatrole!:Boolean;
    users !: Array<User> ;
    privileges !: Array<Privilege> ;

    constructor(roleName:string,etatrole:Boolean,users : Array<User>,privileges : Array<Privilege> ) {
            this.roleName=roleName;
            this.etatrole=etatrole;
            this.users=users;
            this.privileges=privileges;
    };
    }