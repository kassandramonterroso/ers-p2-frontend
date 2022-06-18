export interface submitReimbursement{
    
    reimbAmt: number,
    requester: {
        empId: number,
    }
    statusPojo:{
        statusId: number,
    }
    
}