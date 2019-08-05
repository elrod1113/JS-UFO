// from data.js
var tableData = data;

//Create Table
var tableBody = d3.select("tbody");
function buildTable(data){
    tableBody.html("")
    data.forEach(function(sightings) {
        console.log(sightings);
        var row = tableBody.append("tr");
        Object.entries(sightings).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
          });        
         });
}

//Click to start search
buildTable(tableData);
var button = d3.select("#filter-btn");
button.on("click", function() {

    //Get HTML
    var inputElement = d3.select("#datetime");

    //Value of Element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    var filteredData = tableData.filter(row=>row.datetime === inputValue);

    console.log(filteredData);
    buildTable(filteredData);
    });


