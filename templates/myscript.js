// Read all excel cells and assign them to input ids


function readExcelAndAutofill(event) {
    var fileInput = event.target;
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, { type: "array" });
      var worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Choose first workbook sheet in excel
      
      // If else statements to figure out which bill your working with
      if (worksheet.A1 ? worksheet.A1.v : "" == "Account Number") { // Enbridge Bill
        var cellData = {
          q14a1: extractYear(worksheet.E2.v),
          q14a2: extractMonth(worksheet.E2.v),
          q14a3: extractDay(worksheet.E2.v),
          q14a4: extractYear(worksheet.F2.v),
          q14a5: extractMonth(worksheet.F2.v),
          q14a6: extractDay(worksheet.F2.v),
          q14a7: worksheet.J2.v,
          
          q14b1: extractYear(worksheet.E3.v),
          q14b2: extractMonth(worksheet.E3.v),
          q14b3: extractDay(worksheet.E3.v),
          q14b4: extractYear(worksheet.F3.v),
          q14b5: extractMonth(worksheet.F3.v),
          q14b6: extractDay(worksheet.F3.v),
          q14b7: worksheet.J3.v, 
    
          q14c1: extractYear(worksheet.E4.v),
          q14c2: extractMonth(worksheet.E4.v),
          q14c3: extractDay(worksheet.E4.v),
          q14c4: extractYear(worksheet.F4.v),
          q14c5: extractMonth(worksheet.F4.v),
          q14c6: extractDay(worksheet.F4.v),
          q14c7: worksheet.J4.v, 
    
          q14d1: extractYear(worksheet.E5.v),
          q14d2: extractMonth(worksheet.E5.v),
          q14d3: extractDay(worksheet.E5.v),
          q14d4: extractYear(worksheet.F5.v),
          q14d5: extractMonth(worksheet.F5.v),
          q14d6: extractDay(worksheet.F5.v),
          q14d7: worksheet.J5.v,
  
          q14e1: extractYear(worksheet.E6.v),
          q14e2: extractMonth(worksheet.E6.v),
          q14e3: extractDay(worksheet.E6.v),
          q14e4: extractYear(worksheet.F6.v),
          q14e5: extractMonth(worksheet.F6.v),
          q14e6: extractDay(worksheet.F6.v),
          q14e7: worksheet.J6.v,  
  
          q14f1: extractYear(worksheet.E7.v),
          q14f2: extractMonth(worksheet.E7.v),
          q14f3: extractDay(worksheet.E7.v),
          q14f4: extractYear(worksheet.F7.v),
          q14f5: extractMonth(worksheet.F7.v),
          q14f6: extractDay(worksheet.F7.v),
          q14f7: worksheet.J7.v,  
  
          q14g1: extractYear(worksheet.E8.v),
          q14g2: extractMonth(worksheet.E8.v),
          q14g3: extractDay(worksheet.E8.v),
          q14g4: extractYear(worksheet.F8.v),
          q14g5: extractMonth(worksheet.F8.v),
          q14g6: extractDay(worksheet.F8.v),
          q14g7: worksheet.J8.v, 
  
          q14h1: extractYear(worksheet.E9.v),
          q14h2: extractMonth(worksheet.E9.v),
          q14h3: extractDay(worksheet.E9.v),
          q14h4: extractYear(worksheet.F9.v),
          q14h5: extractMonth(worksheet.F9.v),
          q14h6: extractDay(worksheet.F9.v),
          q14h7: worksheet.J9.v,  
  
          q14i1: extractYear(worksheet.E10.v),
          q14i2: extractMonth(worksheet.E10.v),
          q14i3: extractDay(worksheet.E10.v),
          q14i4: extractYear(worksheet.F10.v),
          q14i5: extractMonth(worksheet.F10.v),
          q14i6: extractDay(worksheet.F10.v),
          q14i7: worksheet.J10.v, 
  
          q14j1: extractYear(worksheet.E11.v),
          q14j2: extractMonth(worksheet.E11.v),
          q14j3: extractDay(worksheet.E11.v),
          q14j4: extractYear(worksheet.F11.v),
          q14j5: extractMonth(worksheet.F11.v),
          q14j6: extractDay(worksheet.F11.v),
          q14j7: worksheet.J11.v,  
  
          q14k1: extractYear(worksheet.E12.v),
          q14k2: extractMonth(worksheet.E12.v),
          q14k3: extractDay(worksheet.E12.v),
          q14k4: extractYear(worksheet.F12.v),
          q14k5: extractMonth(worksheet.F12.v),
          q14k6: extractDay(worksheet.F12.v),
          q14k7: worksheet.J12.v
        };
      } else if (worksheet.A7 ? worksheet.A7.v : "" == "Month") { // Hydro One Bill
        
        var cellData = {
          q15a1: extractYear(worksheet.A8.v),
          q15a2: extractMonth(worksheet.A8.v),
          q15a3: "1",
          q15a4: extractYear(worksheet.A8.v),
          q15a5: extractMonth(worksheet.A8.v),
          q15a6: extractDay(extractMonth(worksheet.A8.v).toString()),
          q15a7: worksheet.B8.v,
  
          q15b1: extractYear(worksheet.A9.v),
          q15b2: extractMonth(worksheet.A9.v),
          q15b3: "1",
          q15b4: extractYear(worksheet.A9.v),
          q15b5: extractMonth(worksheet.A9.v),
          q15b6: extractDay(extractMonth(worksheet.A9.v).toString()),
          q15b7: worksheet.B9.v,
  
          q15c1: extractYear(worksheet.A10.v),
          q15c2: extractMonth(worksheet.A10.v),
          q15c3: "1",
          q15c4: extractYear(worksheet.A10.v),
          q15c5: extractMonth(worksheet.A10.v),
          q15c6: extractDay(extractMonth(worksheet.A10.v).toString()),
          q15c7: worksheet.B10.v,
  
          q15d1: extractYear(worksheet.A11.v),
          q15d2: extractMonth(worksheet.A11.v),
          q15d3: "1",
          q15d4: extractYear(worksheet.A11.v),
          q15d5: extractMonth(worksheet.A11.v),
          q15d6: extractDay(extractMonth(worksheet.A11.v).toString()),
          q15d7: worksheet.B11.v,
          
          q15e1: extractYear(worksheet.A12.v),
          q15e2: extractMonth(worksheet.A12.v),
          q15e3: "1",
          q15e4: extractYear(worksheet.A12.v),
          q15e5: extractMonth(worksheet.A12.v),
          q15e6: extractDay(extractMonth(worksheet.A12.v).toString()),
          q15e7: worksheet.B12.v,
  
          q15f1: extractYear(worksheet.A13.v),
          q15f2: extractMonth(worksheet.A13.v),
          q15f3: "1",
          q15f4: extractYear(worksheet.A13.v),
          q15f5: extractMonth(worksheet.A13.v),
          q15f6: extractDay(extractMonth(worksheet.A13.v).toString()),
          q15f7: worksheet.B13.v,
  
          q15g1: extractYear(worksheet.A14.v),
          q15g2: extractMonth(worksheet.A14.v),
          q15g3: "1",
          q15g4: extractYear(worksheet.A14.v),
          q15g5: extractMonth(worksheet.A14.v),
          q15g6: extractDay(extractMonth(worksheet.A14.v).toString()),
          q15g7: worksheet.B14.v,
          
          q15h1: extractYear(worksheet.A15.v),
          q15h2: extractMonth(worksheet.A15.v),
          q15h3: "1",
          q15h4: extractYear(worksheet.A15.v),
          q15h5: extractMonth(worksheet.A15.v),
          q15h6: extractDay(extractMonth(worksheet.A15.v).toString()),
          q15h7: worksheet.B15.v,
  
          q15i1: extractYear(worksheet.A16.v),
          q15i2: extractMonth(worksheet.A16.v),
          q15i3: "1",
          q15i4: extractYear(worksheet.A16.v),
          q15i5: extractMonth(worksheet.A16.v),
          q15i6: extractDay(extractMonth(worksheet.A16.v).toString()),
          q15i7: worksheet.B16.v,
  
          q15j1: extractYear(worksheet.A17.v),
          q15j2: extractMonth(worksheet.A17.v),
          q15j3: "1",
          q15j4: extractYear(worksheet.A17.v),
          q15j5: extractMonth(worksheet.A17.v),
          q15j6: extractDay(extractMonth(worksheet.A17.v).toString()),
          q15j7: worksheet.B17.v,
  
          q15k1: extractYear(worksheet.A18.v),
          q15k2: extractMonth(worksheet.A18.v),
          q15k3: "1",
          q15k4: extractYear(worksheet.A18.v),
          q15k5: extractMonth(worksheet.A18.v),
          q15k6: extractDay(extractMonth(worksheet.A18.v).toString()),
          q15k7: worksheet.B18.v,
          
          q15l1: extractYear(worksheet.A19.v),
          q15l2: extractMonth(worksheet.A19.v),
          q15l3: "1",
          q15l4: extractYear(worksheet.A19.v),
          q15l5: extractMonth(worksheet.A19.v),
          q15l6: extractDay(extractMonth(worksheet.A19.v).toString()),
          q15l7: worksheet.B19.v
        };
      } // Add other else if statements if want to be accessible for other bill types
  
  
      autofillInputs(cellData);
    };
    reader.readAsArrayBuffer(file);
  }
  
  // Extract the day from dates
  function extractDay(dateValue) {
    if (typeof dateValue === "string") {
      if (dateValue === "01" || dateValue === "03" || 
          dateValue === "05" || dateValue === "07" || 
          dateValue === "08" || dateValue === "10" || 
          dateValue === "12") { 
          return "31"; // For months with 31 days
      } else if (dateValue === "04" || dateValue === "06" || 
                 dateValue === "09" || dateValue === "11") {
          return "30"; // For months with 30 days
      } else {
          return "28"; // for February
      }
    } else {
      var dateObj = new Date((dateValue) * 24 * 60 * 60 * 1000);
      return dateObj.getDate();
    }
  }
  
  // Extract the month from dates
  function extractMonth(dateValue) {
    if (typeof dateValue === "string") {
      return dateValue.substr(0, 2);
    } else {
      var dateObj = new Date((dateValue - 1) * 24 * 60 * 60 * 1000); // Subtract 1 day to account for Excel's date origin
      var month = dateObj.getMonth() + 1; // Adding 1 as month index is zero-based
      return month;
    }
  }
  
  // Extract the year from dates
  function extractYear(dateValue) {
    if (typeof dateValue === "string") {
      return dateValue.substr(3, 7);
    } else {
      var dateObj = new Date((dateValue - 1) * 24 * 60 * 60 * 1000); // Subtract 1 day to account for Excel's date origin
      return dateObj.getFullYear() - 70; // Subtract 70 for correct date;
    }
  }
  
  // Autofill input fields in HTML by iteration
  function autofillInputs(cellData) {
    for (var key in cellData) {
      var input = document.getElementById(key);
      if (input) {
        input.value = cellData[key];
      }
    }
  }
  
  // Bind the readExcelAndAutofill function to file input change event
  
  let q13a2Value;
  let q13b2Value;
  let q13c2Value;
  let q13d2Value;
  let q13e2Value;
  let q13f2Value;
  let q13g2Value;
  let q13h2Value; 
  let q13i2Value;
  let q13j2Value;
  
  document.addEventListener('DOMContentLoaded', function () {
    //excel part
    document.getElementById("excelFile").addEventListener("change", readExcelAndAutofill, false);
    document.getElementById("excelFile2").addEventListener("change", readExcelAndAutofill, false);
  
  //shows/hides the specific input fields depending on the checkbox
    q13a1.addEventListener('change', function () {
      if (q13a1.checked) {
        q13a2.style.display = 'block';
      } else {
        q13a2.style.display = 'none';
      }
    });
  
    q13b1.addEventListener('change', function () {
      if (q13b1.checked) {
        q13b2.style.display = 'block';
      } else {
        q13b2.style.display = 'none';
      }
    });
  
    q13c1.addEventListener('change', function () {
      if (q13c1.checked) {
        q13c2.style.display = 'block';
      } else {
        q13c2.style.display = 'none';
      }
    });
  
    q13d1.addEventListener('change', function () {
      if (q13d1.checked) {
        q13d2.style.display = 'block';
      } else {
        q13d2.style.display = 'none';
      }
    });
  
    q13e1.addEventListener('change', function () {
      if (q13e1.checked) {
        q13e2.style.display = 'block';
      } else {
        q13e2.style.display = 'none';
      }
    });
  
    q13f1.addEventListener('change', function () {
      if (q13f1.checked) {
        q13f2.style.display = 'block';
      } else {
        q13f2.style.display = 'none';
      }
    });
  
    q13g1.addEventListener('change', function () {
      if (q13g1.checked) {
        q13g2.style.display = 'block';
      } else {
        q13g2.style.display = 'none';
      }
    });
    
    q13h1.addEventListener('change', function () {
      if (q13h1.checked) {
        q13h2.style.display = 'block';
      } else {
        q13h2.style.display = 'none';
      }
    });
  
    q13i1.addEventListener('change', function () {
      if (q13i1.checked) {
        q13i2.style.display = 'block';
      } else {
        q13i2.style.display = 'none';
      }
    });
  
    q13j1.addEventListener('change', function () {
      if (q13j1.checked) {
        q13j2.style.display = 'block';
      } else {
        q13j2.style.display = 'none';
      }
    });
  
  //stores the user input in the variables q13"*"2Value
    const q13a2Input = document.getElementById('q13a2-input');
    q13a2Input.addEventListener('input', function () {
      q13a2Value = q13a2Input.value;
      console.log(q13a2Value);
    });
    
    const q13b2Input = document.getElementById('q13b2-input');
    q13b2Input.addEventListener('input', function () {
      q13b2Value = q13b2Input.value;
      console.log(q13b2Value);
    });
  
    const q13c2Input = document.getElementById('q13c2-input');
    q13c2Input.addEventListener('input', function () {
      q13c2Value = q13c2Input.value;
      console.log(q13c2Value);
    }
    );
  
    const q13d2Input = document.getElementById('q13d2-input');
    q13d2Input.addEventListener('input', function () {
      q13d2Value = q13d2Input.value;
      console.log(q13d2Value);
    }
    );
  
    const q13e2Input = document.getElementById('q13e2-input');
    q13e2Input.addEventListener('input', function () {
      q13e2Value = q13e2Input.value;
      console.log(q13e2Value);
    }
    );
  
    const q13f2Input = document.getElementById('q13f2-input');
    q13f2Input.addEventListener('input', function () {
      q13f2Value = q13f2Input.value;
      console.log(q13f2Value);
    }
    );
  
    const q13g2Input = document.getElementById('q13g2-input');
    q13g2Input.addEventListener('input', function () {
      q13g2Value = q13g2Input.value;
      console.log(q13g2Value);
    }
    );
  
    const q13h2Input = document.getElementById('q13h2-input');
    q13h2Input.addEventListener('input', function () {
      q13h2Value = q13h2Input.value;
      console.log(q13h2Value);
    }
    );
  
    const q13i2Input = document.getElementById('q13i2-input');
    q13i2Input.addEventListener('input', function () {
      q13i2Value = q13i2Input.value;
      console.log(q13i2Value);
    }
    );
  
    const q13j2Input = document.getElementById('q13j2-input');
    q13j2Input.addEventListener('input', function () {
      q13j2Value = q13j2Input.value;
      console.log(q13j2Value);
    }
    );
  
  }); //end of DOMContentLoaded
  
  // prints the user inputs to a json file and allows the user to download it 
  function printUserInputs() {
  //stores the user input in the variables
    var q1 = document.getElementById('q1').value || "nan";
    var q2 = document.getElementById('q2').value;
    var q2other = document.getElementById('q2other-input').value;
    var q3 = document.getElementById('q3').value;
    var q4 = document.getElementById('q4').value;
    var q4other = document.getElementById('q4other-input').value;
    var q5 = document.getElementById('q5').value;
    var q5other = document.getElementById('q5other-input').value;
    var q6 = document.getElementById('q6').value; 
    var q6other = document.getElementById('q6other-input').value;
    var q7 = document.getElementById('q7').value;
    var q7other = document.getElementById('q7other-input').value;
    var q8 = document.getElementById('q8').value;
    var q8other = document.getElementById('q8other-input').value;
    var q9 = document.getElementById('q9').value;
    var q9other = document.getElementById('q9other-input').value;
    
    var q10a = document.getElementById('q10a').checked ? 'Electric car charged by electricity' : 'nan'; //if checked, then the value is the text, else it is nan
    var q10b = document.getElementById('q10b').checked ? 'Fire place powered by natural gas' : 'nan';
    var q10c = document.getElementById('q10c').checked ? 'Swimming pool, sauna, etc.' : 'nan';
    var q10d = document.getElementById('q10d').checked ? 'No uncommon devices' : 'nan';
    var q10e = document.getElementById('q10e').value || "nan";
    
    var q10 = [q10a, q10b, q10c, q10d, q10e].join(', '); //joins the values of the checked boxes and the value of the text box
  
    var q11 = document.getElementById('q11').value;
    var q12 = document.getElementById('q12').value;
  
    var q13a1 = document.getElementById('q13a1').checked ? 'My home was air-leak was tested and now it is leak-proof' : 'nan';  //stores the value of text right after the ? character if the checkbox was checked, if it wasnt checked then it stores nan
    var q13b1 = document.getElementById('q13b1').checked ? 'I replaced my windows with energy efficient windows (e.g. double or tripple-layer)' : 'nan';
    var q13c1 = document.getElementById('q13c1').checked ? 'I installed a high efficiency furnace' : 'nan';
    var q13d1 = document.getElementById('q13d1').checked ? 'I increased the thermal insulation of my building envelop (e.g. increase R-value, foam spray under roof, etc.)r' : 'nan';
    var q13e1 = document.getElementById('q13e1').checked ? 'I installed a photovoltaic system' : 'nan';
    var q13f1 = document.getElementById('q13f1').checked ? 'I installed a heat pump for home heating' : 'nan';
    var q13g1 = document.getElementById('q13g1').checked ? 'I installed a solar thermal collector' : 'nan';
    var q13h1 = document.getElementById('q13h1').checked ? 'I installed a thermal energy storage system' : 'nan';
    var q13i1 = document.getElementById('q13i1').checked ? 'I have installed a green roof' : 'nan';
    var q13j1 = document.getElementById('q13j1').checked ? 'I have installed other systems not described above' : 'nan';
    var q13 = [q13a1, q13a2Value, q13b1, q13b2Value, q13c1, q13c2Value, q13d1, q13d2Value, q13e1, q13e2Value, q13f1, q13f2Value, q13g1, q13g2Value, q13h1, q13h2Value, q13i1, q13i2Value, q13j1, q13j2Value].join(', ');
     
    q14a1 = document.getElementById('q14a1').value || "nan"; q14a2 = document.getElementById('q14a2').value || "nan"; q14a3 = document.getElementById('q14a3').value || "nan"; q14a4 = document.getElementById('q14a4').value || "nan"; q14a5 = document.getElementById('q14a5').value || "nan"; q14a6 = document.getElementById('q14a6').value || "nan"; q14a7 = document.getElementById('q14a7').value || "nan";
    q14b1 = document.getElementById('q14b1').value || "nan"; q14b2 = document.getElementById('q14b2').value || "nan"; q14b3 = document.getElementById('q14b3').value || "nan"; q14b4 = document.getElementById('q14b4').value || "nan"; q14b5 = document.getElementById('q14b5').value || "nan"; q14b6 = document.getElementById('q14b6').value || "nan"; q14b7 = document.getElementById('q14b7').value || "nan";
    q14c1 = document.getElementById('q14c1').value || "nan"; q14c2 = document.getElementById('q14c2').value || "nan"; q14c3 = document.getElementById('q14c3').value || "nan"; q14c4 = document.getElementById('q14c4').value || "nan"; q14c5 = document.getElementById('q14c5').value || "nan"; q14c6 = document.getElementById('q14c6').value || "nan"; q14c7 = document.getElementById('q14c7').value || "nan";
    q14d1 = document.getElementById('q14d1').value || "nan"; q14d2 = document.getElementById('q14d2').value || "nan"; q14d3 = document.getElementById('q14d3').value || "nan"; q14d4 = document.getElementById('q14d4').value || "nan"; q14d5 = document.getElementById('q14d5').value || "nan"; q14d6 = document.getElementById('q14d6').value || "nan"; q14d7 = document.getElementById('q14d7').value || "nan";
    q14e1 = document.getElementById('q14e1').value || "nan"; q14e2 = document.getElementById('q14e2').value || "nan"; q14e3 = document.getElementById('q14e3').value || "nan"; q14e4 = document.getElementById('q14e4').value || "nan"; q14e5 = document.getElementById('q14e5').value || "nan"; q14e6 = document.getElementById('q14e6').value || "nan"; q14e7 = document.getElementById('q14e7').value || "nan";
    q14f1 = document.getElementById('q14f1').value || "nan"; q14f2 = document.getElementById('q14f2').value || "nan"; q14f3 = document.getElementById('q14f3').value || "nan"; q14f4 = document.getElementById('q14f4').value || "nan"; q14f5 = document.getElementById('q14f5').value || "nan"; q14f6 = document.getElementById('q14f6').value || "nan"; q14f7 = document.getElementById('q14f7').value || "nan";
    q14g1 = document.getElementById('q14g1').value || "nan"; q14g2 = document.getElementById('q14g2').value || "nan"; q14g3 = document.getElementById('q14g3').value || "nan"; q14g4 = document.getElementById('q14g4').value || "nan"; q14g5 = document.getElementById('q14g5').value || "nan"; q14g6 = document.getElementById('q14g6').value || "nan"; q14g7 = document.getElementById('q14g7').value || "nan";
    q14h1 = document.getElementById('q14h1').value || "nan"; q14h2 = document.getElementById('q14h2').value || "nan"; q14h3 = document.getElementById('q14h3').value || "nan"; q14h4 = document.getElementById('q14h4').value || "nan"; q14h5 = document.getElementById('q14h5').value || "nan"; q14h6 = document.getElementById('q14h6').value || "nan"; q14h7 = document.getElementById('q14h7').value || "nan";
    q14i1 = document.getElementById('q14i1').value || "nan"; q14i2 = document.getElementById('q14i2').value || "nan"; q14i3 = document.getElementById('q14i3').value || "nan"; q14i4 = document.getElementById('q14i4').value || "nan"; q14i5 = document.getElementById('q14i5').value || "nan"; q14i6 = document.getElementById('q14i6').value || "nan"; q14i7 = document.getElementById('q14i7').value || "nan";
    q14j1 = document.getElementById('q14j1').value || "nan"; q14j2 = document.getElementById('q14j2').value || "nan"; q14j3 = document.getElementById('q14j3').value || "nan"; q14j4 = document.getElementById('q14j4').value || "nan"; q14j5 = document.getElementById('q14j5').value || "nan"; q14j6 = document.getElementById('q14j6').value || "nan"; q14j7 = document.getElementById('q14j7').value || "nan";
    q14k1 = document.getElementById('q14k1').value || "nan"; q14k2 = document.getElementById('q14k2').value || "nan"; q14k3 = document.getElementById('q14k3').value || "nan"; q14k4 = document.getElementById('q14k4').value || "nan"; q14k5 = document.getElementById('q14k5').value || "nan"; q14k6 = document.getElementById('q14k6').value || "nan"; q14k7 = document.getElementById('q14k7').value || "nan";
    q14l1 = document.getElementById('q14l1').value || "nan"; q14l2 = document.getElementById('q14l2').value || "nan"; q14l3 = document.getElementById('q14l3').value || "nan"; q14l4 = document.getElementById('q14l4').value || "nan"; q14l5 = document.getElementById('q14l5').value || "nan"; q14l6 = document.getElementById('q14l6').value || "nan"; q14l7 = document.getElementById('q14l7').value || "nan";
    
    var q14 = [ //store all the values in an array 
      q14a1, q14a2, q14a3, q14a4, q14a5, q14a6, q14a7,
      q14b1, q14b2, q14b3, q14b4, q14b5, q14b6, q14b7,
      q14c1, q14c2, q14c3, q14c4, q14c5, q14c6, q14c7,
      q14d1, q14d2, q14d3, q14d4, q14d5, q14d6, q14d7,
      q14e1, q14e2, q14e3, q14e4, q14e5, q14e6, q14e7,
      q14f1, q14f2, q14f3, q14f4, q14f5, q14f6, q14f7,
      q14g1, q14g2, q14g3, q14g4, q14g5, q14g6, q14g7,
      q14h1, q14h2, q14h3, q14h4, q14h5, q14h6, q14h7,
      q14i1, q14i2, q14i3, q14i4, q14i5, q14i6, q14i7,
      q14j1, q14j2, q14j3, q14j4, q14j5, q14j6, q14j7,
      q14k1, q14k2, q14k3, q14k4, q14k5, q14k6, q14k7,
      q14l1, q14l2, q14l3, q14l4, q14l5, q14l6, q14l7
    ].join(', ');
  
    var q15a1 = document.getElementById('q15a1').value || "nan"; var q15a2 = document.getElementById('q15a2').value || "nan"; var q15a3 = document.getElementById('q15a3').value || "nan"; var q15a4 = document.getElementById('q15a4').value || "nan"; var q15a5 = document.getElementById('q15a5').value || "nan"; var q15a6 = document.getElementById('q15a6').value || "nan"; var q15a7 = document.getElementById('q15a7').value || "nan";
    var q15b1 = document.getElementById('q15b1').value || "nan"; var q15b2 = document.getElementById('q15b2').value || "nan"; var q15b3 = document.getElementById('q15b3').value || "nan"; var q15b4 = document.getElementById('q15b4').value || "nan"; var q15b5 = document.getElementById('q15b5').value || "nan"; var q15b6 = document.getElementById('q15b6').value || "nan"; var q15b7 = document.getElementById('q15b7').value || "nan";
    var q15c1 = document.getElementById('q15c1').value || "nan"; var q15c2 = document.getElementById('q15c2').value || "nan"; var q15c3 = document.getElementById('q15c3').value || "nan"; var q15c4 = document.getElementById('q15c4').value || "nan"; var q15c5 = document.getElementById('q15c5').value || "nan"; var q15c6 = document.getElementById('q15c6').value || "nan"; var q15c7 = document.getElementById('q15c7').value || "nan";
    var q15d1 = document.getElementById('q15d1').value || "nan"; var q15d2 = document.getElementById('q15d2').value || "nan"; var q15d3 = document.getElementById('q15d3').value || "nan"; var q15d4 = document.getElementById('q15d4').value || "nan"; var q15d5 = document.getElementById('q15d5').value || "nan"; var q15d6 = document.getElementById('q15d6').value || "nan"; var q15d7 = document.getElementById('q15d7').value || "nan";
    var q15e1 = document.getElementById('q15e1').value || "nan"; var q15e2 = document.getElementById('q15e2').value || "nan"; var q15e3 = document.getElementById('q15e3').value || "nan"; var q15e4 = document.getElementById('q15e4').value || "nan"; var q15e5 = document.getElementById('q15e5').value || "nan"; var q15e6 = document.getElementById('q15e6').value || "nan"; var q15e7 = document.getElementById('q15e7').value || "nan";
    var q15f1 = document.getElementById('q15f1').value || "nan"; var q15f2 = document.getElementById('q15f2').value || "nan"; var q15f3 = document.getElementById('q15f3').value || "nan"; var q15f4 = document.getElementById('q15f4').value || "nan"; var q15f5 = document.getElementById('q15f5').value || "nan"; var q15f6 = document.getElementById('q15f6').value || "nan"; var q15f7 = document.getElementById('q15f7').value || "nan";
    var q15g1 = document.getElementById('q15g1').value || "nan"; var q15g2 = document.getElementById('q15g2').value || "nan"; var q15g3 = document.getElementById('q15g3').value || "nan"; var q15g4 = document.getElementById('q15g4').value || "nan"; var q15g5 = document.getElementById('q15g5').value || "nan"; var q15g6 = document.getElementById('q15g6').value || "nan"; var q15g7 = document.getElementById('q15g7').value || "nan";
    var q15h1 = document.getElementById('q15h1').value || "nan"; var q15h2 = document.getElementById('q15h2').value || "nan"; var q15h3 = document.getElementById('q15h3').value || "nan"; var q15h4 = document.getElementById('q15h4').value || "nan"; var q15h5 = document.getElementById('q15h5').value || "nan"; var q15h6 = document.getElementById('q15h6').value || "nan"; var q15h7 = document.getElementById('q15h7').value || "nan";
    var q15i1 = document.getElementById('q15i1').value || "nan"; var q15i2 = document.getElementById('q15i2').value || "nan"; var q15i3 = document.getElementById('q15i3').value || "nan"; var q15i4 = document.getElementById('q15i4').value || "nan"; var q15i5 = document.getElementById('q15i5').value || "nan"; var q15i6 = document.getElementById('q15i6').value || "nan"; var q15i7 = document.getElementById('q15i7').value || "nan";
    var q15j1 = document.getElementById('q15j1').value || "nan"; var q15j2 = document.getElementById('q15j2').value || "nan"; var q15j3 = document.getElementById('q15j3').value || "nan"; var q15j4 = document.getElementById('q15j4').value || "nan"; var q15j5 = document.getElementById('q15j5').value || "nan"; var q15j6 = document.getElementById('q15j6').value || "nan"; var q15j7 = document.getElementById('q15j7').value || "nan";
    var q15k1 = document.getElementById('q15k1').value || "nan"; var q15k2 = document.getElementById('q15k2').value || "nan"; var q15k3 = document.getElementById('q15k3').value || "nan"; var q15k4 = document.getElementById('q15k4').value || "nan"; var q15k5 = document.getElementById('q15k5').value || "nan"; var q15k6 = document.getElementById('q15k6').value || "nan"; var q15k7 = document.getElementById('q15k7').value || "nan";
    var q15l1 = document.getElementById('q15l1').value || "nan"; var q15l2 = document.getElementById('q15l2').value || "nan"; var q15l3 = document.getElementById('q15l3').value || "nan"; var q15l4 = document.getElementById('q15l4').value || "nan"; var q15l5 = document.getElementById('q15l5').value || "nan"; var q15l6 = document.getElementById('q15l6').value || "nan"; var q15l7 = document.getElementById('q15l7').value || "nan";
   
    var q15 = [ //stores all the variables in the array
      q15a1, q15a2, q15a3, q15a4, q15a5, q15a6, q15a7,
      q15b1, q15b2, q15b3, q15b4, q15b5, q15b6, q15b7,
      q15c1, q15c2, q15c3, q15c4, q15c5, q15c6, q15c7,
      q15d1, q15d2, q15d3, q15d4, q15d5, q15d6, q15d7,
      q15e1, q15e2, q15e3, q15e4, q15e5, q15e6, q15e7,
      q15f1, q15f2, q15f3, q15f4, q15f5, q15f6, q15f7,
      q15g1, q15g2, q15g3, q15g4, q15g5, q15g6, q15g7,
      q15h1, q15h2, q15h3, q15h4, q15h5, q15h6, q15h7,
      q15i1, q15i2, q15i3, q15i4, q15i5, q15i6, q15i7,
      q15j1, q15j2, q15j3, q15j4, q15j5, q15j6, q15j7,
      q15k1, q15k2, q15k3, q15k4, q15k5, q15k6, q15k7,
      q15l1, q15l2, q15l3, q15l4, q15l5, q15l6, q15l7
    ].join(', ');
  
    var q16 = document.getElementById('q16').value || "nan";
  
  
  
    function logOtherInputHandling(questionId, questionValue, otherInputValue) { //function to handle other inputs replace the value of the dropdown selection value other with the text input
      
      console.log(`Before if statement: ${questionId} =`, questionValue, `\n${questionId}other =`, otherInputValue);
      if (questionValue === 'other' && otherInputValue !== '') {
        questionValue = otherInputValue;
      }
      console.log(`After if statement: ${questionId} =`, questionValue);
  
      return questionValue;
    }
    
    q2 = logOtherInputHandling('q2', q2, q2other);
    q4 = logOtherInputHandling('q4', q4, q4other);
    q5 = logOtherInputHandling('q5', q5, q5other);
    q6 = logOtherInputHandling('q6', q6, q6other);
    q7 = logOtherInputHandling('q7', q7, q7other);
    q8 = logOtherInputHandling('q8', q8, q8other);
    q9 = logOtherInputHandling('q9', q9, q9other);
  
  
  
  // console.log("Before if statement: q2 =", q2, "\nq2other =", q2other);
  //   if (q2 == 'other') {
  //     q2 = q2other;
  //   }
  // console.log("After if statement: q2 =", q2);
   
    var formData = {
      q1: q1,
      q2: q2,
      q3: q3,
      q4: q4,
      q5: q5,
      q6: q6,
      q7: q7,
      q8: q8,
      q9: q9,
      q10: q10,
      
  
      q11: q11,
      q12: q12,
      q13: q13,
      q14: q14,
      q15: q15,
      q16: q16,
     
    };

    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(function(response) {
      if (response.ok) {
        alert("Form submitted successfully");
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(function(error) {
      console.error(error);
      alert("Form submission failed");
    });
  
    //  alert(JSON.stringify(formData, null, 2));
    //   console.log(formData);
    
    //   // Convert formData to JSON string
    //   var jsonData = JSON.stringify(formData, null, 1);
    
    //   // Create a Blob with the JSON data and specify the MIME type as 'application/json'
    //   var blob = new Blob([jsonData], { type: 'application/json' });
    
    //   // Create an anchor element to add the download attribute
    //   var downloadLink = document.createElement('a');
    //   downloadLink.download = 'formData.json'; // Set the file name
    //   downloadLink.href = URL.createObjectURL(blob); // Create a URL for the Blob
    //   downloadLink.style.display = 'none'; // Hide the link element
    
    //   // Add the download link to the DOM, click it, and remove it afterward
    //   document.body.appendChild(downloadLink);
    //   downloadLink.click();
    //   document.body.removeChild(downloadLink);
  }
  
  function handleOtherOption(selectId, otherInputId) {
    var selectElement = document.getElementById(selectId);
    var otherInputElement = document.getElementById(otherInputId).parentNode;
  
    selectElement.addEventListener("change", function () {
      if (selectElement.value == "other") {
        otherInputElement.style.display = "flex";
        document.getElementById(otherInputId).setAttribute("name", otherInputId);
      } else {
        otherInputElement.style.display = "none";
        document.getElementById(otherInputId).removeAttribute("name");
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    q13a2Value = "nan";
    if (document.getElementById('q13a1').checked == true){
      q13a2Value = document.getElementById('q13a2Value').value;
    }
    q13b2Value = "nan";
    if (document.getElementById('q13b1').checked == true){
      q13b2Value = document.getElementById('q13b2Value').value;
    }
    q13c2Value = "nan";
    if (document.getElementById('q13c1').checked == true){
      q13c2Value = document.getElementById('q13c2Value').value;
    }
    q13d2Value = "nan";
    if (document.getElementById('q13d1').checked == true){
      q13d2Value = document.getElementById('q13d2Value').value;
    }
    q13e2Value = "nan";
    if (document.getElementById('q13e1').checked == true){
      q13e2Value = document.getElementById('q13e2Value').value;
    }
    q13f2Value = "nan";
    if (document.getElementById('q13f1').checked == true){
      q13f2Value = document.getElementById('q13f2Value').value;
    }
    q13g2Value = "nan";
    if (document.getElementById('q13g1').checked == true){
      q13g2Value = document.getElementById('q13g2Value').value;
    }
    q13h2Value = "nan";
    if (document.getElementById('q13h1').checked == true){
      q13h2Value = document.getElementById('q13h2Value').value;
    }
    q13i2Value = "nan";
    if (document.getElementById('q13i1').checked == true){
      q13i2Value = document.getElementById('q13i2Value').value;
    }
    q13j2Value = "nan";
    if (document.getElementById('q13j1').checked == true){
      q13j2Value = document.getElementById('q13j2Value').value;
    }
   
    handleOtherOption("q2", "q2other-input");
    handleOtherOption("q4", "q4other-input");
    handleOtherOption("q5", "q5other-input");
    handleOtherOption("q6", "q6other-input");
    handleOtherOption("q7", "q7other-input");
    handleOtherOption("q8", "q8other-input");
    handleOtherOption("q9", "q9other-input");
  });
  
  // Get all the div elements in the survey.html file
  const divs = document.querySelectorAll('div');
  
  // Check if the number of divs is even or odd
  if (divs.length % 2 === 0) {
    console.log('There is an even number of divs in the survey.html file.');
  } else {
    console.log('There is an odd number of divs in the survey.html file.');
  }

// display error message







function showError(errorElement, errorMessage){
  document.querySelector("."+errorElement).classList.add("display-error");
  document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError(errorElement){
  document.querySelector("."+errorElement).classList.remove("display-error");
}

let form = document.forms['survey'];
let inputq14a = ['q14a1', 'q14a2', 'q14a3', 'q14a4', 'q14a5', 'q14a6', 'q14a7'];
let inputq14b = ['q14b1', 'q14b2', 'q14b3', 'q14b4', 'q14b5', 'q14b6', 'q14b7'];
let inputq14c = ['q14c1', 'q14c2', 'q14c3', 'q14c4', 'q14c5', 'q14c6', 'q14c7'];
let inputq14d = ['q14d1', 'q14d2', 'q14d3', 'q14d4', 'q14d5', 'q14d6', 'q14d7'];
let inputq14e = ['q14e1', 'q14e2', 'q14e3', 'q14e4', 'q14e5', 'q14e6', 'q14e7'];
let inputq14f = ['q14f1', 'q14f2', 'q14f3', 'q14f4', 'q14f5', 'q14f6', 'q14f7'];
let inputq14g = ['q14g1', 'q14g2', 'q14g3', 'q14g4', 'q14g5', 'q14g6', 'q14g7'];
let inputq14h = ['q14h1', 'q14h2', 'q14h3', 'q14h4', 'q14h5', 'q14h6', 'q14h7'];
let inputq14i = ['q14i1', 'q14i2', 'q14i3', 'q14i4', 'q14i5', 'q14i6', 'q14i7'];
let inputq14j = ['q14j1', 'q14j2', 'q14j3', 'q14j4', 'q14j5', 'q14j6', 'q14j7'];
let inputq14k = ['q14k1', 'q14k2', 'q14k3', 'q14k4', 'q14k5', 'q14k6', 'q14k7'];
let inputq14l = ['q14l1', 'q14l2', 'q14l3', 'q14l4', 'q14l5', 'q14l6', 'q14l7'];
let inputq15a = ['q15a1', 'q15a2', 'q15a3', 'q15a4', 'q15a5', 'q15a6', 'q15a7'];
let inputq15b = ['q15b1', 'q15b2', 'q15b3', 'q15b4', 'q15b5', 'q15b6', 'q15b7'];
let inputq15c = ['q15c1', 'q15c2', 'q15c3', 'q15c4', 'q15c5', 'q15c6', 'q15c7'];
let inputq15d = ['q15d1', 'q15d2', 'q15d3', 'q15d4', 'q15d5', 'q15d6', 'q15d7'];
let inputq15e = ['q15e1', 'q15e2', 'q15e3', 'q15e4', 'q15e5', 'q15e6', 'q15e7'];
let inputq15f = ['q15f1', 'q15f2', 'q15f3', 'q15f4', 'q15f5', 'q15f6', 'q15f7'];
let inputq15g = ['q15g1', 'q15g2', 'q15g3', 'q15g4', 'q15g5', 'q15g6', 'q15g7'];
let inputq15h = ['q15h1', 'q15h2', 'q15h3', 'q15h4', 'q15h5', 'q15h6', 'q15h7'];
let inputq15i = ['q15i1', 'q15i2', 'q15i3', 'q15i4', 'q15i5', 'q15i6', 'q15i7'];
let inputq15j = ['q15j1', 'q15j2', 'q15j3', 'q15j4', 'q15j5', 'q15j6', 'q15j7'];
let inputq15k = ['q15k1', 'q15k2', 'q15k3', 'q15k4', 'q15k5', 'q15k6', 'q15k7'];
let inputq15l = ['q15l1', 'q15l2', 'q15l3', 'q15l4', 'q15l5', 'q15l6', 'q15l7'];

for (let i = 0; i < inputq14a.length; i++) {
  form[inputq14a[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14a.length; j++) {
      if (form[inputq14a[j]].value !== "" && !regex.test(form[inputq14a[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14a-error", "Invalid Input, please ensure all fields in Bill 01 are only numbers");
    } else {
      clearError("q14a-error");
    }
  });
}

for (let i = 0; i < inputq14b.length; i++) {
  form[inputq14b[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14b.length; j++) {
      if (form[inputq14b[j]].value !== "" && !regex.test(form[inputq14b[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14b-error", "Invalid Input, please ensure all fields in Bill 02 are only numbers");
    } else {
      clearError("q14b-error");
    }
  });
}

for (let i = 0; i < inputq14c.length; i++) {
  form[inputq14c[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14c.length; j++) {
      if (form[inputq14c[j]].value !== "" && !regex.test(form[inputq14c[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14c-error", "Invalid Input, please ensure all fields in Bill 03 are only numbers");
    } else {
      clearError("q14c-error");
    }
  });
}

for (let i = 0; i < inputq14d.length; i++) {
  form[inputq14d[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14d.length; j++) {
      if (form[inputq14d[j]].value !== "" && !regex.test(form[inputq14d[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14d-error", "Invalid Input, please ensure all fields in Bill 04 are only numbers");
    } else {
      clearError("q14d-error");
    }
  });
}

for (let i = 0; i < inputq14e.length; i++) {
  form[inputq14e[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14e.length; j++) {
      if (form[inputq14e[j]].value !== "" && !regex.test(form[inputq14e[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14e-error", "Invalid Input, please ensure all fields in Bill 05 are only numbers");
    } else {
      clearError("q14e-error");
    }
  });
}

for (let i = 0; i < inputq14f.length; i++) {
  form[inputq14f[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14f.length; j++) {
      if (form[inputq14f[j]].value !== "" && !regex.test(form[inputq14f[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14f-error", "Invalid Input, please ensure all fields in Bill 06 are only numbers");
    } else {
      clearError("q14f-error");
    }
  });
}

for (let i = 0; i < inputq14g.length; i++) {
  form[inputq14g[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14g.length; j++) {
      if (form[inputq14g[j]].value !== "" && !regex.test(form[inputq14g[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14g-error", "Invalid Input, please ensure all fields in Bill 07 are only numbers");
    } else {
      clearError("q14g-error");
    }
  });
}

for (let i = 0; i < inputq14h.length; i++) {
  form[inputq14h[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14h.length; j++) {
      if (form[inputq14h[j]].value !== "" && !regex.test(form[inputq14h[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14h-error", "Invalid Input, please ensure all fields in Bill 08 are only numbers");
    } else {
      clearError("q14h-error");
    }
  });
}

for (let i = 0; i < inputq14i.length; i++) {
  form[inputq14i[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14i.length; j++) {
      if (form[inputq14i[j]].value !== "" && !regex.test(form[inputq14i[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14i-error", "Invalid Input, please ensure all fields in Bill 09 are only numbers");
    } else {
      clearError("q14i-error");
    }
  });
}

for (let i = 0; i < inputq14j.length; i++) {
  form[inputq14j[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14j.length; j++) {
      if (form[inputq14j[j]].value !== "" && !regex.test(form[inputq14j[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14j-error", "Invalid Input, please ensure all fields in Bill 10 are only numbers");
    } else {
      clearError("q14j-error");
    }
  });
}

for (let i = 0; i < inputq14k.length; i++) {
  form[inputq14k[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14k.length; j++) {
      if (form[inputq14k[j]].value !== "" && !regex.test(form[inputq14k[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14k-error", "Invalid Input, please ensure all fields in Bill 11 are only numbers");
    } else {
      clearError("q14k-error");
    }
  });
}

for (let i = 0; i < inputq14l.length; i++) {
  form[inputq14l[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq14l.length; j++) {
      if (form[inputq14l[j]].value !== "" && !regex.test(form[inputq14l[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q14l-error", "Invalid Input, please ensure all fields in Bill 12 are only numbers");
    } else {
      clearError("q14l-error");
    }
  });
}

for (let i = 0; i < inputq15a.length; i++) {
  form[inputq15a[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15a.length; j++) {
      if (form[inputq15a[j]].value !== "" && !regex.test(form[inputq15a[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15a-error", "Invalid Input, please ensure all fields in Bill 01 are only numbers");
    } else {
      clearError("q15a-error");
    }
  });
}

for (let i = 0; i < inputq15b.length; i++) {
  form[inputq15b[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15b.length; j++) {
      if (form[inputq15b[j]].value !== "" && !regex.test(form[inputq15b[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15b-error", "Invalid Input, please ensure all fields in Bill 02 are only numbers");
    } else {
      clearError("q15b-error");
    }
  });
}

for (let i = 0; i < inputq15c.length; i++) {
  form[inputq15c[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15c.length; j++) {
      if (form[inputq15c[j]].value !== "" && !regex.test(form[inputq15c[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15c-error", "Invalid Input, please ensure all fields in Bill 03 are only numbers");
    } else {
      clearError("q15c-error");
    }
  });
}

for (let i = 0; i < inputq15d.length; i++) {
  form[inputq15d[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15d.length; j++) {
      if (form[inputq15d[j]].value !== "" && !regex.test(form[inputq15d[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15d-error", "Invalid Input, please ensure all fields in Bill 04 are only numbers");
    } else {
      clearError("q15d-error");
    }
  });
}

for (let i = 0; i < inputq15e.length; i++) {
  form[inputq15e[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15e.length; j++) {
      if (form[inputq15e[j]].value !== "" && !regex.test(form[inputq15e[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15e-error", "Invalid Input, please ensure all fields in Bill 05 are only numbers");
    } else {
      clearError("q15e-error");
    }
  });
}

for (let i = 0; i < inputq15f.length; i++) {
  form[inputq15f[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15f.length; j++) {
      if (form[inputq15f[j]].value !== "" && !regex.test(form[inputq15f[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15f-error", "Invalid Input, please ensure all fields in Bill 06 are only numbers");
    } else {
      clearError("q15f-error");
    }
  });
}

for (let i = 0; i < inputq15g.length; i++) {
  form[inputq15g[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15g.length; j++) {
      if (form[inputq15g[j]].value !== "" && !regex.test(form[inputq15g[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15g-error", "Invalid Input, please ensure all fields in Bill 07 are only numbers");
    } else {
      clearError("q15g-error");
    }
  });
}

for (let i = 0; i < inputq15h.length; i++) {
  form[inputq15h[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15h.length; j++) {
      if (form[inputq15h[j]].value !== "" && !regex.test(form[inputq15h[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15h-error", "Invalid Input, please ensure all fields in Bill 08 are only numbers");
    } else {
      clearError("q15h-error");
    }
  });
}

for (let i = 0; i < inputq15i.length; i++) {
  form[inputq15i[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15i.length; j++) {
      if (form[inputq15i[j]].value !== "" && !regex.test(form[inputq15i[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15i-error", "Invalid Input, please ensure all fields in Bill 09 are only numbers");
    } else {
      clearError("q15i-error");
    }
  });
}

for (let i = 0; i < inputq15j.length; i++) {
  form[inputq15j[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15j.length; j++) {
      if (form[inputq15j[j]].value !== "" && !regex.test(form[inputq15j[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15j-error", "Invalid Input, please ensure all fields in Bill 10 are only numbers");
    } else {
      clearError("q15j-error");
    }
  });
}

for (let i = 0; i < inputq15k.length; i++) {
  form[inputq15k[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15k.length; j++) {
      if (form[inputq15k[j]].value !== "" && !regex.test(form[inputq15k[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15k-error", "Invalid Input, please ensure all fields in Bill 11 are only numbers");
    } else {
      clearError("q15k-error");
    }
  });
}

for (let i = 0; i < inputq15l.length; i++) {
  form[inputq15l[i]].addEventListener('input', function(event) {
    const regex = /^[0-9]*$/;
    let hasError = false;
    for (let j = 0; j < inputq15l.length; j++) {
      if (form[inputq15l[j]].value !== "" && !regex.test(form[inputq15l[j]].value)) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      showError("q15l-error", "Invalid Input, please ensure all fields in Bill 12 are only numbers");
    } else {
      clearError("q15l-error");
    }
  });
}





// for (let i = 0; i < inputq14j.length; i++) {
//   form[inputq14j[i]].addEventListener('input', function(event) {
//     const regex = /^[0-9]*$/;
//     let hasError = false;
//     for (let j = 0; j < inputq14j.length; j++) {
//       if (form[inputq14j[j]].value !== "" && !regex.test(form[inputq14j[j]].value)) {
//         hasError = true;
//         break;
//       }
//     }
//     if (hasError) {
//       showError("q14j-error", "Please enter numbers only");
//     } else {
//       clearError("q14j-error");
//     }
//   });
// }


// form.onsubmit = function(event){
//   document.querySelector(".success").classList.add("display-success");
//   document.querySelector(".success").innerHTML = "You have successfully signed up!";
// }