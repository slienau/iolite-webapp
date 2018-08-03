export const lineChartOptions = {
    responsive: true,
    title: {
        display: false,
        fontSize: 25
    },
    legend: {
        display: false,
        position: 'top'
    },
    zoom: {
        enabled: true,
        drag: true,
        mode: 'x',
        limits: {
            max: 10,
            min: 0.5
        }
    },
    scales: {
        xAxes: [{
            type: 'time',
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Date'
            },
            ticks: {
                major: {
                    fontStyle: 'bold',
                    fontColor: 'grey'
                }
            },
            time: {
                displayFormats: {
                    quarter: 'MMM YYYY'
                },
                min: null,
                max: null
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Power Consumption'
            },
            ticks: {
                beginAtZero: true
            }
        }]
    },
    elements: {
        line: {
            tension: 0, // disables bezier curves
        }
    },
    animation: {
        duration: 0, // general animation time
    },
    hover: {
        animationDuration: 0, // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
}