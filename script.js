function generateGrade() {
    const marksInput = document.getElementById('marksInput').value;
    let grade;
  
    if (marksInput > 79) {
      grade = 'A';
    } else if (marksInput >= 60 && marksInput <= 79) {
        grade = 'B';
      } else if (marksInput >= 50 && marksInput <= 59) {
        grade = 'C';
      } else if (marksInput >= 40 && marksInput <= 49) {
        grade = 'D';
      } else if (marksInput < 40) {
        grade = 'E';
      }
    }
  
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = `The student's grade is: ${grade}`;
  
  const generateButton = document.getElementById('generateButton');
  generateButton.addEventListener('click', generateGrade);
  