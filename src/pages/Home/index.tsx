import { Link } from "react-router-dom";
import { StyledHome } from "./Home.styled";

interface Props {
  className?: string;
}

export const Home = ({ className }: Props) => {
  return (
    <StyledHome>
      <div className="content">
        <h2>Home when not authenticated</h2>
        <Link to="/dashboard">Go to dashboard</Link>
      </div>
    </StyledHome>
  );
};
