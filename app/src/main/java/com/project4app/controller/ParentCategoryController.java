package com.project4app.controller;

import com.project4app.model.ParentCategory;
import com.project4app.service.ParentCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/parentCategorys")
public class ParentCategoryController {
    private final ParentCategoryService parentCategoryService;

    @Autowired
    public ParentCategoryController(ParentCategoryService parentCategoryService) {
        this.parentCategoryService = parentCategoryService;
    }

    @GetMapping
    public List<ParentCategory> getAllParentCategorys() {
        return parentCategoryService.getAllParentCategorys();
    }

    @GetMapping("/{id}")
    public Optional<ParentCategory> getParentCategoryById(@PathVariable(name = "id") Long id) {
        return parentCategoryService.getParentCategoryById(id);
    }  

    @PostMapping
    public ParentCategory createParentCategory(@RequestBody ParentCategory parentCategory) {
        return parentCategoryService.createParentCategory(parentCategory);
    }

    @PutMapping("/{id}")
    public Optional<ParentCategory> updateParentCategory(@PathVariable(name = "id") Long id, @RequestBody ParentCategory updatedParentCategory) {
        return parentCategoryService.updateParentCategory(id, updatedParentCategory);
    }
}
