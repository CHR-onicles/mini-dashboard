import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { StyledHome } from "./Home.styled";

interface Props {
  className?: string;
}

export const Home = ({ className }: Props) => {
  const { loginWithPopup } = useAuth0();
  const navigate = useNavigate();

  return (
    <StyledHome>
      <div className="content">
        <h2>Hello there</h2>
        <p>Please sign in to continue using the app</p>
        <button
          onClick={() => {
            loginWithPopup().then(() => navigate("/dashboard"));
          }}
        >
          Go to dashboard
        </button>
      </div>
    </StyledHome>
  );
};
