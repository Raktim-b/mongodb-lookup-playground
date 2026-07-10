const express = require("express");
const lookupController = require("../controller/lookup.Controller");
const userController = require("../controller/user.Controller");

const router = express.Router();

router.post("/create/user", userController.createUser);
router.get("/get/user", userController.getUser);

router.post("/create/order", userController.createOrder);

router.get("/q1", lookupController.q1);
router.get("/q2", lookupController.q2);
router.get("/q3", lookupController.q3);
router.get("/q4", lookupController.q4);

router.post("/create/dept", userController.createDept);
router.get("/get/dept", userController.getDept);

router.post("/create/emp", userController.createEmp);

router.get("/q5", lookupController.q5);
router.get("/q6", lookupController.q6);
router.get("/q7", lookupController.q7);
router.get("/q8", lookupController.q8);

router.post("/create/category", userController.createCategory);
router.get("/get/category", userController.getCategory);

router.post("/create/product", userController.createProduct);

router.get("/q9", lookupController.q9);
router.get("/q10", lookupController.q10);
router.get("/q11", lookupController.q11);
router.get("/q12", lookupController.q12);

router.post("/create/course", userController.createCourses);
router.get("/get/course", userController.getCourses);
router.post("/create/student", userController.createStudents);

router.get("/q17", lookupController.q17);
router.get("/q18", lookupController.q18);
router.get("/q19", lookupController.q19);
router.get("/q20", lookupController.q20);

router.post("/create/courseBlog", userController.createUserBlog);
router.get("/get/courseBlog", userController.getUserBlog);
router.post("/create/post", userController.createPost);
router.post("/create/comment", userController.createComment);

router.get("/q21", lookupController.q21);
router.get("/q22", lookupController.q22);
router.get("/q23", lookupController.q23);
router.get("/q24", lookupController.q24);

router.post("/create/warhouse", userController.createWarhouse);
router.get("/get/warhouse", userController.getWarhouse);
router.post("/create/inventoryProduct", userController.createInventoryProduct);

router.get("/q25", lookupController.q25);
router.get("/q26", lookupController.q26);
router.get("/q27", lookupController.q27);

router.post("/create/vendor", userController.createVendor);
router.get("/get/vendor", userController.getVendor);
router.post("/create/productVendor", userController.createProductVendor);
router.get("/get/productVendor", userController.getProductVendor);
router.post("/create/orderVendor", userController.createOrderVendor);

router.get("/q28", lookupController.q28);
router.get("/q29", lookupController.q29);

module.exports = router;
