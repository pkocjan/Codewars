/*
    https://www.codewars.com/kata/539de388a540db7fec000642
*/

export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
    if (enteredCode !== correctCode || new Date(currentDate) > new Date(expirationDate) ){
        return false;
     }
       
     return true;
 }