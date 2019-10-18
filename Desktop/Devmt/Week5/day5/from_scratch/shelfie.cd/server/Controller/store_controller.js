module.exports ={
    add:(req, res, next) => {
        const db =req.app.get('db')
        const  {product_name, price, image_url} = req.body
        db.add_product([product_name, price, image_url]).then((store) => res.status(200).send(store)).catch(err => {
            res.status(500).send({errorMessage:'son of a biscut'})
        })
    },
    getOne:(req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.get_product(id).then(store => {
            res.status(200).send(store)
        })
    },
    getAll:(req, res, next) =>{
        const db = req.app.get('db')

        db.get_products().then((store) => res.status(200).send(store)).catch(err => {
            res.status(500).send({errorMessage:'blewup'})
          
        })
    }, 
    deleteIt:(req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product(id).then((store) => {
            res.status(200).send(store)
        })
        
    },
    updateIt:(req, res, next) => {
        const {price} = req.query;
        const {id} = req.params
        const db = req.app.get('db')
        db.update_product([id, price]).then(store =>{
            res.status(200).send(store)
        })
    }
}