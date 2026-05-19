import rateLimit from 'express-rate-limit'

export const limiter = rateLimit({
    windowMs: 15*60*1000,
    max: 5,
    message:{
        message: "Too many login attempts. Try again later."
    },
    standardHeader: true,
    legacyHeaders: false
});