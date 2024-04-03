'use strict';


function homePage(req, res) {
    res.send('Hi User');
}

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @returns hash response
 */
async function hashing(req, res) {
    const { hash } = require('bcrypt')
    const { password, saltRounds } = req.body;
    if (!saltRounds || !password) return res.status(400).json({ success: false, msg: 'Password & saltRounds is required.' });

    try {
        const hashed_token = await hash(password, saltRounds);
        res.status(200).json({
            success: true,
            hashed_token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            description : error.message
        });
    }
}

module.exports = {
    homePage: homePage,
    hashing: hashing
};