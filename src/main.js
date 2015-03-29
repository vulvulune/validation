export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('./resources/index')
    .plugin('aurelia-validation');




  aurelia.start().then(a => a.setRoot('app', document.body));
}
