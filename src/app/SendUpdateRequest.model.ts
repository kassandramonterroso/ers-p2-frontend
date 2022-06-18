export interface SendUpdateRequest{
    
    reimbId: number,
    statusPojo:{
        statusId: number
    },
    approver: {
        empId: number,
    }
    
}