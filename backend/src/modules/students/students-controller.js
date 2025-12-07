const asyncHandler = require('express-async-handler');
const {
    getAllStudents,
    addNewStudent,
    getStudentDetail,
    setStudentStatus,
    updateStudent,
} = require('./students-service');

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write logic to get all students
    const payload = req.query || {};
    const students = await getAllStudents(payload);
    res.status(200).json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write logic to add new student
    const payload = req.body;
    const result = await addNewStudent(payload);
    res.status(201).json(result);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write logic to update student
    const id = req.params.id;
    const payload = { id, ...req.body };
    const result = await updateStudent(payload);
    res.status(200).json(result);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write logic to get student detail
    const id = req.params.id;
    const student = await getStudentDetail(id);
    res.status(200).json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write logic to update student status
    const userId = req.params.id;
    const status = req.body.status;
    const reviewerId = req.user?.id || req.body.reviewerId;
    const result = await setStudentStatus({ userId, reviewerId, status });
    res.status(200).json(result);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
