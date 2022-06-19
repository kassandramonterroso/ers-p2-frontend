export interface SendUpdateRequest{
    
    reimbId: number,
    status:{
        statusId: number
    },
    approver: {
        empId: number,
    }
    
}