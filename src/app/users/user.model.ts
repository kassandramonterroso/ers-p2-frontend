export interface User{
    empId: number,
    empFirstName: string,
    empLastName: string,
    empUserName: string,
    empHashedPassword: string,
    roles: {
        roleId: number,
        role: string
}}