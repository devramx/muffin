

function submitdata() {
    console.log("Submitting data");
    var myForm = new FormData();
    // myForm.append("key","somekey");
    // myForm.append("value","somevalue");
    var key = document.getElementById("username").value;
    var val = document.getElementById("useracc").value;

    myForm.append("key", key);
    myForm.append("value", val);
    var xhrform = new XMLHttpRequest();
    xhrform.open('POST', 'http://localhost:3001/muffin', true);
    xhrform.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrform.send(JSON.stringify({ apikey: key, value: val }));
}
