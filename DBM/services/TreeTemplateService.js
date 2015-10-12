/**
 * Created by rchouhan on 9/5/15.
 */
var getTreeMenuData;

var loadTreeData = function() {
    return $.ajax({
        type: 'GET',
        url: 'data/treeData.json',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json'
    });
}

var removeSelectedTreeNodes = function(nodes){
    return $.ajax({
        type: 'DELETE',
        url: 'hortonworks/sqoop/removeSelectedTreeNodes/{nodes}',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        traditional: true,
        data: nodes
    });
}

var addSelectedTreeNodes = function(nodes){
    return $.ajax({
        type: 'POST',
        url: '',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        traditional: true,
        data: nodes
    });
}
