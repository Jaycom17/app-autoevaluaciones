import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

import './styles/BarsGraphic.css';

const BarsGraphic = ({ data, title }) => {
    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);

    const info = {
        labels: labels,
        datasets: [
            {
                label: title,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(80,80,80,1)',
                borderWidth: 2,
                data: values,
            },
        ],
        };

    return (
        <div id='graphic'>
            <Bar
                data={info}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                }}
            />
        </div>
    );
};

export default BarsGraphic;
