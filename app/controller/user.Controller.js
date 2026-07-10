const categoryModel = require("../model/category.db");
const commentModel = require("../model/comment.db");
const courseModel = require("../model/course.db");
const deptModel = require("../model/department.db");
const employeeModel = require("../model/emp.db");
const inventoryProductModel = require("../model/inventoryProduct.db");
const orderModel = require("../model/order.db");
const vendorOrderModel = require("../model/orderVendor.db");
const postModel = require("../model/post.db");
const productModel = require("../model/product.db");
const vendorProductModel = require("../model/productVendor.db");
const studentModel = require("../model/student.db");
const userModel = require("../model/user.db");
const userBlogModel = require("../model/userBlog.db");
const vendorModel = require("../model/vendor.db");
const warehouseModel = require("../model/warhouse.db");
const httpStatusCode = require("../utils/httpStatusCode");

class UserController {
  async createUser(req, res) {
    try {
      const data = await userModel.create(req.body);
      return res.status(httpStatusCode.CREATED).json({
        message: "user created successfully",
        data: data,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async getUser(req, res) {
    try {
      const result = await userModel.find();
      return res.status(httpStatusCode.CREATED).json({
        message: "user created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createOrder(req, res) {
    try {
      const { userId, amount } = req.body;
      const data = new orderModel({
        userId,
        amount,
      });
      const result = await data.save();
      return res.status(httpStatusCode.CREATED).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createDept(req, res) {
    try {
      const data = await deptModel.create(req.body);
      return res.status(httpStatusCode.CREATED).json({
        message: "Dept created successfully",
        data: data,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async getDept(req, res) {
    try {
      const result = await deptModel.find();
      return res.status(httpStatusCode.CREATED).json({
        message: "dept get successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createEmp(req, res) {
    try {
      const { employeeName, salary, departmentId } = req.body;
      const data = new employeeModel({
        employeeName,
        salary,
        departmentId,
      });
      const result = await data.save();
      return res.status(httpStatusCode.CREATED).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createCategory(req, res) {
    try {
      const data = await categoryModel.create(req.body);
      return res.status(httpStatusCode.CREATED).json({
        message: "category created successfully",
        data: data,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async getCategory(req, res) {
    try {
      const result = await categoryModel.find();
      return res.status(httpStatusCode.CREATED).json({
        message: "dept get successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createProduct(req, res) {
    try {
      const { productName, price, categoryId } = req.body;
      const data = new productModel({
        productName,
        price,
        categoryId,
      });
      const result = await data.save();
      return res.status(httpStatusCode.CREATED).json({
        message: "Product created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createCourses(req, res) {
    try {
      const data = await courseModel.create(req.body);
      return res.status(httpStatusCode.CREATED).json({
        message: "course created successfully",
        data: data,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async getCourses(req, res) {
    try {
      const result = await courseModel.find();
      return res.status(httpStatusCode.CREATED).json({
        message: "courses get successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createStudents(req, res) {
    try {
      const { studentName, marks, courseId } = req.body;
      const data = new studentModel({
        studentName,
        marks,
        courseId,
      });
      const result = await data.save();
      return res.status(httpStatusCode.CREATED).json({
        message: "Product created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createUserBlog(req, res) {
    try {
      const data = await userBlogModel.create(req.body);
      return res.status(httpStatusCode.CREATED).json({
        message: "User created successfully",
        data: data,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async getUserBlog(req, res) {
    try {
      const result = await userBlogModel.find();
      return res.status(httpStatusCode.CREATED).json({
        message: "Users get successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createPost(req, res) {
    try {
      const { title, content, authorId } = req.body;
      const data = new postModel({
        title,
        content,
        authorId,
      });
      const result = await data.save();
      return res.status(httpStatusCode.CREATED).json({
        message: "Student created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createComment(req, res) {
    try {
      const { comment, postId } = req.body;
      const data = new commentModel({
        comment,
        postId,
      });
      const result = await data.save();
      return res.status(httpStatusCode.CREATED).json({
        message: "Student created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createWarhouse(req, res) {
    try {
      const { warehouseName, location } = req.body;
      const data = new warehouseModel({
        warehouseName,
        location,
      });
      const result = await data.save();
      return res.status(httpStatusCode.CREATED).json({
        message: "Product created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async getWarhouse(req, res) {
    try {
      const result = await warehouseModel.find();
      return res.status(httpStatusCode.CREATED).json({
        message: "Users get successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createInventoryProduct(req, res) {
    try {
      const { productName, stockQuantity, categoryId, warehouseId } = req.body;
      const data = new inventoryProductModel({
        productName,
        stockQuantity,
        categoryId,
        warehouseId,
      });
      const result = await data.save();
      return res.status(httpStatusCode.CREATED).json({
        message: "Product created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createVendor(req, res) {
    try {
      const { vendorName, city } = req.body;

      const data = new vendorModel({
        vendorName,
        city,
      });

      const result = await data.save();

      return res.status(httpStatusCode.CREATED).json({
        message: "Vendor created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }

  async getVendor(req, res) {
    try {
      const result = await vendorModel.find();

      return res.status(httpStatusCode.OK).json({
        message: "Vendors fetched successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createProductVendor(req, res) {
    try {
      const { productName, price, vendorId } = req.body;

      const data = new vendorProductModel({
        productName,
        price,
        vendorId,
      });
      const result = await data.save();
      return res.status(httpStatusCode.CREATED).json({
        message: "Product created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }

  async getProductVendor(req, res) {
    try {
      const result = await vendorProductModel.find();

      return res.status(httpStatusCode.OK).json({
        message: "Products fetched successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async createOrderVendor(req, res) {
    try {
      const { userId, productId, quantity, totalAmount } = req.body;

      const data = new vendorOrderModel({
        userId,
        productId,
        quantity,
        totalAmount,
      });

      const result = await data.save();

      return res.status(httpStatusCode.CREATED).json({
        message: "Order created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }

  async getOrderVendor(req, res) {
    try {
      const result = await vendorOrderModel.find();

      return res.status(httpStatusCode.OK).json({
        message: "Orders fetched successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
}
module.exports = new UserController();
