import { Card } from "../../components/Card";
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
    </StyledHome>
  );
};
