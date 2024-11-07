
const express = require("express");
const route = express.Router()
const blogController = require('../Controllers/controller.js')

route.post('/create-blog', blogController.createBlog);

route.get('/read-blog', blogController.readBlog);

route.put('/update-blog', blogController.putBlog);

route.delete('/delete-blog', blogController.deleteBlog);


module.exports = route