package fi.tieto.tsjavaworkshop.controllers;

import fi.tieto.tsjavaworkshop.model.Show;
import fi.tieto.tsjavaworkshop.repository.ShowsRepository;
import java.util.List;
import javax.validation.Valid;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ShowController {

  @Autowired
  private ShowsRepository repository;

  @RequestMapping("/")
  public String greeting() {
    return "JAVA: Hello ts/java workshop participant!";
  }

  @RequestMapping(value = "/shows", method = RequestMethod.GET)
  public List<Show> getAllShows() {
    return repository.findAll();
  }

  @RequestMapping(value = "/show", method = RequestMethod.POST)
  public Show addShow(@Valid @RequestBody Show show) {
    show.set_id(ObjectId.get());
    repository.save(show);
    return show;
  }

  @RequestMapping(value = "/show/{id}", method = RequestMethod.GET)
  public Show getShowById(@PathVariable("id") ObjectId id) {
    return repository.findBy_id(id);
  }

  @RequestMapping(value = "/show/{id}", method = RequestMethod.PUT)
  public String modifyShowById(@PathVariable("id") ObjectId id, @Valid @RequestBody Show show) {
    show.set_id(id);
    repository.save(show);
    return "Successfully updated show!";
  }

  @RequestMapping(value = "/show/{id}", method = RequestMethod.DELETE)
  public String deletePet(@PathVariable ObjectId id) {
    repository.delete(repository.findBy_id(id));
    return "Successfully Deleted show";
  }


}

