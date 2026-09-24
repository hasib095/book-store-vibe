import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/components/shared/BooksCard";

const WishListCard = ({ book }: { book: Book }) => {
  return (
    <div
      key={book.bookId}
      className="flex w-full gap-5 rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition duration-300 hover:shadow-md"
    >
      {/* Image */}
      <div className="flex h-[140px] w-[105px] shrink-0 items-center justify-center rounded-lg bg-gray-100 p-3">
        <div className="relative h-full w-full">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Title */}
        <h2 className="text-base font-bold text-gray-900">{book.bookName}</h2>

        {/* Author */}
        <p className="mt-1 text-xs text-gray-500">
          By: <span className="text-gray-700">{book.author}</span>
        </p>

        {/* Tags + Year */}
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-gray-700">Tag</span>

          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-3 py-1 text-[10px] text-green-600"
            >
              #{tag}
            </span>
          ))}

          <span className="text-gray-400">│</span>

          <span className="text-gray-500">
            ◉ Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

        {/* Publisher + Pages */}
        <div className="mt-2 flex flex-wrap items-center gap-4 text-[10px] text-gray-500">
          <span>♧ Publisher: {book.publisher}</span>

          <span>▧ Page {book.totalPages}</span>
        </div>

        {/* Divider */}
        <div className="my-2 border-t border-gray-100" />

        {/* Bottom */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category */}
          <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-medium text-blue-500">
            Category: {book.category}
          </span>

          {/* Rating */}
          <span className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-medium text-orange-500">
            Rating: {book.rating}
          </span>

          {/* Details */}
          <Link
            href={`/books/${book.bookId}`}
            className="rounded-full bg-green-600 px-4 py-1.5 text-[10px] font-semibold text-white transition hover:bg-green-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
