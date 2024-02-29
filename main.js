function concatenate() {
    const inputElement = document.getElementById('num1');
    const gradesSpan = document.getElementById('Grades');
  
    if (gradesSpan.textContent !== "") {
        gradesSpan.textContent += ", " + inputElement.value;
    } else {
        gradesSpan.textContent = inputElement.value;
    }
  
    clearInput();
    calculateAverage();
    calculateResult();
  }
  
  function clearEntries() {
    const gradesSpan = document.getElementById('Grades');
    const averageSpan = document.getElementById('Average');
    const resultSpan = document.getElementById('Result');
  
    gradesSpan.textContent = "";
    averageSpan.textContent = "";
    resultSpan.textContent = "";
  }
  
  function clearInput() {
    const inputElement = document.getElementById('num1');
    inputElement.value = "";
  }
  
  function calculateAverage() {
    const gradesSpan = document.getElementById('Grades');
    const averageSpan = document.getElementById('Average');
  
    const gradesArray = gradesSpan.textContent.split(', ');
    let total = 0;
  
    for (let i = 0; i < gradesArray.length; i++) {
        total += parseInt(gradesArray[i]);
    }
  
    const average = total / gradesArray.length;
    averageSpan.textContent = average.toFixed(2);
  }
  
  function calculateResult() {
    const averageSpan = document.getElementById('Average');
    const resultSpan = document.getElementById('Result');
  
    const average = parseFloat(averageSpan.textContent);
  
    if (!isNaN(average)) {
        if (average >= 75) {
            resultSpan.textContent = "Passed";
        } else {
            resultSpan.textContent = "Failed";
        }
    }
  }