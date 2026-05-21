import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
    windowMs: 15*60*1000,
    max: 5,
    message:{
        message: "Too many login attempts. Try again later."
    },
    legacyHeaders: false
});

export default limiter