Highcharts.chart('container', {

    title: {
        text: '日韓越三國來台旅客人數統計圖',
        align: 'left'
    },

    subtitle: {
        text: '年度：2015-2024',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '旅客人次'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: '年度：2015-2024'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2015
        }
    },

    series: [{
    name: '日本 (Japan)',
    data: [
        1629193, 1896456, 1895546, 1966303, 2162426, 
        268798, 9910, 87133, 926140, 1318372
    ],
}, {
    name: '韓國 (Korea)',
    data: [
        662670, 887412, 1055207, 1021530, 1245144, 
        179190, 3165, 51480, 745885, 1010035
    ],
}, {
    name: '越南 (Vietnam)',
    data: [
        143930, 194323, 380833, 490699, 404570, 
        110053, 24872, 135356, 382026, 370802
    ],
}],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});