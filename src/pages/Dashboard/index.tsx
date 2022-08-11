import { Card } from "../../components";
import { Chart } from "../../components";
import { WidgetLg } from "../../components";
import { WidgetSm } from "../../components";
import { StyledDashboard } from "./Dashboard.styled";

interface Props {
  className?: string;
}
export const Dashboard = ({ className }: Props) => {
  return (
    <StyledDashboard className={className}>
      <h2>Dashboard</h2>
      <div className="cards-container">
        <Card number={1} />
        <Card number={2} />
        <Card number={3} />
        <Card number={4} />
      </div>
      <div className="chart-container">
        <Chart />
      </div>
      <div className="widgets-container">
        <WidgetSm />
        <WidgetLg />
      </div>
    </StyledDashboard>
  );
};
