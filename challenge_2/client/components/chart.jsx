import React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component {
    render() {
        //These options are needed to populate the chart
        const options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series',
                    ticks: {
                        source: this.props.chartData.labels,
                        autoSkip: true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Closing price ($)'
                    }
                }]
            },
            tooltips: {
                intersect: false,
                mode: 'index',
                callbacks: {
                    label: function (tooltipItem, myData) {
                        var label = myData.datasets[tooltipItem.datasetIndex].label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += parseFloat(tooltipItem.value).toFixed(2);
                        return label;
                    }
                }
            }
        }

        return (
            <div id="chart">
                <Line
                data={ this.props.chartData }
                width={1000}
                height={300}
                options={ options }
                />
            </div>
        )
    }
}

export default Chart;

