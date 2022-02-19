var google_TXTads_cssSelectors = [".o-banner__outer,.js-article-ribbon,.o-ads"];
var adsKill = document.querySelectorAll( google_TXTads_cssSelectors );

var i;
for (i=0; i< adsKill.length; i++){
adsKill[i].style.display = "none";
}
