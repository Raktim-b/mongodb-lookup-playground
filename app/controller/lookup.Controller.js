const employeeModel = require("../model/emp.db");
const inventoryProductModel = require("../model/inventoryProduct.db");
const vendorOrderModel = require("../model/orderVendor.db");
const postModel = require("../model/post.db");
const productModel = require("../model/product.db");
const studentModel = require("../model/student.db");
const userModel = require("../model/user.db");
const httpStatusCode = require("../utils/httpStatusCode");

class LookupController {
  async q1(req, res) {
    try {
      const result = await userModel.aggregate([
        {
          $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "userId",
            as: "orders",
          },
        },
        { $unwind: "$orders" },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q2(req, res) {
    try {
      const result = await userModel.aggregate([
        {
          $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "userId",
            as: "orders",
          },
        },
        { $unwind: "$orders" },
        {
          $group: {
            _id: "$_id",
            userName: { $first: "$name" },
            totalAmount: { $sum: "$orders.amount" },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q3(req, res) {
    try {
      const result = await userModel.aggregate([
        {
          $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "userId",
            as: "orders",
          },
        },
        {
          $match: {
            orders: { $size: 0 },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q4(req, res) {
    try {
      const result = await userModel.aggregate([
        {
          $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "userId",
            as: "orders",
          },
        },
        { $unwind: "$orders" },
        {
          $group: {
            _id: "$_id",
            userName: { $first: "$name" },
            totalAmount: { $sum: "$orders.amount" },
          },
        },
        { $sort: { totalAmount: -1 } },
        { $limit: 3 },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q5(req, res) {
    try {
      const result = await employeeModel.aggregate([
        {
          $lookup: {
            from: "departments",
            localField: "departmentId",
            foreignField: "_id",
            as: "departments",
          },
        },
        { $unwind: "$departments" },
        // {
        //   $project: {
        //     _id: 0,
        //     employeeName: 1,
        //     departments: "$departments.departmentName",
        //   },
        // },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q6(req, res) {
    try {
      const result = await employeeModel.aggregate([
        {
          $lookup: {
            from: "departments",
            localField: "departmentId",
            foreignField: "_id",
            as: "departments",
          },
        },
        { $unwind: "$departments" },
        {
          $group: { _id: "$departments.departmentName", totalEmp: { $sum: 1 } },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q7(req, res) {
    try {
      const result = await employeeModel.aggregate([
        {
          $lookup: {
            from: "departments",
            localField: "departmentId",
            foreignField: "_id",
            as: "departments",
          },
        },
        { $unwind: "$departments" },
        {
          $group: { _id: "$departments.departmentName", totalEmp: { $sum: 1 } },
        },
        { $sort: { totalEmp: -1 } },
        { $limit: 1 },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q8(req, res) {
    try {
      const result = await employeeModel.aggregate([
        {
          $lookup: {
            from: "departments",
            localField: "departmentId",
            foreignField: "_id",
            as: "departments",
          },
        },
        { $unwind: "$departments" },
        {
          $group: {
            _id: "$departments.departmentName",
            avgSalery: { $avg: "$salary" },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q9(req, res) {
    try {
      const result = await productModel.aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "categoryId",
            foreignField: "_id",
            as: "categories",
          },
        },
        { $unwind: "$categories" },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q10(req, res) {
    try {
      const result = await productModel.aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "categoryId",
            foreignField: "_id",
            as: "categories",
          },
        },
        { $unwind: "$categories" },
        {
          $group: {
            _id: "$categories.categoryName",
            totalProducts: { $sum: 1 },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q11(req, res) {
    try {
      const result = await productModel.aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "categoryId",
            foreignField: "_id",
            as: "categories",
          },
        },
        { $unwind: "$categories" },
        {
          $group: {
            _id: "$categories.categoryName",
            totalProducts: { $sum: 1 },
          },
        },
        {
          $sort: {
            totalProducts: -1,
          },
        },
        { $limit: 1 },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q12(req, res) {
    try {
      const result = await productModel.aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "categoryId",
            foreignField: "_id",
            as: "categories",
          },
        },
        { $unwind: "$categories" },
        {
          $group: {
            _id: "$categories.categoryName",
            avgPrice: { $avg: "$price" },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q17(req, res) {
    try {
      const result = await studentModel.aggregate([
        {
          $lookup: {
            from: "courses",
            localField: "courseId",
            foreignField: "_id",
            as: "courses",
          },
        },
        { $unwind: "$courses" },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q18(req, res) {
    try {
      const result = await studentModel.aggregate([
        {
          $lookup: {
            from: "courses",
            localField: "courseId",
            foreignField: "_id",
            as: "courses",
          },
        },
        { $unwind: "$courses" },
        {
          $group: {
            _id: "$courses.courseName",
            students: { $sum: 1 },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q19(req, res) {
    try {
      const result = await studentModel.aggregate([
        {
          $lookup: {
            from: "courses",
            localField: "courseId",
            foreignField: "_id",
            as: "courses",
          },
        },
        { $unwind: "$courses" },
        {
          $group: {
            _id: "$courses.courseName",
            students: { $sum: 1 },
          },
        },
        {
          $sort: {
            students: -1,
          },
        },
        { $limit: 1 },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q20(req, res) {
    try {
      const result = await studentModel.aggregate([
        {
          $lookup: {
            from: "courses",
            localField: "courseId",
            foreignField: "_id",
            as: "courses",
          },
        },
        { $unwind: "$courses" },
        {
          $group: {
            _id: "$courses.courseName",
            avgMarks: { $avg: "$marks" },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q21(req, res) {
    try {
      const result = await postModel.aggregate([
        {
          $lookup: {
            from: "userblogs",
            localField: "authorId",
            foreignField: "_id",
            as: "userBlogs",
          },
        },
        { $unwind: "$userBlogs" },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q22(req, res) {
    try {
      const result = await postModel.aggregate([
        {
          $lookup: {
            from: "userblogs",
            localField: "authorId",
            foreignField: "_id",
            as: "userBlogs",
          },
        },
        { $unwind: "$userBlogs" },
        {
          $group: {
            _id: { author: "$userBlogs.name" },
            totalPosts: { $sum: 1 },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q23(req, res) {
    try {
      const result = await postModel.aggregate([
        {
          $lookup: {
            from: "userblogs",
            localField: "authorId",
            foreignField: "_id",
            as: "userBlogs",
          },
        },
        { $unwind: "$userBlogs" },
        {
          $group: {
            _id: { author: "$userBlogs.name" },
            totalPosts: { $sum: 1 },
          },
        },
        {
          $sort: {
            totalPosts: -1,
          },
        },
        { $limit: 1 },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q24(req, res) {
    try {
      const result = await postModel.aggregate([
        {
          $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "postId",
            as: "comments",
          },
        },
        { $unwind: "$comments" },
        {
          $group: {
            _id: { author: "$title" },
            totalComments: { $sum: 1 },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q25(req, res) {
    try {
      const result = await inventoryProductModel.aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "categoryId",
            foreignField: "_id",
            as: "categories",
          },
        },
        { $unwind: "$categories" },
        {
          $group: {
            _id: { category: "$categories.categoryName" },
            totalStocks: { $sum: "$stockQuantity" },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q26(req, res) {
    try {
      const result = await inventoryProductModel.aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "categoryId",
            foreignField: "_id",
            as: "categories",
          },
        },
        { $unwind: "$categories" },
        {
          $group: {
            _id: { category: "$categories.categoryName" },
            totalStocks: { $sum: "$stockQuantity" },
          },
        },
        { $sort: { totalStocks: 1 } },
        { $limit: 1 },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q27(req, res) {
    try {
      const result = await inventoryProductModel.aggregate([
        {
          $lookup: {
            from: "warehouses",
            localField: "warehouseId",
            foreignField: "_id",
            as: "warehouses",
          },
        },
        { $unwind: "$warehouses" },
        {
          $group: {
            _id: { category: "$warehouses.warehouseName" },
            totalStocks: { $sum: "$stockQuantity" },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q28(req, res) {
    try {
      const result = await vendorOrderModel.aggregate([
        {
          $lookup: {
            from: "userblogs",
            localField: "userId",
            foreignField: "_id",
            as: "userblogs",
          },
        },
        { $unwind: "$userblogs" },
        {
          $lookup: {
            from: "productvendors",
            localField: "productId",
            foreignField: "_id",
            as: "productvendors",
          },
        },
        { $unwind: "$productvendors" },
        {
          $group: {
            _id: { category: "$userblogs.name" },
            order: { $sum: 1 },
            totalPurchase: { $sum: "$totalAmount" },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
  async q29(req, res) {
    try {
      const result = await vendorOrderModel.aggregate([
        {
          $lookup: {
            from: "productvendors",
            localField: "productId",
            foreignField: "_id",
            as: "productvendors",
          },
        },
        { $unwind: "$productvendors" },
        {
          $lookup: {
            from: "vendors",
            localField: "productvendors.vendorId",
            foreignField: "_id",
            as: "vendors",
          },
        },
        { $unwind: "$vendors" },

        {
          $group: {
            _id: { category: "$vendors.vendorName" },

            revenue: { $sum: "$totalAmount" },
          },
        },
      ]);
      return res.status(httpStatusCode.OK).json({
        message: "Sub-category created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.FORBIDDEN).json({
        message: error.message,
      });
    }
  }
}
module.exports = new LookupController();
