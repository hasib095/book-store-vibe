import { Book } from "@/components/shared/BooksCard";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async (): Promise<Book[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data: Book[] = await res.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find((book) => Number(book.bookId) === Number(id));

  // If book doesn't exist
  if (!book) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">Book not found</h2>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Main Card */}
      <div className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl md:flex-row">
        {/* Book Image */}
        <div className="flex w-full items-center justify-center bg-gray-100 p-8 md:w-[40%]">
          <div className="relative h-[400px] w-full max-w-[300px]">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Book Information */}
        <div className="w-full p-8 md:w-[60%]">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">{book.bookName}</h1>

          {/* Author */}
          <p className="mt-2 text-gray-500">
            By :{" "}
            <span className="font-medium text-gray-700">{book.author}</span>
          </p>

          <div className="my-5 border-t border-gray-200" />

          {/* Category */}
          <p className="text-sm font-medium text-gray-600">{book.category}</p>

          {/* Description */}
          <div className="mt-5">
            <h3 className="font-semibold text-gray-900">Book Description</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Discover this amazing book and explore its story, characters,
              ideas, and valuable insights.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5">
            <h3 className="mb-3 text-sm font-semibold text-gray-900">Tags</h3>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="my-5 border-t border-gray-200" />

          {/* Rating */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Rating:</span>

            <span className="font-bold text-gray-900">⭐ {book.rating}</span>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">
            <button className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100">
              Read
            </button>

            <button className="rounded-lg bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
