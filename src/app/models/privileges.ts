import { Role } from "./role";

export class Privilege {
    idPrivilege!:number;
    privilegeName!: string;
    roles !: Array<Role> ;
    privilegecategorie !: string;
    
    constructor(idPrivilege:number,privilegeName:string,roles : Array<Role> , privilegecategorie: string ) {
        this.idPrivilege=idPrivilege;
        this.privilegeName=privilegeName;
        this.roles=roles;
        this.privilegecategorie = privilegecategorie;
};


}