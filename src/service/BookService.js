import http from "../Http-common";

class BookService {

    getAll() {
        return http.get("/api/book");
    }

    createBook(book) {
        return http.post("/api/book",book);
    }

    getBookById(id) {
        return http.get(`/api/book/${id}`);
    }
    removeBookById(id) {
        return http.delete(`/api/book/${id}`);
    }

    updateBookById(id,book) {
        return http.put(`/api/book/${id}`,book);
    }
}

export default new BookService();
