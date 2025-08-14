import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip, type ChartOptions, type ChartData} from "chart.js";

ChartJS.register(ArcElement, Legend, Tooltip);

interface PieChartProps {
    data: ChartData<"pie", number[], string>;
    options?: ChartOptions<"pie">
}


const PieChart = ({data, options}: PieChartProps) => {

    return (
        <Pie data={data} options={options} />
    )
}

export default PieChart

