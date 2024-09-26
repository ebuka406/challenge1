let MarkWeight = 1.88, MarkHeight = 95;
let JohnWeight = 1.76, JohnHeight = 85;

// calculating the BMI
let JohnBBMI = JohnWeight / (JohnHeight * JohnWeight);
console.log(JohnBBMI)
let MarkBMI = MarkWeight / (MarkHeight * MarkHeight);
console.log(MarkBMI)

// calculating if MarkBMI is higher than JohnBMI
let MarkHigherBMI = MarkBMI > JohnBBMI;
console.log(MarkHigherBMI)