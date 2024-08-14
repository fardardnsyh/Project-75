const notFoundMiddleware = (req, res) => res.status(404).send('Route does not Exist');

export default notFoundMiddleware;
