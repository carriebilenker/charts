// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawBasic);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'People who like it');
  data.addRows([
    ['Tomato', 6],
    ['Pepperoni', 7],
    ['Shrimp', 1],
    ['Pineapple', 6],
    ['Peppers', 4]
  ]);

  // Set chart options
  var options = {'title':'Pizza Topping Popularity',
                 'width':400,
                 'height':300,
                 'pieHole': 0.4};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
