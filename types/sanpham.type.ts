export interface Stat {
    title: string;
    value: number;
    sub: string;
    color: string;
    icon: string;
}

export interface ProductAPI {
    Id_product: number;
    Name_product: string;
    Quantity: number;
    Size: string | null;
    Price: number;
    Sale_Price: number | null;
    Description: string | null;
    Usage_Instructions: string | null;
    Ingredients: string | null;
    Status: number;
    Id_category_product: number;
    Id_brand: number;
    Category_Name: string;
    Brand_Name: string;
    Thumbnail?: string;
    Images?: string[];
}

export interface ProductRowData {
    name: string;
    sku: string;
    category: string;
    price: string;
    sale: string;
    stock: number;
    status: "active" | "low" | "out" | "expire";
    thumbnail?: string;
}