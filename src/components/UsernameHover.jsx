import React, { useEffect, useState } from "react";
import { getUsernameSelector } from "../store/selectors/users.selectors";
import { connect } from "react-redux";
import { updateUsernameAction } from "../store/slices/user.slice";

const UsernameHover = ({ username, changeUsernameTo }) => {
  const [isHover, setIsHover] = useState(false);
  console.log("UsernameHover rendered");

  useEffect(() => {
    changeUsernameTo(isHover ? "Hadriel" : "Afek");
  }, [isHover]);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      User: {username}
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: getUsernameSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeUsernameTo: (username) => {
    dispatch(updateUsernameAction(username));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsernameHover);
