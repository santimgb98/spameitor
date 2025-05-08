
// Create a xlsx document
/*xlsx.fromBlankAsync()
    .then(workbook => {
        workbook.sheet(0).cell("A1").value("santimgb98@gmail.com");
        workbook.sheet(0).cell("A2").value("santimgb98@gmail.com");
        workbook.sheet(0).cell("A3").value("santimgb98@gmail.com");
        workbook.sheet(0).cell("A4").value("santimgb98@gmail.com");
        workbook.sheet(0).cell("A5").value("santimgb98@gmail.com");
        return workbook.toFileAsync("./emails.csv");
    })*/

const fs = require('fs');
const XLSX = require('xlsx');

// 1. Leer el archivo Excel
const workbook = XLSX.readFile('./xlsx-to-json/emails.xlsx');
const sheetName = workbook.SheetNames[0]; // Primera hoja
const worksheet = workbook.Sheets[sheetName];

// 2. Convertir a JSON
const data = XLSX.utils.sheet_to_json(worksheet);

// 3. Guardar como JSON

fs.writeFile('./xlsx-to-json/emails.json', JSON.stringify(data, null, 2));