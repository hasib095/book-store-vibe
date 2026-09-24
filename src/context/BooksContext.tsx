"use client";

import { createContext, type ReactNode, useState } from "react";
import type { Book } from "@/components/shared/BooksCard";

type BooksContextValue = {
    readBooks: Book[];
    setReadBooks: React.Dispatch<React.SetStateAction<Book[]>>;
    wishlist: Book[];
    setWishlist: React.Dispatch<React.SetStateAction<Book[]>>;
};

export const BooksContext = createContext<BooksContextValue | null>(null);

const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<Book[]>([]);
    const [wishlist, setWishlist] = useState<Book[]>([]);

    const shareData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
    };

    return (
        <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
    );
};

export default BooksProvider;