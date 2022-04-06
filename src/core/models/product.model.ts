export interface IProduct {
    product_id: number;
    name: string;
    description: string;
    quantity: number;
    initial_price: number;
    type: string;
    avatar: IAvatar;
    other_file: IOtherFile;
    additional_photos: IAdditionalPhoto;
    created_by: ICreatedBy;
    json_nft_data: IJonNFTData;
    json_nft_link: string;
    tx_status: string;
    created_at: string;
    updated_at: string;
    quantity_nfts_created: number;
    on_main_page: boolean;
    is_wearable: boolean;
    latest_price: number;
    quantity_available: number;
}

interface IAvatar {
    original: string;
    compressed: string;
}

interface IOtherFile {
    original: string;
}

interface IAdditionalPhoto {
    original: string;
    compressed: string;
}

interface ICreatedBy {
    user_id: number;
    display_name: string;
    public_address: string;
    custom_url: string;
    image: IImage;
}

interface IImage {
    original: string;
    compressed: string;
}

interface IJonNFTData {
    name: string;
    image: string;
    description: string;
    external_url: string;
    attributes: IAttribute;
}

interface IAttribute {
    value: string;
    trait_type: string;
}
