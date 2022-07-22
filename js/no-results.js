/* Update links in template line below to direct to your Primo server and WorldCat, etc. */
app.component('prmNoSearchResultAfter',{
  bindings: {parentCtrl: '<'},
  controller: 'prmNoSearchResultAfterController',
  template: '<md-card class="default-card zero-margin _md md-primoExplore-theme"><md-card-title><md-card-title-text><span translate="" class="md-headline ng-scope">No records found</span></md-card-title-text></md-card-title><md-card-content><p><span>There are no results matching your search: <i>{{$ctrl.getSearchTerm()}}</i>.<p><span translate="" class="bold-text ng-scope">Suggestions:</span></p><ul><li translate="" class="ng-scope">Make sure that all words are spelled correctly.</li><li translate="" class="ng-scope">Try a different search scope.</li><li translate="" class="ng-scope">Try different search terms.</li><li translate="" class="ng-scope">Try more general search terms.</li><li translate="" class="ng-scope">Try fewer search terms.</li></ul><p><b><a href="https://library.georgetown.edu/ask-us">Ask a librarian for assistance</a></b></p></md-card-content></md-card>'
});	
