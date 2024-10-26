package diginamic.m052024.search_application.controller;

import diginamic.m052024.search_application.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/search")
@CrossOrigin(origins = "*")
public class SearchController {

    @Autowired
    private SearchService searchService;

    @GetMapping
    public String search(@RequestParam String query) {
        return searchService.search(query);
    }
}