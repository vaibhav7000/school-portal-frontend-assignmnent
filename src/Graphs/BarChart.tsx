import {Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, type ChartData, type ChartOptions} from "chart.js";
import { Bar } from "react-chartjs-2";

interface BarChartProps {
    data: ChartData<"bar", (number | number[] | null)[], string>,
    options?: ChartOptions<"bar">
}

const CustomBarChart = (props: BarChartProps) => {
    const {data, options} = props;

    Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    )
}



export default CustomBarChart;






/*

    ChartJS-2 inherits the code of chart-js and provide component based architecture that under the hood works with native chartjs elements

*/