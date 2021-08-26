const getIsLoggedIn = (state) => state.users.isLoggedIn;
const getUsername = (state) => state.users.user.name;

const userSelectors = {
  getIsLoggedIn,
  getUsername,
};

export default userSelectors;
