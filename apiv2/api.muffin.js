// Muffin api !
// Does basic CRUD

api_key = "";
res = ""


// shameless copy from stackoverflow !
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

// Register
function register() {
    api_key = "QW12"; //randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
}


// Create
function muffin_create(key, val) {
    console.log("muffin_create");
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3001/muffin/v2/' + api_key + "/" + key + "/" + val, true);
    xhr.setRequestHeader("x-header1", "arbtext");
    xhr.send({});
}

// Read
function muffin_read(key) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
            res = xhr.responseText;
        }
    };
    xhr.open('GET', 'http://localhost:3001/muffin/v2/' + api_key + "/" + key, false);
    xhr.send();
}

// Update
function muffin_update(key, val) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3001/muffin/v2/' + api_key + "/" + key + "/" + val, true);
    xhr.sendRequestHeader("headerx", "sometxt");
    xhr.send({});
}



// Delete #TODO !!