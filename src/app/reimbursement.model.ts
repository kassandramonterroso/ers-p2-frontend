export interface Reimbursement{
    
    reimbId: number,
    reimbAmt: number,
    status:{
        statusId: number,
        status: string,
    },
    requester: {
        empId: number,
        empFirstName: string,
        empLastName: string,
        empUserName: string,
        empHashedPassword: string,
        roles: {
            roleId: number,
            role: string,
        }
    },
    approver: {
        empId: number,
        empFirstName: string,
        empLastName: string,
        empUserName: string,
        empHashedPassword: string,
        roles: {
            roleId: number,
            role: string,
        }
    }
    
}