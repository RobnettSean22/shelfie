module.exports ={
    add:(req, res, next) => {
        const db =req.app.get('db')
        const  {product_name, price, image_url} = req.body
        db.add_product([product_name, price, image_url]).then(() => res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage:'son of a biscut'})
        })
    },
    getOne:(req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.get_product(id).then((store) => res.status(200).send(store)).catch(error => {
            res.status(500).send('what the french toast')
            console.log(error)
        })
    },
    getAll:(req, res, next) =>{
        const db = req.app.get('db')

        db.get_products().then((store) => res.sendStatus(200).send(store)).catch(err => {
            res.status(500).send({errorMessage:'blewup'})
          
        })
    }, 
    deleteIt:(req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product(id).then(() => res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage:'bent af'})
        })
    }
}