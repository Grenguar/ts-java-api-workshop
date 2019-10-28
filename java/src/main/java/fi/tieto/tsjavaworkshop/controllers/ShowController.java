package fi.tieto.tsjavaworkshop.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShowController {

  @RequestMapping("/")
  public String greeting() {
    return "Hello ts/java workshop participant!";
  }
}
