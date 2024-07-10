function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const jsonString = e.postData.getDataAsString();
  const data = JSON.parse(jsonString);

  const user = data.user;
  const address= data.address;
  const command = data.command;

  sheet.getRange("1:1").insertCells(SpreadsheetApp.Dimension.ROWS);
  Utilities.sleep(100)
  sheet.getRange(1, 1).setValue((new Date).toLocaleString('ja-JP'));
  sheet.getRange(1, 2).setValue(user);
  sheet.getRange(1, 3).setValue(address);
  sheet.getRange(1, 4).setValue(command);

  const output = ContentService.createTextOutput(JSON.stringify({result:"Ok"}));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
