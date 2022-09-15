const {User} = require('../models/User');


let auth = (req, res, next) => {

    // 인증 처리를 하는 곳.

    // 클라이언트 쿠키에서 토큰을 가져옴.

    let token = req.cookies.x_auth;
    
    // 토큰을 복호화 한후 유저를 찾는다.
    User.findByToken()

    // 유저가 있으면 인증 

}

module.exports = { auth };

