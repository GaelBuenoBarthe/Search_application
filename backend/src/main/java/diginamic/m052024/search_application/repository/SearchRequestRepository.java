package diginamic.m052024.search_application.repository;

import diginamic.m052024.search_application.model.SearchRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SearchRequestRepository extends MongoRepository<SearchRequest, String> {
}