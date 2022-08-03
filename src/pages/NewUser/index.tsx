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
            <input type="text" placeholder="John" />
          </div>
          <div className="wrapper">
            <label htmlFor="">Fullname</label>
            <input type="text" placeholder="John Rogers" />
          </div>
          <div className="wrapper">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Johnrogers@gmail.com" />
          </div>
          <div className="wrapper">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <label htmlFor="">Phone</label>
            <input type="text" placeholder="+123445677" />
          </div>
          <div className="wrapper">
            <label htmlFor="">Address</label>
            <input type="text" placeholder="New York | USA" />
          </div>
          <div className="wrapper">
            <label htmlFor="">Gender</label>
            <div className="radio-btns">
              <input type="radio" name="gender" id="radio-male" value="Male" />
              <label htmlFor="radio-male">Male</label>
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
      </form>
      <button>Create</button>
    </StyledNewUser>
  );
};
