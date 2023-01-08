
export const CreateProduct = ({ onChangeForm, createProduct }) => {
    return (
        <div className="container">
            <div className="col-md-12 mrgbntm">
                <h5>Create a new product</h5>
                <form>
                    <div className="row">
                        <div className="form-group col-md-10">
                            <label>Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="name" id="name" placeholder="Product's name" />
                        </div>
                        <div className="form-group col-md-10">
                            <label>Quntity</label>
                            <input type="number" onChange={(e) => onChangeForm(e)} className="form-control" name="quantity" id="quantity" placeholder="Quantity" />
                        </div>
                        <div className="form-group col-md-10">
                            <label>Price</label>
                            <input type="number" onChange={(e) => onChangeForm(e)} className="form-control" name="price" id="price" placeholder="Price" />
                        </div>
                        <div className="form-group col-md-10">
                            <label>Description</label>
                            <textarea onChange={(e) => onChangeForm(e)} className="form-control" name="description" id="description" placeholder="Product's description" rows="4"></textarea>
                        </div>
                    </div>
                    <button type="button" onClick={(e) => createProduct()} className="btn btn-success">Create</button>
                </form>
            </div>
        </div>
    )
}
