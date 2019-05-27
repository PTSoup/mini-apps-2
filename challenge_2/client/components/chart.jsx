import React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ["2017-09-01", "2017-09-02", "2017-09-03", "2017-09-04", "2017-09-05", "2017-09-06", "2017-09-07", "2017-09-08", "2017-09-09", "2017-09-10", "2017-09-11", "2017-09-12", "2017-09-13", "2017-09-14", "2017-09-15", "2017-09-16", "2017-09-17", "2017-09-18", "2017-09-19", "2017-09-20", "2017-09-21", "2017-09-22", "2017-09-23", "2017-09-24", "2017-09-25", "2017-09-26", "2017-09-27", "2017-09-28", "2017-09-29", "2017-09-30"],
                datasets: [{
                    label: 'Price of BTC in USD',
                    data: [4950.7238, 4643.975, 4631.695, 4319.7213, 4422.1213, 4626.72, 4638.0975, 4317.5375, 4291.88, 4191.175, 4188.845, 4148.2675, 3874.2588, 3226.4125, 3686.9, 3678.7375, 3672.5663, 4067.0775, 3896.9988, 3858.0888, 3612.6813, 3603.3088, 3777.2938, 3662.12, 3927.4988, 3895.5125, 4208.5613, 4185.2925, 4164.1038, 4353.0475],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
        }
    }

    

    render() {
        const options = {
            maintainAspectRatio: true,
            scales: {
                xAxes: [{
                    // type: 'time',
                    distribution: 'series',
                    // ticks: {
                    //     source: this.state.data,
                    //     autoSkip: true
                    // }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Closing price ($)'
                    }
                }]
            }
            // tooltips: {
            // 	intersect: false,
            // 	mode: 'index',
            // 	callbacks: {
            // 		label: function(tooltipItem, myData) {
            // 			var label = myData.datasets[tooltipItem.datasetIndex].label || '';
            // 			if (label) {
            // 				label += ': ';
            // 			}
            // 			label += parseFloat(tooltipItem.value).toFixed(2);
            // 			return label;
            // 		}
            // 	}
            // }
        }

        return (
            <div>
                <Line
                data={ this.state.data }
                // width={auto}
                // height={auto}
                options={ options }
                />
            </div>
            
        )
    }
}

export default Chart;

