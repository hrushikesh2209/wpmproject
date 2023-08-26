/* GET home page */
const homelist = (req, res) => {
    res.render('locations-list', { title: 'Loc8r' });
};

/* GET Location Info page */
const locationInfo = (req, res) => {
    res.render('index', { title: 'Location Info' });
};

/* GET Add review page */
const addReview = (req, res) => {
    res.render('index', { title: 'Add review' });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};