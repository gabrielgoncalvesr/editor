function format(element) {
    const formatType = element.getAttribute('id');

    let textSelected = "";
    if (window.getSelection) {
        textSelected = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        textSelected = document.selection.createRange().text;
    }

    if (textSelected == undefined || textSelected == null || textSelected == "") {
        return;
    }

    let elementFormatted = "";
    switch (formatType) {
        case "header":
            elementFormatted = "<h1>" + textSelected + "</h1>";
            break;
        case "bold":
            elementFormatted = "<strong>" + textSelected + "</strong>";
            break;
        case "italic":
            elementFormatted = "<i>" + textSelected + "</i>";
            break;
        case "code":
            elementFormatted = "<code>" + textSelected + "</code>";
            break;
        case "list":
            elementFormatted = "<h1>" + textSelected + "</h1>";
            break;
        case "underline":
            elementFormatted = "<u>" + textSelected + "</u>";
            break;
        case "quote":
            elementFormatted = "<q>" + textSelected + "</q>";
            break;
        case "link":
            const linkSelected = prompt("link to text:", "");

            elementFormatted = "<a src=" + linkSelected + ">" + textSelected + "</a>";
            break;
    }

    let contentEditable = document.getElementById("content-editable");
    let elementsContentEditable = contentEditable.innerHTML;
    elementsContentEditable = elementsContentEditable.replace(textSelected, elementFormatted);
    contentEditable.innerHTML = elementsContentEditable;
}