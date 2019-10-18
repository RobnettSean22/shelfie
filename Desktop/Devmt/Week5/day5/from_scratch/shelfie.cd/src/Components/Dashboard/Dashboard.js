import React, { Component } from 'react'
import axios from 'axios'


class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 allProducts:[]
        }
    }

    componentDidMount(){
        this.getAll()
    }

    getAll(){
        axios.get(`/api/product`).then(response => {
            this.setState({
                allProducts:response.data
            })
        })
    }

    render() {
        const {allProducts} = this.state
        const mapProducts = allProducts.map((stuff, index) => {
            return(
                <div key = {index}>{stuff}</div>
            )
        })
        return (
            <div>
                {mapProducts}
            </div>
        )
    }
}

export default Dashboard
