import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./App.css";

function App() {
  const pdata = [
    {
      name: "Python",
      student: 13,
      fees: 10,
    },
    {
      name: "Javascript",
      student: 15,
      fees: 12,
    },
    {
      name: "PHP",
      student: 5,
      fees: 10,
    },
    {
      name: "Java",
      student: 10,
      fees: 5,
    },
    {
      name: "C#",
      student: 9,
      fees: 4,
    },
    {
      name: "C++",
      student: 10,
      fees: 8,
    },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000", "#990099"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <h1 className="chart-heading">Line Charts</h1>
      <ResponsiveContainer width={"100%"} aspect={3}>
        <LineChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 100, left: 100, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={"name"}
            interval={"preserveStartEnd"}
            tickFormatter={(value) => value + " Programming"}
          />
          <YAxis />
          <Tooltip contentStyle={{ background: "#999" }} />
          <Legend />
          <Line dataKey={"student"} stroke={"#00007C"} activeDot={{ r: 8 }} />
          <Line
            type="monotone"
            dataKey={"fees"}
            stroke={"crimson"}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <h1 className="chart-heading" style={{ color: "#00007C" }}>
        Area Chart
      </h1>
      <ResponsiveContainer width={"100%"} aspect={3}>
        <AreaChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 100, left: 100, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey={"student"} stroke="#83B4D7" />
        </AreaChart>
      </ResponsiveContainer>

      <h1 className="chart-heading" style={{ color: "crimson" }}>
        Bar Chart
      </h1>
      <ResponsiveContainer width={"100%"} aspect={3}>
        <BarChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 100, left: 100, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <h1 className="chart-heading" style={{ color: "#6D5D5E" }}>
        Pie Chart
      </h1>
      <ResponsiveContainer width={"100%"} aspect={3}>
        <PieChart
          width={500}
          height={300}
          margin={{ top: 5, right: 100, left: 100, bottom: 5 }}
        >
          {/* <XAxis dataKey={"name"} />
          <YAxis /> */}
          <Pie
            data={pdata}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            dataKey="student"
            fill="#8884d8"
          >
            {
              pdata.map((item, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
