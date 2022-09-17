// var dataTable = [
//     {
//         show: "Game of Thrones",
//         seasons: 8,
//         episodes: 10,
//         duration: 60,
//         totalTime: 80.0,
//     },
//     {
//         show: "House of the Dragon",
//         seasons: 1,
//         episodes: 10,
//         duration: 60,
//         totalTime: 10.0,
//     },
//     {
//         show: "Better Call Saul",
//         seasons: 6,
//         episodes: 10,
//         duration: 45,
//         totalTime: 45.0,
//     },
// ];

// const submit = function (e) {
//     e.preventDefault();

//     document.getElementById("error").innerHTML = "";

//     const show = document.querySelector("#show"),
//         seasons = document.querySelector("#seasons"),
//         eps = document.querySelector("#eps"),
//         duration = document.querySelector("#duration");

//     const json = {
//         show: show.value,
//         seasons: seasons.value,
//         eps: eps.value,
//         duration: duration.value,
//     };
//     const body = JSON.stringify(json);

//     if (show.value === "" || seasons.value === "" || eps.value === "" || duration.value === "") {
//         document.getElementById("error").innerText = "Invalid form values";
//         return;
//     }

//     // clear the form on submit
//     document.getElementById("show").value = "";
//     document.getElementById("seasons").value = "";
//     document.getElementById("eps").value = "";
//     document.getElementById("duration").value = "";

//     fetch("/submit", {
//         method: "POST",
//         body,
//     }).then(function (response) {
//         res = response.json(); // read as JSON
//         const checkPromise = () => {
//             res.then((result) => {
//                 // on promise fulfillment, return the promise
//                 dataTable = result; // update the client's local copy
//                 handleResults(result);
//             }).catch((err) => {
//                 console.error("Error: " + err); // otherwise log an error
//             });
//         };
//         checkPromise();
//     });
//     return false;
// };

// const remove = function (entryToRemove) {
//     const json = dataTable[entryToRemove];
//     const body = JSON.stringify(json);

//     fetch("/remove", {
//         method: "POST",
//         body,
//     }).then(function (response) {
//         res = response.json(); // read as JSON
//         const checkPromise = () => {
//             res.then((result) => {
//                 // on promise fulfillment, return the promise
//                 dataTable = result; // update the client's local copy
//                 handleResults(result);
//             }).catch((err) => {
//                 console.error("Error: " + err); // otherwise log an error
//             });
//         };
//         checkPromise();
//     });

//     return false;
// };

// window.onload = function () {
//     const button = document.getElementById("submit");
//     button.onclick = submit;
//     handleResults(dataTable);
// };

// function handleResults(resultArr) {
//     let resultStr = "<table><tr><th>TV Show</th><th>Seasons</th><th>Episodes Per Season</th><th>Duration of an Episode (mins)</th><th>Time to Binge-Watch Full Show (hrs)</th><th></th></tr>";
//     let parsedJson;
//     for (let i = 0; i < resultArr.length; i++) {
//         resultStr += "<tr>";
//         parsedJson = resultArr[i];
//         Object.keys(parsedJson).forEach(
//             (item) => (resultStr += "<td>" + parsedJson[item] + "</td>")
//         );
//         resultStr += "<td><button onclick='remove(" + i + ")'>Remove Entry</button></td>";
//         resultStr += "</tr>";
//     }
//     resultStr += "</table>";
//     document.getElementById("results").innerHTML = resultStr;
// }