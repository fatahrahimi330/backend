const user_model = require('../model/user_model');

const register = async (req, res) => {
    try {

        const mobile = req.body.mobile;

        const user = new user_model({
            mobile: mobile,
            date_create: Date().toString()
        });

        const user_check = await user_model.findOne({ 'mobile': mobile });

        if (!user_check) {
            const user_data = await user.save();
            if (user_data) {
                res.status(200).send({
                    success: true,
                    message: 'user added successfully.',
                    data: user_data
                });

            } else {
                res.status(200).send({
                    success: false,
                    message: 'user addition failed.',
                    data: user_data
                });
            }
        } else {
            res.status(200).send({
                success: false,
                message: 'user already added!'
            });
        }


    } catch (error) {
        res.status(400).send({
            success: false,
            message: 'something went wrong!'
        });
    }
};

const login = async (req, res) => {
    try {

        const mobile = req.body.mobile;

        const user_check = await user_model.findOne({ 'mobile': mobile });

        if (user_check) {
            res.status(200).send({
                success: true,
                message: 'user logged in successfully.'
            });
        } else {
            res.status(200).send({
                success: false,
                message: 'invalid user!'
            });
        }


    } catch (error) {
        res.status(400).send({
            success: false,
            message: 'something went wrong!'
        });
    }
};

module.exports = {
    register,
    login
}