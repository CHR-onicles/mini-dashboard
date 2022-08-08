import { StyledNewUser } from "./NewUser.styled";

interface Props {
  className?: string;
}

export const NewUser = ({ className }: Props) => {
  return (
    <StyledNewUser className={className}>
      <h2>New User</h2>
      <form action="">
        <div className="left">
          <div className="wrapper">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Eg: TheJohnny" />
          </div>
          <div className="wrapper">
            <label htmlFor="">Full name</label>
            <input type="text" placeholder="Eg: John Rogers" />
          </div>
          <div className="wrapper">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Eg: Johnrogers@gmail.com" />
          </div>
          <div className="wrapper">
              <label htmlFor="">Role</label>
              <input type="text" placeholder="Eg: Software Engineer" />
            </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <label htmlFor="">Phone</label>
            <input type="text" placeholder="Eg: +123445677" />
          </div>
          <div className="wrapper">
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Eg: New York, USA" />
          </div>
          <div className="wrapper">
            <label htmlFor="">Gender</label>
            <div className="radio-btns">
              <div className="radio-btn-wrapper">
                <input
                  type="radio"
                  name="gender"
                  id="radio-male"
                  value="Male"
                />
                <label htmlFor="radio-male">Male</label>
              </div>
              <div className="radio-btn-wrapper">
                <input
                  type="radio"
                  name="gender"
                  id="radio-female"
                  value="Female"
                />
                <label htmlFor="radio-female">Female</label>
              </div>
            </div>
          </div>
        </div>
      </form>
      <button>Create</button>
    </StyledNewUser>
  );
};
