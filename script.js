let contentEditable;

function initDoc() {
    contentEditable = document.getElementById("content-editable");
}

function formatDoc(command, value) {
    document.execCommand(command, false, value);
}

function printDoc() {
    let printWindow = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
    printWindow.document.open();
    printWindow.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + contentEditable.innerHTML + "<\/body><\/html>");
    printWindow.document.close();
}