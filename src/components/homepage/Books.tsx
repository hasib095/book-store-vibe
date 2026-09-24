import React from "react";
import BooksCard, { type Book } from "../shared/BooksCard";

const getBooks = async (): Promise<Book[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data: Book[] = await res.json();
  return data;
};

const Books = async () => {
  const booksdata = await getBooks();
  //console.log(booksdata);

  return (
    <section className="container mx-auto my-[70px] ">
      <h2 className="text-5xl font-bold text-center mb-6">Books</h2>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
  {
  booksdata.map((book) => (
    <BooksCard key={book.bookId} book={book} />
  ))
  }
</div>
    </section>
  );
};

export default Books;
