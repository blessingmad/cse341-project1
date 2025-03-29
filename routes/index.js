const router = require ('express').Router(); // Import Express Router

router.use('/', require('./swagger')); // 

router.get('/',(req, res) => {
    //swagger.tag=['Users']
    res.send ('Hello World');});

router.use('/users', require('./users'));

module.exports = router;