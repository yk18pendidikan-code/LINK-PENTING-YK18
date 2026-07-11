function doGet() {
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
      .setTitle('DATA PENDIDIKAN NEUTRON MURANGAN');
}

function getLinksData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("LinkData");
  
  if (!sheet) return [];
  
  var data = sheet.getDataRange().getValues();
  var links = [];
  
  // Lewati baris header (index 0)
  for (var i = 1; i < data.length; i++) {
    var namaLink = data[i][0];
    var url = data[i][1];
    var status = data[i][2];
    
    if (namaLink && url && status.toString().toLowerCase() === "aktif") {
      links.push({
        nama: namaLink,
        url: url
      });
    }
  }
  return links;
}
