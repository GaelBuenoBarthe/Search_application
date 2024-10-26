import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Dictionnaire des images et emblèmes par nom de vaisseau
    const starshipImages = {
        "CR90 corvette": {
            image: "https://64.media.tumblr.com/cdd22d181a0ec1c9a0788bb44e38c5fe/tumblr_ohcuovgfma1ujrjg9o1_1280.jpg",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Rebel_Alliance_logo.svg"
        },
        "Star Destroyer": {
            image: "https://www.blacksbricks.de/images/product_images/original_images/stardestrrevsl1.jpg",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Emblem_of_the_First_Galactic_Empire.svg"
        },
        "Millennium Falcon": {
            image: "https://images.bigbadtoystore.com/images/p/full/2017/11/96ccd4dd-4418-4777-a941-1d82f60813ed.jpg",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Rebel_Alliance_logo.svg"
        },
        "Death Star": {
            image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Death_star1.png",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Emblem_of_the_First_Galactic_Empire.svg"
        },
        "X-wing": {
            image: "https://preview.redd.it/4wfe6z212gg71.jpg?auto=webp&s=b16cbdf12c2d1ea0970909981a856f30f1ddbae1",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Rebel_Alliance_logo.svg"
        },
        "Y-wing": {
            image: "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C24%2C1536%2C768",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Rebel_Alliance_logo.svg"
        },
        "TIE Advanced x1": {
            image: "https://www.starwars-universe.com/images/encyclopedie/vaisseaux_vehicules/images_v6/tie_advanced_imv6.jpg",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Emblem_of_the_First_Galactic_Empire.svg"
        },
        "Executor": {
            image: "https://www.starwars-universe.com/images/encyclopedie/vaisseaux_vehicules/images_v6/executor_imv6.jpg",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Emblem_of_the_First_Galactic_Empire.svg"
        },
        "Rebel transport": {
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFuU8a1SAbYGt_OcPa0KG5Vys6nalmiTVv1bDVD4YLicXfDa8_utaT29K2OFO6Uqg5itC3JyKn9LGPxBBXGpg247FErYMpNOe-HH17ynZ_vGH8E7Yi6amxrlcCawilj6drSPydWJExTh4/s1600/Rebel_transport_box_art.jpg",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Rebel_Alliance_logo.svg"
        },
        "Sentinel-class landing craft": {
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/657811c3-939d-4d1e-8fa5-d1adbf999420/dg1s6x0-f1adfeea-c3a8-429e-ae9b-a377ee5b5b4a.jpg/v1/fill/w_1192,h_670,q_70,strp/sentinel_class_landing_craft_in_nebula_by_ravendeviant_dg1s6x0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNjU3ODExYzMtOTM5ZC00ZDFlLThmYTUtZDFhZGJmOTk5NDIwXC9kZzFzNngwLWYxYWRmZWVhLWMzYTgtNDI5ZS1hZTliLWEzNzdlZTViNWI0YS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Uly82YY_Wyql555wkGLlvFj_y-7_7B-yyC0i-Af0hKI",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Emblem_of_the_First_Galactic_Empire.svg"
        }
    };

    const handleSearch = async (e) => {
        if (e.key === 'Enter') {
            const response = await axios.get(`http://localhost:8080/api/search?query=${query}`);
            setResults(response.data.results);
        }
    };

    return (
        <div className="rounded-lg p-4 bg-gray-800 text-white w-full max-w-2xl">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="border p-2 w-full mb-4 bg-gray-800 text-white rounded-lg"
                placeholder="Search for starships..."
            />
            {results.length > 0 && (
                <div className="results-container">
                    {results.map((result) => {
                        const starshipData = starshipImages[result.name] || {};

                        return (
                            <div key={result.name} className="border-b p-2 flex items-center space-x-4 bg-gray-800 text-white">
                                <img
                                    src={starshipData.image || "https://via.placeholder.com/150"}
                                    alt={`${result.name} image`}
                                    className="w-24 h-24 object-cover"
                                />
                                <div className="flex-1">
                                    <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">
                                        {result.name}
                                    </a>
                                    <div className="flex justify-between">
                                        <span>Manufacturer: {result.manufacturer}</span>
                                        <span>Crew: {result.crew}</span>
                                    </div>
                                </div>
                                <img
                                    src={starshipData.logo || "https://via.placeholder.com/50"}
                                    alt={`${result.name} emblem`}
                                    className="w-12 h-12 object-cover"
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SearchComponent;