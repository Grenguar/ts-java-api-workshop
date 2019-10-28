package fi.tieto.tsjavaworkshop.controllers;

import java.util.Collections;
import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ShowController {

  @RequestMapping("/")
  public String greeting() {
    return "Hello ts/java workshop participant!";
  }

  @RequestMapping(value = "/shows", method = RequestMethod.GET)
  public List<String> getAllShows() {
    return Collections.emptyList();
  }

  @RequestMapping(value = "/show/{id}", method = RequestMethod.GET)
  public String getShowById(@PathVariable("id") String id) {
    return "Returns one show";
  }

  @RequestMapping(value = "/show/{id}", method = RequestMethod.PUT)
  public String modifyShowById(@PathVariable("id") String id) {
    return "update show";
  }

  @RequestMapping(value = "/show", method = RequestMethod.POST)
  public String addShow() {
    return "Add show";
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public String deletePet(@PathVariable String id) {
    return "Successfully Deleted show";
  }
}
