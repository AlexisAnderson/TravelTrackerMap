var arr;
arr = [];
arr[0] = [];
arr[1] = [];
arr[2] = [];

let Tylogging = TravelLog("ty", "USA");
let Allogging = TravelLog("alexis", "UK");
let Kenlogging = TravelLog("kenny", "Canada");
let Tylogging2 = TravelLog("Ty", "UK");
let Allogging2 = TravelLog("Alexis", "Maldives");
let kenlogging2 = TravelLog("Kenny", "France");

getInfo();

function getInfo() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

function TravelLog(name, input) {
    let Input = input.toLowerCase();
    let Name = name.toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == Name) {
            arr[i].push(Input);
            break;
        }
        if (arr[i][0] != Name && arr[i].length == 0) {
            arr[i][0] = Name
            arr[i].push(Input);
            break;
        } else {
            continue;
        }
    }
}