const subjectsList = ["English", "Math", "Physics", "Chemistry", "Computer"];
let studentScores = [];
let totalMarks = 0;

for (let i = 0; i < subjectsList.length; i++) {
    let score = +prompt(`Please input marks obtained in ${subjectsList[i]} (max 100):`);
    score = (isNaN(score) || score < 0 || score > 100) ? 0 : score;
    if(score === 0) alert(`Invalid input for ${subjectsList[i]}. Marks set to 0.`);
    studentScores.push(score);
    totalMarks += score;
}

let percentage = (totalMarks / (subjectsList.length * 100)) * 100;

function formatPercentage(p) {
    return Math.round(p) + "%";
}

let grade = 
    percentage >= 90 && percentage <= 100 ? "A+" :
    percentage >= 80 && percentage < 90 ? "A" :
    percentage >= 70 && percentage < 80 ? "B" :
    percentage >= 60 && percentage < 70 ? "C" :
    percentage >= 50 && percentage < 60 ? "D" :
    percentage >= 0 && percentage < 50 ? "Fail" :
    "Invalid Value";


let gradeColor =
    grade === "A+" || grade === "A" ? "green" :
    grade === "B" || grade === "C" ? "orange" :
    grade === "D" ? "blue" :
    grade === "Fail" ? "red" :
    "black";


let outputHTML = `<div>
    <table>
        <tr>
            <th>Subject</th>
            <th>Marks</th>
        </tr>
        ${subjectsList.map((sub, i) => `
        <tr>
            <td>${sub}</td>
            <td>${studentScores[i]}</td>
        </tr>`).join('')}
    </table>
    <p class="total">Total Marks: ${totalMarks}</p>
    <p class="percentage">Percentage: ${formatPercentage(percentage)}</p>
    <p class="grade" style="color:${gradeColor};">Grade: ${grade}</p>
</div>`;

document.getElementById("marksheet-output").innerHTML = outputHTML;
