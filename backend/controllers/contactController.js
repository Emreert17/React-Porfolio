const Message = require("../models/contactModel");

exports.createContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required" });
  }

  try {
    await Message.create({ name, email, message });
    res.status(201).json({ success: true, data: { name, email, message } });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
