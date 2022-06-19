export function getFromDate(): Date {
    return new Date(new Date().setFullYear(new Date().getFullYear() - 1))
}


export function getDays(fromdate: Date | null, todate: Date | null): number {
    if (fromdate !== null && todate !== null) {
        let DiffInTime = todate.getTime() - fromdate.getTime();
        let DiffInDays = DiffInTime / (1000 * 3600 * 24);
        return Math.round(DiffInDays);
    }
    return 0;
}


interface FormData {
    [key: string]: any
}
export function calculateInterest(data: FormData) {
    let amount = Number(data.amount);
    let interestRate = Number(data.interestRate);
    let days = Number(data.days);

    let R = (interestRate / 100) / 30;
    let SI = round(((amount * R) * days));
    let Amount = amount + SI;

    let result = {
        interest: SI,
        amount: Amount
    }
    console.log(result);
    return result;
}


function round(num: number): number {
    return Math.ceil(num * 100)/100;
}