package fi.tieto.tsjavaworkshop.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "shows")
public class Show {
  @Id
//  private String id;
  private ObjectId _id;

  private String language;
  private String description;
  private Double score;

  public Show() {}

  public Show(ObjectId _id, String language, String description, Double score) {
    this._id = _id;
    this.language = language;
    this.description = description;
    this.score = score;
  }


//  public String getId() {
//    return id;
//  }
//
//  public void setId(String id) {
//    this.id = id;
//  }

  public String get_id() { return _id.toHexString(); }
  public void set_id(ObjectId _id) { this._id = _id; }

  public String getLanguage() {
    return language;
  }

  public void setLanguage(String language) {
    this.language = language;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Double getScore() {
    return score;
  }

  public void setScore(Double score) {
    this.score = score;
  }

  @Override
  public String toString() {
    return "Shows{" +
        "id='" + _id.toHexString() + '\'' +
        ", language='" + language + '\'' +
        ", description='" + description + '\'' +
        ", score=" + score +
        '}';
  }
}
