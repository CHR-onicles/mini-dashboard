import { Card } from "../../components/Card";
import { Chart } from "../../components/Chart";
import { WidgetLg } from "../../components/WidgetLg";
import { WidgetSm } from "../../components/WidgetSm";
import { StyledHome } from "./Home.styled";

interface Props {
  className?: string;
}
export const Home = ({ className }: Props) => {
  return (
    <StyledHome className={className}>
      <div className="cards-container">
        <Card number={1} />
        <Card number={2} />
        <Card number={3} />
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
