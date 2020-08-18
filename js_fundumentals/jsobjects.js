let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
function printArr(){
    var output = ' ';
    for(var i=0; i<students.length; i++){
        output += "Name: " + students[i].name + ", Cohort:: " + students[i].cohort + "</br>";
    }
    return output;
}


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function printLen(){
    var emp = ' ';
    for(var i in users.employees){
        for(var j=0; j<users.employees.length; j++){
            emp += users.employees[i].first_name+", "+ users.employees[i].last_name + "-"+ j+ "</br>";
        }
    }
    var man = ' ';
    for(var a in users.managers){
        for(var b=0; b<users.managers.length; b++){
            emp += users.managers[a].first_name+", "+ users.managers[a].last_name + "-"+ b+ "</br>";
        }
    }
}