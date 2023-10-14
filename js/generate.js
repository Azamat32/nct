// Sample "database" array with some sample data
const databaseArray = [
  {
    barcode: "2133123121",
    name: "Item 1",
    country: "USA",
    date_start: new Date("2023-07-01"),
    date_end: new Date("2023-07-31"),
    access: true,
  },
  {
    barcode: "456",
    name: "Item 2",
    country: "Canada",
    date_start: new Date("2023-08-01"),
    date_end: new Date("2023-08-31"),
    access: false,
  },
];

// Function to read Excel file
function readExcelFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const headers = excelData[0];
      const rows = excelData.slice(1);

      const result = rows.map((row) => {
        const obj = {};
        headers.forEach((header, index) => {
          obj[header] = row[index];
        });
        return obj;
      });

      resolve(result);
    };

    reader.onerror = function (e) {
      reject(e);
    };

    reader.readAsArrayBuffer(file);
  });
}

// Function to handle file submission
async function handleFileUpload(file) {
  try {
    // Read the Excel file contents
    const data = await readExcelFile(file);

    // Separate the data into matching and non-matching arrays
    const [matchingData, nonMatchingData] = separateData(data);

    // Print the results
    console.log("Matching data:");
    console.log(matchingData);
    console.log("Non-matching data:");
    console.log(nonMatchingData);
  } catch (error) {
    console.error(error);
  }
}

// Function to separate data into matching and non-matching arrays
function separateData(fileData) {
  const matchingData = [];
  const nonMatchingData = [];

  for (const item of fileData) {
    // Search for the item in the sample "database" array based on the barcode
    const result = databaseArray.find(
      (dbItem) => dbItem.barcode == item.barcode
    );
    if (result) {
      // If the item is found in the "database", add it to the matchingData array
      matchingData.push(item);
    } else {
      // If the item is not found in the "database", add it to the nonMatchingData array
      nonMatchingData.push(item);
    }
  }

  return [matchingData, nonMatchingData];
}

// Event listener for file input change
document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      handleFileUpload(file);
    }
  });
// Drag and drop event listeners
const generateWrap = document.querySelector(".generate_wrap");

generateWrap.addEventListener("dragover", function (event) {
  event.preventDefault();
  generateWrap.classList.add("dragover");
});

generateWrap.addEventListener("dragenter", function (event) {
  event.preventDefault();
  generateWrap.classList.add("dragover");
});

generateWrap.addEventListener("dragleave", function (event) {
  event.preventDefault();
  generateWrap.classList.remove("dragover");
});

generateWrap.addEventListener("drop", function (event) {
  event.preventDefault();
  generateWrap.classList.remove("dragover");
  const files = event.dataTransfer.files;

  if (files.length > 0) {
    handleFileUpload(files[0]);
  }
});
