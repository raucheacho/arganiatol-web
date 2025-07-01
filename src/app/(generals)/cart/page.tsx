"use client";
import Button from "@/components/ui/button-argan";
import { ChevronRight, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  // const { items, cartTotal, totalItems } = useCartStore();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Hair Serum",
      price: 73.0,
      quantity: 1,
      image: "/assets/images/WT5A83572.webp",
    },
    {
      id: 2,
      name: "Hair Serum",
      price: 73.0,
      quantity: 1,
      image: "/assets/images/WT5A83572.webp",
    },
    {
      id: 3,
      name: "Hair Serum",
      price: 73.0,
      quantity: 1,
      image: "/assets/images/WT5A83572.webp",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [shippingType, setShippingType] = useState("free");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E5BC38" }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-black mb-8">
          <span className="font-medium">Home</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="font-medium">Cart</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="py-4 border-b-2 border-black">
                  <div className="flex items-center">
                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mr-4 text-black hover:text-red-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col space-y-2 flex-grow">
                      <div className="flex items-center justify-between">
                        {/* Product Image */}
                        <div className="w-20 h-20 lg:mr-4 flex-shrink-0 bg-amber-100">
                          <Image
                            src={item.image}
                            width={100}
                            height={100}
                            alt=""
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-grow hidden lg:block">
                          <h3 className="font-bold text-gblack">{item.name}</h3>
                        </div>

                        {/* Price */}
                        <div className="text-black font-medium ">
                          ${item.price.toFixed(2)}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center border border-black  lg:ml-5">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-black/20 ml-1 hover:bg-opacity-10"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 max-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-black/20 mr-1 hover:bg-opacity-10"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Line Total */}
                        <div className="text-black font-medium min-w-[4rem] text-right">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      {/* Product Details */}
                      <div className="flex-grow lg:hidden block">
                        <h3 className="font-bold text-gblack">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon and Update Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full px-4 py-3 border-b-2 border-black bg-transparent placeholder-black focus:outline-none focus:border-black"
                />
              </div>
              <button className="px-6 py-3 bg-black text-white  hover:bg-black transition-colors">
                Apply coupon
              </button>
            </div>

            <button className="mt-4 px-6 py-2 border border-black text-black  hover:bg-black hover:text-white transition-colors">
              Update cart
            </button>
          </div>

          {/* Cart Totals Section */}
          <div className="lg:col-span-1 space-y-6 flex flex-col">
            <div className="-lg p-6" style={{ backgroundColor: "#FFF6DA" }}>
              <h2 className="text-xl font-semibold text-black mb-6">
                Cart totals
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between items-center py-3 border-b border-gray-300">
                <span className="text-black">Subtotal</span>
                <span className="font-medium text-black">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {/* Shipping */}
              <div className="py-4 border-b border-gray-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-black">Shipping</span>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipping"
                      value="free"
                      checked={shippingType === "free"}
                      onChange={(e) => setShippingType(e.target.value)}
                      className="mr-3"
                    />
                    <span className="text-black">Free shipping</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipping"
                      value="paid"
                      checked={shippingType === "paid"}
                      onChange={(e) => setShippingType(e.target.value)}
                      className="mr-3"
                    />
                    <span className="text-black">Paid shipping</span>
                  </label>
                </div>
                <div className="mt-3 text-sm text-black">
                  Shipping to Annabelle
                </div>
                <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                  Change address
                </button>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-4 text-lg font-semibold">
                <span className="text-black">Total</span>
                <span className="text-black">${total.toFixed(2)}</span>
              </div>

              {/* Delivery Info */}
              <div className="text-xs text-black text-center mb-4">
                Estimated delivery timeframe: 6-8 business days (does not
                include weekends and holidays)
              </div>
              {/* Payment Methods */}
            </div>

            <Button size="full" variant="light">
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
