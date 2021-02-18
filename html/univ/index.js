/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart() {
    console.log({ seriesOptions })
    console.log({ dynamicCat })
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Number of Universities by State'
        },
        xAxis: {
            categories: dynamicCat,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: seriesOptions
    });
}

function success(data) {
    seriesOptions = [{
        "name": "Universities",
        "data": data.map(function (d) {
            return d.data[0]
        })
    }]
    dynamicCat = data.map(function (d) {
        return d.name
    })
    createChart();
}

$.getJSON(
    'http://localhost:8081/chartUniversities',
    success
);