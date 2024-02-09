export const trending = (req, res) => res.send("Home page Videos");
// globalRouter의 handleHome과 관련된 함수, 홈페이지를 들어가자마자 보이는 추천영상을 지칭

export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
