export const join = (req, res) => res.send("Join");
// globalRouter의 handleJoin에 해당, join은 user의 영역이기에, userController로 표시

export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Delete User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");
