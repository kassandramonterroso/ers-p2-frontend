export interface submitReimbursement{
    
    reimbAmt: number,
    requester: {
        empId: number,
    }
    status:{
        statusId: number,
    }
    
}