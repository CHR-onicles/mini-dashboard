import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import { TUser, TUserContext } from "../../types";
import { StyledNewUser } from "./NewUser.styled";

interface Props {
  className?: string;
}

const initialState = {
  id: 0,
  username: "",
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  role: "",
  address: "",
};

export const NewUser = ({ className }: Props) => {
  const { createUser, users } = useContext(userContext) as TUserContext;
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { ...form, id: users.length + 1 };
    createUser(newUser as TUser);
    navigate("/users");
  };

  return (
    <StyledNewUser className={className}>
      <h2>New User</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="left">
            <div className="wrapper">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Eg: TheJohnny"
                required
                onChange={handleChange}
              />
            </div>
            <div className="wrapper">
              <label htmlFor="">Full name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Eg: John Rogers"
                required
                onChange={handleChange}
              />
            </div>
            <div className="wrapper">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Eg: Johnrogers@gmail.com"
                required
                onChange={handleChange}
              />
            </div>
            <div className="wrapper">
              <label htmlFor="">Role</label>
              <input
                type="text"
                name="role"
                placeholder="Eg: Software Engineer"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Eg: +123445677"
                required
                onChange={handleChange}
              />
            </div>
            <div className="wrapper">
              <label htmlFor="">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Eg: New York, USA"
                required
                onChange={handleChange}
              />
            </div>
            <div className="wrapper">
              <label htmlFor="">Gender</label>
              <div className="radio-btns">
                <div className="radio-btn-wrapper">
                  <input
                    type="radio"
                    name="gender"
                    id="radio-male"
                    value="male"
                    required
                    onChange={handleChange}
                  />
                  <label htmlFor="radio-male">Male</label>
                </div>
                <div className="radio-btn-wrapper">
                  <input
                    type="radio"
                    name="gender"
                    id="radio-female"
                    value="female"
                    required
                    onChange={handleChange}
                  />
                  <label htmlFor="radio-female">Female</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit">Create</button>
      </form>
    </StyledNewUser>
  );
};
