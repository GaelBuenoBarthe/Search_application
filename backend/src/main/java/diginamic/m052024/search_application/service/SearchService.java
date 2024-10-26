package diginamic.m052024.search_application.service;

import diginamic.m052024.search_application.model.SearchRequest;
import diginamic.m052024.search_application.repository.SearchRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.json.JSONArray;
import org.json.JSONObject;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class SearchService {

    @Autowired
    private SearchRequestRepository searchRequestRepository;

    private final RestTemplate restTemplate = new RestTemplate();
    private final String apiUrl = "https://swapi.dev/api/starships/?format=json&search=";

    public String search(String query) {
        String url = apiUrl + query;
        String response = restTemplate.getForObject(url, String.class);

        // Parse the response to get the starship URL
        JSONObject jsonResponse = new JSONObject(response);
        JSONArray results = jsonResponse.getJSONArray("results");
        for (int i = 0; i < results.length(); i++) {
            JSONObject starship = results.getJSONObject(i);
            String starshipUrl = starship.getString("url");
            starship.put("starshipUrl", starshipUrl);
        }

        // Save search request
        SearchRequest searchRequest = new SearchRequest();
        searchRequest.setQuery(query);
        searchRequest.setTimestamp(LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME));
        searchRequestRepository.save(searchRequest);

        return jsonResponse.toString();
    }
}