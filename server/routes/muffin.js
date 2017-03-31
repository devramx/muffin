exports.base = function(req, res) {

    res.send({ msg: "Welcome to muffin" });
}

exports.setVal = function(req, res) {

    var id = req.params.id;
    var n = req.params.key;
    var v = req.params.val;

    if (entries[id]) {
        entries[id].push({ api_id: id, key: n, value: v });
    } else {
        entries[id] = [{ api_id: id, key: n, value: v }];
    }

    res.send({
        api_id: id,
        key: n,
        value: v
    });
}

exports.getKV = function(req, res) {
    var id = req.params.id;
    var t = entries[id];
    res.send(t);
}

exports.getVal = function(req, res) {
    var id = req.params.id;
    var k = req.params.key;
    var key;
    var val = "NULL";
    if (entries[id]) {
        var t;
        entries[id].find(function(v, i) {
            if (v['key'] == k) {
                key = v['key'];
                val = v['value'];
            }
        });
        res.send({ key: k, value: val });
    } else {
        res.send({ "ERR": "Id not found" });
    }
}