var person = {
    firstName: 1,
    lastName: 2,
    phone: 3,
    mail: 4,
    precision: 5
};

function data() {
    person.firstName = document.getElementsByTagName("input")[0].value;
    person.lastName = document.getElementsByTagName("input")[1].value;
    person.phone = document.getElementsByTagName("input")[2].value;
    person.mail = document.getElementsByTagName("input")[3].value;
    person.precision = document.getElementsByTagName("textarea")[0].value;
    var infoJSON = JSON.stringify(person);
    var bpdata = new XMLHttpRequest();
    bpdata.open("POST", "python.py", true);
    bpdata.send(infoJSON);
    alert("struggling");
}