// create two students
var student1 = {
    firstName: 'Terry',
    lastName: 'Sophia',
    age: 20,
    location: 'New York'
};
var student2 = {
    firstName: 'Bella',
    lastName: 'TheCat',
    age: 22,
    location: 'Los Angeles'
};
// create an array named studentsList
var studentsList = [student1, student2];
// Render table using Vanilla JavaScript
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "pink";
table.appendChild(tbody);
// append a new row to the table
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
