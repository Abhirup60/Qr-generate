
function generateQRCode() {
    var text = document.getElementById("text").value;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 128,
        height: 128
    });
}
