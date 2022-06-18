// we can use a class or an interface to create a model
// a model is similar to a pojo that we created in java
export interface Employee{
    empId: number,
    empFirstName: string,
    empLastName: string,
    empUserName: string,
    empHashedPassword: string,
    rolesPojo: {
        roleId: number,
        role: string
}}
