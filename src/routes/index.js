const usersRouter = require('./api/user');
const tableRouter = require('./api/table')

module.exports = app => {
    app.use('/api/user', usersRouter);
    app.use('/api/table', tableRouter);
}
