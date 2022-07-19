import { StyledWidgetSm } from "./WidgetSm.styled"

export const WidgetSm = () => { 
    return (
        <StyledWidgetSm>
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
    )
 }