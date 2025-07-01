"use client";
import { useCartStore } from "@/stores/cart-store";
import { useState } from "react";

const SetQuantity = ({
  currProductQuantity,
}: {
  currProductQuantity: number;
}) => {
  const [quantity, SetQuantity] = useState(1);
  const { items: cartItems } = useCartStore();
  console.log(cartItems, currProductQuantity);

  return (
    <input
      type="number"
      value={quantity}
      min="1"
      className="w-16 border border-black px-2 py-1 h-10 bg-transparent"
    />
  );
};

export default SetQuantity;
