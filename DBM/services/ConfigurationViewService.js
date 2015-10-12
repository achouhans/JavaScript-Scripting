/**
 * Created by rchouhan on 9/7/15.
 */

var loadDBType = function() {
    return $.ajax({
        type: 'GET',
        url: 'data/dbType.json',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json'
    });
};

var loadSourceType = function() {
    return $.ajax({
        type: 'GET',
        url: 'data/sourceType.json',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json'
    });
};

var loadHiveType = function() {
    return $.ajax({
        type: 'GET',
        url: 'data/hiveType.json',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json'
    });
};

var loadDatabases = function(serverKey){
    return $.ajax({
        type: 'GET',
        url: 'data/databases.json',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: serverKey
    });
};

var loadTables = function(data){
    return $.ajax({
        type: 'GET',
        url: 'data/tables.json',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: data
    });
};

var testForm = function(formData){
    return $.ajax({
        type: 'POST',
        url: '',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        traditional: true,
        data: formData
    });
};

var saveForm = function(formData){
    return $.ajax({
        type: 'POST',
        url: '',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        traditional: true,
        data: formData
    });
};
