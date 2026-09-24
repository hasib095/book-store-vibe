"use client";

import ReadbookListCart from "@/components/addToPageCard/ReadbookListCart";
import WishListCard from "@/components/addToPageCard/WishListCard";
import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";

const ListedBookpage = () => {
  const context = useContext(BooksContext);

  const { readBooks,wishlist } = context;

  return (
    <div className="container mx-auto py-5">
      <h2 className="my-4 rounded-3xl bg-amber-100 py-16 text-center text-4xl font-bold">
        Listed books
      </h2>

      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          <div className="space-y-3">
            {
            readBooks.length > 0 ? (
              readBooks.map((book) => (
                <ReadbookListCart key={book.bookId} book={book} />
              ))
            ) : (
              <p className="text-center text-lg font-semibold">
                No read books found
              </p>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
           {
            readBooks.length > 0 ? (
              wishlist.map((book) => (
                <WishListCard key={book.bookId} book={book} />
              ))
            ) : (
              <p className="text-center text-lg font-semibold">
                No wishlist books found
              </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ListedBookpage;
