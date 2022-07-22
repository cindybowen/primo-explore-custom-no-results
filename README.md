# primo-explore-custom-no-results
Add custom text when no records retrieved. (Original code includes link to expand results to PCI, which has been removed for this version.)

The OTB page in the Primo NUI for a no results search looks like this:

![No results OTB](no_results_otb.png?raw=true "No results OTB")

The custom js in this package allows you to adjust the text and other links you provide when a user isn't successful in their search.  The js has been altered using the Ex Libris tool for bringing custom js into compliance with Angular 1.8, as linked from the [upgrade announcement](https://knowledge.exlibrisgroup.com/Primo/Product_Materials/Announcements/Preparing_for_the_Upgrade_to_Angular_1.8_in_Primo%2F%2FPrimo_VE).

Here's how they customized at [St. Olaf College](https://stolaf-primo.hosted.exlibrisgroup.com/primo-explore/search?institution=01BRC_SOC&vid=01BRC_SOC&mode=Basic&displayMode=full&bulkSize=10&highlight=true&dum=true&query=any,contains,saj%20eofi&displayField=all&search_scope=default_scope&pcAvailabiltyMode=false&tab=library_collections):

![No results customized](no_results_custom.png?raw=true "No results customized")

If you use the HTML as given in the Angular component, you'll probably want to suppress the OTB tile in the CSS:

```css
prm-no-search-result > md-card {
    display:none;
}
```

