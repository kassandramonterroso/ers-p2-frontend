export interface User{
    empId: number,
    empFirstName: string,
    empLastName: string,
    empUserName: string,
    empHashedPassword: string,
    rolesPojo: {
        roleId: number,
        role: string
}}