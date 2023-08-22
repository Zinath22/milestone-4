function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const assignment1Marks = 60;
const assignment2Marks = 53;
const assignment3Mark = 57;
var myAverage =getAverage(assignment1Marks, assignment2Marks, assignment3Mark);
console.log('my average so far:', myAverage);
