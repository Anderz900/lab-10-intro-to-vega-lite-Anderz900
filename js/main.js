
document.querySelector(".select-control").addEventListener("change", updateBarChart);

function updateBarChart(){
  let column = document.querySelector(".select-control").value;
  let spec = {
    "title": "Coffee House Chains",
    "data" : {"url": "data/coffee-house-chains.csv"},
    "width": 500,
    "mark": "bar",
    "encoding":
    {
      "y":{"field":column,
            "type":"quantitative"},
      "x": {"field": "company", 
            "type": "nominal",
            "sort": "-y"}
    }
  };
  vegaEmbed('#chart-area', spec);
}

updateBarChart();