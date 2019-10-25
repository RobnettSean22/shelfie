module.exports = {
    readListings: (req, res, next) => {
        const db = req.app.get('db')
        db.read_listings().then((homes) => res.status(200).send(homes)).catch(err => {
            res.status(500).send({errorMessage:'blind'})
        }) 
    },

    // readListing: (req, res, next) => {},

    // createListing: (req, res, next) => {},

    // editListing: (req, res, next) => {},

    // deleteListing: (req, res, next) => {}

}