export class TableOfContents{

  constructor(){
    this.examples = ["Intro", "Validators", "Logical Operators"]; //TODO can't we just enumerate the examples folder? :(
  }

  createRoutes(){
    var routes = [];
    for(let i = 0; i < this.examples.length; i++)
    {
      var route = [this.examples[i].toLowerCase().replace(' ', '-')];
      if(i == 0)
        route.unshift('');
      routes.push(
        { route : route,
          moduleId : './examples/' + this.examples[i].toLowerCase().replace(' ', '-') + '/index',
          nav : true ,
          title : this.examples[i]
        });
    }
    return routes;
  }
}
