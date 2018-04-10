
const root = router => {
    router.get('/', (req, res, next) => {
        res.send('Hello from root!');
        next();
    });
}

module.exports = root;
