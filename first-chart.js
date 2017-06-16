// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawBasic);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.\

var toppingCounter = {
  tomato: 6,
  pepperoni: 7,
  shrimp: 1,
  pineapple: 6,
  peppers: 4
}

window.onload = function(){
  document.getElementById("pineapple").onclick=vote;
  document.getElementById("peppers").onclick=vote;
  document.getElementById("pepperoni").onclick=vote;
  document.getElementById("shrimp").onclick=vote;
  document.getElementById("tomato").onclick=vote;
}

function vote(topping) {
  console.log(this.id)
  toppingCounter[this.id] = toppingCounter[this.id] + 1
  drawBasic();
}

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'topping');
      data.addColumn('number', 'people who liked it');

      data.addRows([
        ['Tomato',toppingCounter.tomato],
        ['Pepperoni',toppingCounter.pepperoni],
        ['Shrimp',toppingCounter.shrimp],
        ['Pineapple',toppingCounter.pineapple],
        ['Peppers',toppingCounter.peppers]
      ]);

      var options = {
        title: 'Pizza Topping Popularity',
        hAxis: {
          title: 'Toppings',
        },
        vAxis: {
          title: 'People who liked it'
        }

      };
      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

        chart.draw(data, options);
  }
