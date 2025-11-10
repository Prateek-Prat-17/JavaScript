let multiTable = [];
let dimension = 10;
for (let i = 1; i <= dimension; i++){ //Row Created
    row = [];
    for (let j = 1; j <= dimension; j++){ // Columns Created
      row.push(i *j); // Multiplication between the Row Num & Column Num
}
      multiTable.push(row); // Inserted in the Main Table
}
console.table(multiTable);