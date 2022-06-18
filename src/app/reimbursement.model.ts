export interface Reimbursement{
    
    reimbId: number,
    reimbAmt: number,
    statusPojo:{
        statusId: number,
        status: string,
    },
    requester: {
        empId: number,
        empFirstName: string,
        empLastName: string,
        empUserName: string,
        empHashedPassword: string,
        role: {
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
        role: {
            roleId: number,
            role: string,
        }
    }
    
}