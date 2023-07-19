Challenge 1: Student Grade Generator
This is a simple JavaScript application that prompts the user to input student marks and outputs the corresponding grade based on the following criteria:

A: Marks greater than 79
B: Marks between 60 and 79 (both inclusive)
C: Marks between 50 and 59 (both inclusive)
D: Marks between 40 and 49 (both inclusive)
E: Marks less than 40
How to Use
Open the index.html file in your web browser.
You will see an input field where you can enter the student's marks.
Enter the marks (a number between 0 and 100) and click on the "Generate Grade" button.
The application will display the corresponding grade based on the input marks below the button.
Code Explanation
The main logic of the application is implemented in script.js. It defines a function generateGrade() that calculates the grade based on the user's input. The input marks are read from the input field, and then using conditional statements, the appropriate grade is determined.

javascript
Copy code
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

  const outputDiv = document.getElementById('output');
  outputDiv.innerText = `The student's grade is: ${grade}`;
}

const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateGrade);
The generateGrade() function also updates the output area with the calculated grade using the DOM manipulation technique.

Styling
The CSS styles in style.css provide a simple and clean layout for the application. You can further customize the styles according to your preferences.

Feel free to explore, modify, and enhance this Student Grade Generator application to suit your needs! Happy coding!


