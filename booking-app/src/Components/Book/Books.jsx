import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";
import { Box, CircularProgress } from "@mui/material";

export default function Books() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  const url = "http://localhost:5050/book";

  const fetchHandler = async () => {
    return await axios.get(url).then((res) => res.data);
  };

  useEffect(() => {
    fetchHandler().then((data) => {
      setBooks(data.books);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <ul>
          {books &&
            books.map((book, n) => (
              <li key={n}>
                <Book
                  name={book.name}
                  author={book.author}
                  description={book.description}
                  image={book.image}
                  price={book.price}
                  _id={book._id}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
