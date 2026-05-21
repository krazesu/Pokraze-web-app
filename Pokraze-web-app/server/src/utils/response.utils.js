export const success = (res, status, data = {}, message = "Success") => {
    return res.status(status).json({
        success: true,
        message,
        ...data
    })
}

export const fail = (res, status, message = "Error") => {
    return res.status(status).json({
        success: false,
        message
    })
}