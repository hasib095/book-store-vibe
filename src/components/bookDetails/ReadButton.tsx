"use client";
import React, { useContext } from "react";
import { Book } from "../shared/BooksCard";
import { BooksContext } from "@/context/BooksContext";
import { Bounce, toast } from "react-toastify";

const ReadButton = ({ book }: { book: Book }) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ReadButton must be used inside BooksProvider");
  }

  const { readBooks, setReadBooks } = context;
 
  const handleReadBooks = () => {
    setReadBooks([...readBooks, book]);
    toast("Add to Readlist", {
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
      onClick={() => handleReadBooks()}
    >
      Read
    </button>
  );
};

export default ReadButton;
