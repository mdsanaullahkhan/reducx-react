import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addToCart } from '../redux/actions/cartActions';

const Shop = (props) => {
    const {products, addToCart} = props;
    return (
        <div>
           <h1>This is shop</h1> 
           {
                 products.map(pd => <Product 
                    product = {pd}
                    key = {pd.id}
                    addToCart = {addToCart}
                    ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state =>{
    return {
         products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connect(mapStateToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);