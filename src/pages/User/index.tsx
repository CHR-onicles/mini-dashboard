import React, { useContext, useEffect, useState } from "react";
import { BsPerson, BsCalendarDate, BsPhone } from "react-icons/bs";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import { StyledUser } from "./User.styled";
import { TUserContext, TUser } from "../../types";

interface Props {
  className?: string;
}

const initialState = {
  username: "",
  fullName: "",
  email: "",
  role: "",
  address: "",
};

export const User = ({ className }: Props) => {
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const [currentUser, setCurrentUser] = useState({} as TUser);

  const { users, updateUser } = useContext(userContext) as TUserContext;

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(form);
    const updatedUser: TUser = {
      ...form,
      id: currentUser.id,
      gender: currentUser.gender,
      phone: currentUser.phone 
    }
    updateUser(updatedUser)
  };

  const fetchCurrentUserData = (id: string) => {
    return users.find(user => user.id === +id);
  };

  useEffect(() => {
    if (id) {
      const user = fetchCurrentUserData(id);
      user && setCurrentUser(user);
    }
  }, []);

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
              <p className="name">{currentUser.username}</p>
              <div className="role">{currentUser.role}</div>
            </div>
          </div>
          <div className="account-details">
            <h3 className="section-title">Account Details</h3>
            <div>
              <BsPerson /> <span>{currentUser.fullName}</span>
            </div>
            <div>
              <BsCalendarDate /> <span>11 July 2022</span>
            </div>
          </div>

          <div className="contact-details">
            <h3 className="section-title">Contact Details</h3>
            <div>
              <BsPhone /> <span>{currentUser.phone}</span>
            </div>
            <div>
              <MdOutlineEmail /> <span>{currentUser.email}</span>
            </div>
            <div>
              <MdOutlineLocationOn /> <span>{currentUser.address}</span>
            </div>
          </div>
        </div>

        <div className="form-view">
          <h3 className="form-title">Edit</h3>
          <div className="flex">
            <form action="">
              <div className="wrapper">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  placeholder={currentUser.username}
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="wrapper">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder={currentUser.fullName}
                  name="fullName"
                  onChange={handleChange}
                />
              </div>
              <div className="wrapper">
                <label htmlFor="role">Role</label>
                <input
                  id="role"
                  type="text"
                  placeholder={currentUser.role}
                  name="role"
                  onChange={handleChange}
                />
              </div>
              <div className="wrapper">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder={currentUser.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="wrapper">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  placeholder={currentUser.address}
                  name="address"
                  onChange={handleChange}
                />
              </div>
            </form>
            <div className="right-side">
              <button type="submit" onClick={handleSubmit}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledUser>
  );
};
