# Wetube Reloaded

/ -> Home //1. 내가 유저라면 먼저 Home으로 접속 한다
/join -> Join //2. Home 접속 후 회원가입을 한다.
/login -> Login //3. 기존에 회원가입이 되어 있는 유저는 로그인을 한다.
/search -> Search //4. 로그인 후 홈으로 돌아와서 동영상을 검색한다

/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit My Profile
/users/delete -> Delete My profile //edit, delete는 현재 로그인 중인 유저만 가능하게 할것이다

/videos/:id -> See Video
/videos/:id/edit -> Edit Video //id는 User가 수정하고 싶은 동영상의 id이다.
/videos/:id/delete -> Delete Video
/videos/upload ->Upload Video
