$("#sendit").click(function () {
    //after clicking the button it takes in the value for each field
    let assignments = $("#assignments").val();
    let groupProjects = $("#groupProjects").val();
    let quizzes = $("#quizzes").val();
    let midExam = $("#midExam").val();
    let finExam = $("#finExam").val();
    let intex = $("#intex").val()

    //the turns it into an integer and calculates the weight of it
    let iassignments = ((parseInt(assignments)) * .5);
    let igroupProjects = ((parseInt(groupProjects)) * .1);
    let iquizzes = ((parseInt(quizzes)) * .1);
    let imidExam = ((parseInt(midExam)) * .1);
    let ifinExam = ((parseInt(finExam)) * .1);
    let iIntex = ((parseInt(intex)) * .1);

    //here is the resulting grade as a percentage
    let results = iassignments + igroupProjects + iquizzes + imidExam + ifinExam + iIntex;

    //from the resulting grade, it determines what letter grade that is
    let lettergrade = '';
    if (results < 60) {
        lettergrade = 'E';
    } else if (results < 64) {
        lettergrade = 'D-';
    } else if (results < 67) {
        lettergrade = 'D';
    } else if (results < 70) {
        lettergrade = 'D+';
    } else if (results < 74) {
        lettergrade = 'C-';
    } else if (results < 77) {
        lettergrade = 'C';
    } else if (results < 80) {
        lettergrade = 'C+';
    } else if (results < 84) {
        lettergrade = 'B-';
    } else if (results < 87) {
        lettergrade = 'B';
    } else if (results < 90) {
        lettergrade = 'B+';
    } else if (results < 94) {
        lettergrade = 'A-';
    } else {
        lettergrade = 'A';
    }

    //and returns an output in an alert on the html page within the form
    alert("Your percentage is: " + results + "%    Your grade is: " + lettergrade);
});

