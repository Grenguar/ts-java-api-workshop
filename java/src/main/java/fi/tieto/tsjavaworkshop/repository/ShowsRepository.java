package fi.tieto.tsjavaworkshop.repository;

import fi.tieto.tsjavaworkshop.model.Show;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ShowsRepository extends MongoRepository<Show, String> {
  Show findBy_id(ObjectId _id);
}
