const express = require('express');

const Controller = require('../CONTROLLER/Attendence');

const router = express.Router();

router.post('/student/post-attendence-list', Controller.postAttendence);

router.get('/student/get-attendence-list/:date', Controller.getAttendenceList);

// router.patch('/item/edit-items/:userid', itemController.getEditItem);

// router.post('/item/edit-items/',  itemController.updateItem);

// router.get('/item/getafter-items/:userid',itemController.getafteredited);

// router.delete('/item/delete-items/:userid', itemController.deleteItem);

module.exports = router; 