import Image from "next/image";

export type Book = {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  rating: number;
  category: string;
  tags: string[];
};

const BooksCard = ({ book }: { book: Book }) => {
  return (
    <div className="h-full">
      <div className="w-full h-full max-w-[440px] rounded-2xl border border-gray-300 p-7 flex flex-col">

        <div className="h-[270px] shrink-0 rounded-2xl bg-gray-100 flex items-center justify-center">
          <Image
            src={book.image}
            alt={book.bookName}
            width={300}
            height={300}
            className="h-[210px] w-[160px] object-contain"
          />
        </div>

        
        <div className="flex gap-3 mt-7 min-h-[42px]">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-5 py-2 text-green-600"
            >
              {tag}
            </span>
          ))}
        </div>

        
        <h2 className="mt-5 text-3xl font-bold font-serif min-h-[72px]">
          {book.bookName}
        </h2>

        
        <p className="mt-4 text-lg text-gray-700 min-h-[28px]">
          By : {book.author}
        </p>

       
        <div className="border-t border-dashed border-gray-300 my-5"></div>

       
        <div className="flex justify-between items-center text-lg mt-auto">
          <span className="text-gray-700">
            {book.category}
          </span>

          <div className="flex items-center gap-3">
            <span>{book.rating.toFixed(2)}</span>

            <span className="text-3xl text-gray-600">
              ☆
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BooksCard;