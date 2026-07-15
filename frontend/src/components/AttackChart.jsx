import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AttackChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/api/chart")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.labels.map((label, index) => ({
          name: label,
          attacks: data.values[index],
        }));

        setChartData(formatted);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        background: "#27324a",
        padding: "25px",
        borderRadius: "14px",
        marginTop: "30px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Attack Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Bar
            dataKey="attacks"
            fill="#38bdf8"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttackChart;