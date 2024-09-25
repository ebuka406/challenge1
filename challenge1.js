let MarkWeight = 1.69 , MarkHeight = 78;
let JohnHeight = 1.95 , JohnWeight = 92;

//calculating the BMI
let JohnBBMI = JohnWeight / (JohnHeight * JohnHeight) ;
console.log(JohnBBMI)
let MarkBMI = MarkHeight / (MarkHeight * MarkHeight) ;
console.log(MarkBMI)

//testing if Mark BMI is higher than John BMI
let MarkHigherBMI = MarkBMI > JohnBBMI;
console.log(MarkHigherBMI)

//