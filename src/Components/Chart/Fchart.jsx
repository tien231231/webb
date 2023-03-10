import Chart from "./Chart";
import "./chart.css"
import Card from "antd/es/card/Card";
const FChart = () => {
  
    const data = [
        {
          title: "Necessary",
          tpercent: "50%",
          percent: "0.5",
        },
        {
          title: "Personal",
          tpercent: "10%",
          percent: "0.1",
        },
        {
          title: "Long-term",
          tpercent: "15%",
          percent: "0.15",
        },
        {
          title: "Educational",
          tpercent: "25%",
          percent: "0.25",
        },
      ];
      return (<div >
      
      {data.map((item) => (
      <Card>
        <Chart
          title={item.title}
          tpercent={item.tpercent}
          percent={item.percent}
        />
      </Card>
    ))}
  

      
      
      
     </div> ) 
};
export default FChart