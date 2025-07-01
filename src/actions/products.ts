"use server";
import WooCommerceRestApi from "woocommerce-rest-ts-api";

const WooCommerce = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_SITE_URL as string,
  consumerKey: process.env.WC_CONSUMER_KEY as string,
  consumerSecret: process.env.WC_CONSUMER_SECRET as string,
  version: "wc/v3",
});

export const getProducts = async () => {
  const products = await WooCommerce.get("products");
  return products.data;
};

export const getProduct = async (id: string) => {
  const product = await WooCommerce.get(`products`, { id: parseInt(id) });
  return product.data;
};
