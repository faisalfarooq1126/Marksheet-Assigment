const subjects = ["English", "Math", "Physics", "Chemistry", "Computer"];
let marks = [];
let total = 0;

for(let i = 0; i < subjects.length; i++) {
    let mark = +prompt(`Enter marks for ${subjects[i]} (out of 100):`);
    mark = (isNaN(mark) || mark < 0 || mark > 100) ? 0 : mark;
    if(mark === 0) alert(`Invalid input for ${subjects[i]}. Setting marks to 0.`);
    marks.push(mark);
    total += mark;
}

let percentage = (total / (subjects.length * 100)) * 100;

function formatPercent(p) {
    let s = p.toFixed(2);
    s = s.replace(/\.?0+$/, "");
    return s + "%";
}

let grade = 
    percentage >= 90 && percentage <= 100 ? "A+" :
    percentage >= 80 && percentage < 90 ? "A" :
    percentage >= 70 && percentage < 80 ? "B" :
    percentage >= 60 && percentage < 70 ? "C" :
    percentage >= 50 && percentage < 60 ? "D" :
    percentage >= 0 && percentage < 50 ? "Fail" :
    "Invalid Value";

for(let i = 0; i < subjects.length; i++) {
    document.write(`<p>${subjects[i]}: ${marks[i]}</p>`);
}
document.write(`<p><b>Total Marks: ${total}</b></p>`);
document.write(`<p><b>Percentage: ${formatPercent(percentage)}</b></p>`);
document.write(`<p><b>Grade: ${grade}</b></p>`);
