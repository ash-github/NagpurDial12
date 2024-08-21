const express = require("express");
const User = require("../modules/User");
const fetchuser = require("../fetch/Fetchuser");
const router = express.Router();
const BusinessDetails = require("../modules/businessDetails");
const Contact = require("../modules/Contact");
const Contact1 = require("../modules/Contact1");
const { body, validationResult } = require("express-validator");
var bcryptjs = require("bcryptjs");
var jwt = require("jsonwebtoken");
const jwt_key = "gayatrimam@123";

router.post(
  "/createuser",
  [
    body("name", "enter valid name").isLength({ min: 3 }),
    body("email", "enter valid email").isEmail(),
    body("password", "enter password has min length is 8").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }
    var user = await User.findOne({ email: req.body.email });
    if (user) {
      success = false;
      return res.status(404).json({ error: "sorry already exist" });
    }
    const salt = await bcryptjs.genSalt(10);
    secPass = await bcryptjs.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const data = {
      user: {
        id: user.id,
      },
    };

    const authtoken = jwt.sign(data, jwt_key);
    console.log(authtoken);
    success = true;
    res.json({ success, authtoken });
  }
);

// businessdetails from
router.post(
  "/businessdetails",
  [
    body("firstname", "Enter valid firstname").isLength({ min: 3 }),
    body("middlename", "Enter valid middle").isLength({ min: 3 }),
    body("lastname", "Enter valid lastname").isLength({ min: 3 }),
    body("emailid", "Enter valid emailid").isEmail(),
    body("businessname", "Enter businessname").isLength({ min: 5 }),
    body("businessaddress", "Enter businessaddress").isLength({ min: 10 }),
    body("number", "Enter number").isLength({ min: 12 }),
    body("businessDescription", "Enter businessDescription").isLength({
      min: 1,
    }),
    body("businessNumber", "Enter businessNumber").isLength({ min: 10 }),
    body("pincode", "Enter pincode").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const businessDetails = await BusinessDetails.create({
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        emailid: req.body.emailid,
        businessname: req.body.businessname,
        businessaddress: req.body.businessaddress,
        number: req.body.number,
        businessDescription: req.body.businessDescription,
        businessNumber: req.body.businessNumber,
        pincode: req.body.pincode,
      });

      const data = { user: { id: businessDetails.id } };
      const authtoken = jwt.sign(data, jwt_key);

      res.json({ success: true, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// contact form
router.post(
  "/contact",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter valid emailid").isEmail(),
    body("number", "Enter number").isLength({ min: 12 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const contact = await Contact.create({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
      });

      const data = { user: { id: contact.id } };
      const authtoken = jwt.sign(data, jwt_key);

      res.json({ success: true, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//
router.post(
  "/contact1",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter valid emailid").isEmail(),
    body("number", "Enter number").isLength({ min: 12 }),
  ],
  async (req, res) => {
    // Validate inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure name and email from request body
    const { name, email ,number} = req.body;

    try {
      // Create a new instance of Contact1 model
      const contact = new Contact1({
        name,
        email,
        number,
      });

      // Save contact to the database
      await contact.save();

      // Prepare response with token or other data if needed
      const data = { user: { id: contact.id } };
      const authtoken = jwt.sign(data, jwt_key);

      // Send success response
      res.json({ success: true, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

router.post(
  "/login",
  [
    body("email", "enter valid email").isEmail(),
    body("password", "min length is 8").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      var user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "sorry user not exist" });
      }
      const pass = await bcryptjs.compare(password, user.password);
      if (!pass) {
        success = false;
        return res.status(404).json({ error: "sorry user not exist" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, jwt_key);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error");
    }
  }
);

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId);
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("internal server error");
  }
});

module.exports = router;
