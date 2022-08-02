import {BsPerson, BsCalendarDate, BsPhone} from "react-icons/bs"
import {MdOutlineEmail, MdOutlineLocationOn} from "react-icons/md"
import { StyledUser } from "./User.styled";

interface Props {
  className?: string;
}
export const User = ({ className }: Props) => {
  return (
    <StyledUser className={className}>
      <div className="header-wrapper">
        <h2>Edit User</h2>
        <button>Create</button>
      </div>

      <div className="container">

        <div className="detail-view">
          <div className="person">
            <div className="img-wrapper">
              <img src="https://i.pravatar.cc/150" alt="Person" />
            </div>
            <div className="text-wrapper">
              <p className="name">Caty Popumber</p>
              <div className="role">UI/UX Designer</div>
            </div>
          </div>
          <h3 className="section-title">Account Details</h3>
          <p><BsPerson /> <span>Bruce Banner</span></p>
          <p><BsCalendarDate /> <span>11 July 2022</span></p>
          <h3 className="section-title">Contact Details</h3>
          <p><BsPhone /> <span>+233550112233</span></p>
          <p><MdOutlineEmail /> <span>brucebanner@gmail.com</span></p>
          <p><MdOutlineLocationOn /> <span>New York | USA</span></p>
        </div>

        <div className="form-view"></div>
      </div>
    </StyledUser>
  );
};
