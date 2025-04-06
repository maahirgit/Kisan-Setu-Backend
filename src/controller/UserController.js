const loginUser = async (req, res) => {
    try {
        const email = req.body.Email;
        const password = req.body.Password;
        const roleId = req.body.RoleId;

        const user = await userSchemaModel.findOne({ Email: email });

        if (user) {
            // **Log the Role IDs**
            console.log("Frontend Role ID:", roleId);
            console.log("Database Role ID:", user.Role_id ? user.Role_id.toString() : "Role ID missing in database");

            if (user.Role_id && user.Role_id.toString() !== roleId) {
                return res.status(401).json({ message: "Role ID mismatch." });
            } else if (!user.Role_id) {
                return res.status(400).json({ message: "User Role ID is missing." });
            }

            const isMatch = await hashedPassword.comparePassword(password, user.Password);
            if (isMatch) {
                const token = jwt.sign({ userId: user._id, email: user.Email, roleId: user.Role_id }, secretKey, { expiresIn: '1h' });
                res.status(200).json({ message: "User Login Successful", token: token });
            } else {
                res.status(401).json({ message: "Incorrect password." });
            }
        } else {
            res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        console.error("Error during login:", error);
        console.error("Request body:", req.body);
        console.error("Stack trace:", error.stack);
        res.status(500).json({ message: "Login failed due to server error." });
    }
};