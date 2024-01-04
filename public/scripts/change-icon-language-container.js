function changeIconLanguage(originalSrc, originalAlt) {
    var iconLanguage = document.getElementById("icon-language");

    var pathArray = (new URL(originalSrc).pathname.split('/')).slice(2);
    var relativePath = './' + pathArray.join('/');

    var fileName = pathArray[pathArray.length - 1];
    var modifiedFileName = fileName.replace('.svg', '-lightgreen.svg');
    var newSrc = relativePath.replace(fileName, modifiedFileName);

    iconLanguage.classList.add("icon-language-transition-class");

    iconLanguage.src = newSrc; 
    iconLanguage.alt = originalAlt;

    setTimeout(function () {
        iconLanguage.classList.remove("icon-language-transition-class");
    }, 1000);
}
