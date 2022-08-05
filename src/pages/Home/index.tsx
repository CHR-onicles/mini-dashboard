import { Card } from "../../components";
import { Chart } from "../../components";
import { WidgetLg } from "../../components";
import { WidgetSm } from "../../components";
import { StyledHome } from "./Home.styled";

interface Props {
  className?: string;
}
export const Home = ({ className }: Props) => {
  return (
    <StyledHome className={className}>
      <h2>Home</h2>
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
    </StyledHome>
  );
};
