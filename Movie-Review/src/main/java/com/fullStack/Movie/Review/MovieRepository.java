package com.fullStack.Movie.Review;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

// Repository class handles connection between Services class and database

@Repository
public interface MovieRepository extends MongoRepository<Movie,ObjectId>{
    // this provides built in CRUD operation it talks to MongoDB to perform operations 
    // in built functions can be overidden to provide custom implementation

    Optional<Movie> findMovieByImdbId(String imdbId);
    // In spring boot we can form dynamic queries like this using any property name to find individual data

    
}
