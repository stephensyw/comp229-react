

const getStudentResponse = function (req, res) {

    const student = {
        id: 1,
        name: "test2kaljsjdflk",
    }
    res.json(student)
}

module.exports = { getStudentResponse }