const usersRouter = require('./user');
const tableRouter = require('./table')

module.exports = app => {
    app.use('/api/user', usersRouter);
    app.use('/api/table', tableRouter);
}
