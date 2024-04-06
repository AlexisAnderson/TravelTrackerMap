var arr;
arr = [];
arr[0] = [];
arr[1] = [];
arr[2] = [];

function TravelLog() {
    let name = document.getElementById("Name").value;
    let country = document.getElementById("Country").value;
    let Input = country.toLowerCase();
    let Name = name.toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == Name) {
            arr[i].push(Input);
            window.alert("Thank you "+arr[i][0]+" for your country submission of "+arr[i][1]);
            break;
        }
        if (arr[i][0] != Name && arr[i].length == 0) {
            arr[i][0] = Name
            arr[i].push(Input);
            window.alert("Thank you "+arr[i][0]+" for your country submission of "+arr[i][1]);
            break;
        } else {
            continue;
        }
    }
}