import { BsPerson, BsCalendarDate, BsPhone } from "react-icons/bs";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { StyledUser } from "./User.styled";

interface Props {
  className?: string;
}
export const User = ({ className }: Props) => {
  return (
    <StyledUser className={className}>
      <div className="header-wrapper">
        <h2>Edit User</h2>
        <Link to="/newUser">Create</Link>
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
          <div className="account-details">
            <h3 className="section-title">Account Details</h3>
            <div>
              <BsPerson /> <span>Bruce Banner</span>
            </div>
            <div>
              <BsCalendarDate /> <span>11 July 2022</span>
            </div>
          </div>

          <div className="contact-details">
            <h3 className="section-title">Contact Details</h3>
            <div>
              <BsPhone /> <span>+233550112233</span>
            </div>
            <div>
              <MdOutlineEmail /> <span>brucebanner@gmail.com</span>
            </div>
            <div>
              <MdOutlineLocationOn /> <span>New York | USA</span>
            </div>
          </div>
        </div>

        <div className="form-view">
          <h3 className="form-title">Edit</h3>
          <div className="flex">
            <form action="">
              <div className="wrapper">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="BruceB" />
              </div>
              <div className="wrapper">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" placeholder="Bruce Banner" />
              </div>
              <div className="wrapper">
                <label htmlFor="phon">Phone</label>
                <input id="phone" type="text" placeholder="+1234567890" />
              </div>
              <div className="wrapper">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="brucebanner@gmail.com"
                />
              </div>
              <div className="wrapper">
                <label htmlFor="address">Address</label>
                <input id="address" type="text" placeholder="New York | USA" />
              </div>
            </form>
            <div className="right-side">
              <button type="submit" onClick={(e) => e.preventDefault()}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledUser>
  );
};
