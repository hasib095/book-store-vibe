"use client";
import React, { useContext } from "react";
import { Book } from "../shared/BooksCard";
import { BooksContext } from "@/context/BooksContext";
import { Bounce, toast } from "react-toastify";

const WishListButton = ({ book }: { book: Book }) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("WishListButton must be used inside BooksProvider");
  }

  const { wishlist, setWishlist } = context;

  const handleAddToWishList = () => {
    setWishlist([...wishlist, book]);
    toast("Add to Wistlist", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <button
      className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
      onClick={() => handleAddToWishList()}
    >
      Wishlist
    </button>
  );
};

export default WishListButton;
