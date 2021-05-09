package com.admin.service.impl;

import com.admin.model.Book;
import com.admin.repository.BookRepository;
import com.admin.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceimpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> findAll() {
        return (List<Book>) bookRepository.findAll();
    }

    public Book findOne(Long id) {
        return bookRepository.findById(id).get();
    }

    public void removeOne(Long id) {
        bookRepository.deleteById(id);
    }
}
