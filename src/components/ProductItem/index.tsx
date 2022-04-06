import React, { FC } from 'react';
import { IProduct } from '../../core/models/product.model';
import productImage from '../../assets/img/productImage.png';
import cls from './index.module.scss';

interface IProps {
    product: IProduct;
}

const ProductItem: FC<IProps> = ({ product }) => {
    return (
        <div className={cls.products_list__item}>
            <div className={cls.products_list__item_img_wrap}>
                <img src={productImage} alt={product.name} />
                <div className={cls.products_list__item_author}>
                    <p className={cls.products_list__item_author_title}>created by</p>
                    <p className={cls.products_list__item_author_name}>
                        {product.created_by.display_name}
                    </p>
                </div>
                <p className={cls.products_list__item_name}>{product.name}</p>
            </div>
            <div className={cls.products_list__item_info}>
                <div className={cls.products_list__item_info_item}>
                    <p className={cls.products_list__item_info_item_title}>avaible</p>
                    <p className={cls.products_list__item_info_item_desc}>
                        {product.quantity_available} of {product.quantity_nfts_created}
                    </p>
                </div>
                <div className={cls.products_list__item_info_item}>
                    <p className={cls.products_list__item_info_item_title}>price</p>
                    <p className={cls.products_list__item_info_item_desc}>
                        {product.initial_price} ETH
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
