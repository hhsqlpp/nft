import React, { FC } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { IProduct } from '../../core/models/product.model';
import fetchProducts from '../../core/redux/actions/products';
import ProductItem from '../ProductItem';
import cls from './index.module.scss';

const Products: FC = () => {
    const { products, loading } = useTypedSelector((state) => state.products);
    const dispatch = useDispatch();
    const [isCheckboxActive, setIsCheckboxActive] = useState<boolean>(false);
    const [productsList, setProductsList] = useState<IProduct[]>([]);

    const toggleCheckbox = () => setIsCheckboxActive(!isCheckboxActive);

    const filterProducts = () => {
        if (isCheckboxActive) {
            const filteredProducts = productsList.filter(
                (product) => product.quantity_available > 0,
            );

            setProductsList(filteredProducts);
        } else {
            setProductsList(products);
        }
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    useEffect(() => {
        setProductsList(products);
    }, [products]);

    useEffect(() => {
        filterProducts();
    }, [isCheckboxActive]);

    return (
        <div className={cls.products}>
            <h3 className={cls.products_title}>Explore</h3>
            <p className={cls.products_desc}>Buy and sell digital fashion NFT art</p>
            <input
                id='filter'
                type='checkbox'
                defaultChecked={isCheckboxActive}
                onClick={toggleCheckbox}
            />
            <label htmlFor='filter'>Filter by quantity_available {'>'} 0</label>
            {!loading ? (
                <div className={cls.products_list}>
                    {products.map((product: IProduct) => {
                        return <ProductItem product={product} key={product.product_id} />;
                    })}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Products;
