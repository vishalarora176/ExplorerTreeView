var data = '[{"id":"folder_1","type":"folder","title":"Folder 1","content":[{"id":"file_1","type":"file","title":"File 1"},{"id":"file_2","type":"file","title":"File 1"},{"id":"file_3","type":"file","title":"File 1"},{"id":"folder_2","type":"folder","title":"Folder 21","content":[{"id":"folder_25","type":"folder","title":"Folder 25","content":[{"id":"file_356","type":"file","title":"File 356"},{"id":"file_366","type":"file","title":"File 366"}]},{"id":"folder_24","type":"folder","title":"Folder 24","content":[{"id":"file_352","type":"file","title":"File 352"},{"id":"file_363","type":"file","title":"File 363"}]}]}]},{"id":"folder_4","type":"folder","title":"Folder 34","content":[{"id":"file_56","type":"file","title":"File 56"},{"id":"file_57","type":"file","title":"File 57"},{"id":"file_58","type":"file","title":"File 58"},{"id":"folder_22","type":"folder","title":"Folder 22","content":[{"id":"file_400","type":"file","title":"File 400"}]}]}]';

data = JSON.parse(data);

createTree(data);

function createTree (data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].type == "folder") {
      createParentNode(data[i]);
    } else {
      createChildNode(data[i]);
    }
  }
}

function createParentNode (node) {
  var items = node.content;
  for (var i = 0; i < items.length; i++) {
    if(items[i].type == "folder") {
      var str += createParentNode(items[i]);
    } else {
      str += createChildNode(items[i]);
    }
  }
}

function createChildNode (node) {
  var str = ""; 
}
