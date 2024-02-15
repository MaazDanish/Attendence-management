const Attendence = require('../MODELS/Attendence')
// const Date = require('../MODELS/Dates')
exports.postAttendence = async (req, res, next) => {
    try {
        const { date, student } = req.body;
        // const dates = await Date.findOne({ where: { date: date } });
        // console.log(dates);
        // if (dates) {
        //     return res.status(409).json({ success: false, msg: 'you cannot put a date twice' })
        // }

        // const ress = await Date.create({ date: date });
        for (const s of student) {
            // console.log(s.name, s.status);
            const result = await Attendence.create({
                name: s.name,
                attendenceStatus: s.status,
                date: date
            })
            console.log(result);
        }
        // console.log(result);
        // console.log(ress);
        // console.log(req.body.date);
        res.status(200).json({ student });
    } catch (Er) {
        console.log(Er);
        res.status(500).json({ success: false })
    }
}
exports.getAttendenceList = async (req, res, next) => {
    try {
        console.log(typeof (req.params.date));

        // const date = "2024-02-13"
        const data = await Attendence.findAll({
            where: {
                date: req.params.date
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        // if(data)
        for (const a of data) {
            console.log(typeof (a.dataValues.date));
        }
        res.status(200).json(data)
    } catch (Er) {
        console.log(Er);
        res.status(500).json({ success: false })
    }
}