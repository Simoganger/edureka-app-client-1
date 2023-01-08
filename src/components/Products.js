import { Component } from "react";

export const Products = ({ products, getAllProducts }) => {

    if (products.length === 0) {
        return(
        <div className="no-data">
            <h5>No product in your database</h5>
            <div className="btn">
                <button type="button" onClick={(e) => getAllProducts()} className="btn btn-success">Get all products</button>
            </div>
        </div>
        )
    }
    

    const ProductRow = (product, index) => {
        return(
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
            </tr>
        )
    }

    const productTable = products.map((product, index) => ProductRow(product, index))

    return (
        <div className="container">
            <h4>Available products</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {productTable}
                </tbody>
            </table>
            <div>
                <button type="button" onClick={(e) => getAllProducts()} className="btn btn-success">Refresh product list</button>
            </div>
        </div>
    )

}