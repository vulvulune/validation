import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';
import {TableOfContents} from "./table-of-contents";

export class App {
  static inject() { return [Router, TableOfContents]; }
  constructor(router, tableOfContents) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia Validation';
      config.map(
        tableOfContents.createRoutes()
      );
      config.mapUnknownRoutes(instruction => {
        let example = instruction.fragment.toLowerCase();
        instruction.config.moduleId = example;
      });
    });
    this.iframe = this.inIframe();
  }

  inIframe () {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
}
