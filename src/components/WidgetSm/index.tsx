import { useEffect, useRef } from "react";
import { bp } from "../../styles/Utilities.styled";
import { isMatchMediaMinWidth } from "../../utils/matchMedia";
import { StyledWidgetSm } from "./WidgetSm.styled";

export const WidgetSm = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

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
        <li className="person">
          <div className="img-wrapper">
            <img src="https://i.pravatar.cc/150" alt="Person" />
          </div>
          <div className="text-wrapper">
            <p className="name">Luke Skywalker</p>
            <div className="role">Software Engineer</div>
          </div>
          <button>See more</button>
        </li>
        <li className="person">
          <div className="img-wrapper">
            <img src="https://i.pravatar.cc/150" alt="Person" />
          </div>
          <div className="text-wrapper">
            <p className="name">Ryan Reynolds</p>
            <div className="role">Product Manager</div>
          </div>
          <button>See more</button>
        </li>
        <li className="person">
          <div className="img-wrapper">
            <img src="https://i.pravatar.cc/150" alt="Person" />
          </div>
          <div className="text-wrapper">
            <p className="name">Dana Lorellia</p>
            <div className="role">Software Engineer</div>
          </div>
          <button>See more</button>
        </li>
        <li className="person">
          <div className="img-wrapper">
            <img src="https://i.pravatar.cc/150" alt="Person" />
          </div>
          <div className="text-wrapper">
            <p className="name">Caty Popumber</p>
            <div className="role">UI/UX Designer</div>
          </div>
          <button>See more</button>
        </li>
      </ul>
    </StyledWidgetSm>
  );
};
