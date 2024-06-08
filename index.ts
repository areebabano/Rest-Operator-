// Rest Operator 

 function sum(a: number ,b: number ,c: number, ...d: number[]): number {
  console.log(d);
    return a + b + c 
}
// function call
            //  a  b  c  [    d      ]
console.log(sum(12, 4, 7, 10, 12, 13, 14, 9))

function str(fName: string, lName: string, ...data: string[]): string{
    console.log(data);
    return fName + " " + lName + " " + data.join(" ")

}

console.log(str("Areeba","Bano","Inshallah!", "Software", "Engineer" ,"soon..."));















