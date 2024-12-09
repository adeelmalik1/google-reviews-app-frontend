import React from 'react'
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const SentimentsChart = () => {
    const { review } = useSelector((state) => state.review);
    const sentimentCounts = review?.data?.reviews.reduce(
        (acc, review) => {
            acc[review.sentiment]++;
            return acc;
        },
        { positive: 0, negative: 0, neutral: 0 }
    ) ?? [];

    const data = {
        labels: ["Positive", "Negative", "Neutral"],
        datasets: [
            {
                label: "Sentiment Count",
                data: [
                    sentimentCounts.positive,
                    sentimentCounts.negative,
                    sentimentCounts.neutral,
                ],
                backgroundColor: [
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Sentiment Analysis",
            },
        },
    };

    return <Bar data={data} options={options} />;
}

export default SentimentsChart
