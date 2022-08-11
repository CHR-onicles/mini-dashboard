import { Link } from "react-router-dom";
import { StyledHome } from "./Home.styled";

interface Props {
  className?: string;
}

export const Home = ({ className }: Props) => {
  return (
    <StyledHome>
      <div className="content">
        <h2>Hello there</h2>
        <p>Please sign in to continue using the app</p>
        <Link to="/dashboard">Go to dashboard</Link>
      </div>
    </StyledHome>
  );
};
