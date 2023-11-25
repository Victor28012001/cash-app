import React from 'react'

import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";



const labels = ["27th April", "28th April", "29th April", "30th April", "1st May", "2nd May"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "",
            backgroundColor: "#3592FF",
            borderColor: "#3592FF",
            data: [0, 30, 15, 22, 40, 38, 80],
            drawBorder: false,
            showLine: true
        }, {
            label: "",
            backgroundColor: "#FFBA35",
            borderColor: "#FFBA35",
            data: [0, 10, 5, 2, 20, 30, 45],
            drawBorder: false,
            showLine: true
        },

    ],

    options: {
        scales: {
            x: {
                grid: {
                    display: false,
                    maintainAspectRatio: false,
                }
            },
            y: {
                grid: {
                    display: false,
                    maintainAspectRatio: false,
                }
            }
        }
    }

};



const Graph = () => {
    return (
                <Line data={data} options={data.options} />
    )
}

export default Graph
