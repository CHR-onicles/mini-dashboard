import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import { bp } from "../../styles/Utilities.styled";
import { TUserContext } from "../../types";
import { isMatchMediaMinWidth } from "../../utils/matchMedia";
import { StyledWidgetSm } from "./WidgetSm.styled";

export const WidgetSm = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const { users } = useContext(userContext) as TUserContext;
  let newUsers = users.slice(users.length - 4);
  newUsers = newUsers.reverse();

  useEffect(() => {
    if (!isMatchMediaMinWidth(bp.xlarge)) {
      if (widgetRef.current) {
        const text = widgetRef.current.querySelectorAll(".name, .role");

        text.forEach((word) => {
          if (word.textContent && word.textContent.length > 10) {
            word.textContent =
              word.textContent.slice(0, word.textContent.length - 4) + "...";
          }
        });
      }
    }
  }, []);

  return (
    <StyledWidgetSm ref={widgetRef}>
      <h3>New Users</h3>

      <ul className="people">
        {newUsers.map((user) => {
          return (
            <li className="person">
              <div className="img-wrapper">
                <img src="https://i.pravatar.cc/150" alt="Person" />
              </div>
              <div className="text-wrapper">
                <p className="name">{user.fullName}</p>
                <div className="role">{user.role}</div>
              </div>
              <Link to={`../users/${user.id}`}>See more</Link>
            </li>
          );
        })}
      </ul>
    </StyledWidgetSm>
  );
};
