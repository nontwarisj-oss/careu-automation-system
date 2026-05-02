const ROOT_FOLDER_ID = '1y-FBpx_gFVOmB7oHJpne6BfBiQy12t0d';
const SYSTEM_FONT = 'Chakra Petch';
const TITLE_COLOR = '#1f3a5f';
const HEADER_COLOR = '#244653';
const SUBTITLE_COLOR = '#f5f1e6';
const BORDER_COLOR = '#b8c2cc';
const VAT_RATE = 0.07;

const SHEETS = [
  { name: '00_README', title: 'คู่มือใช้งาน', subtitle: 'วิธีใช้งานระบบ Care U แบบสั้นและชัดเจน', headers: ['หัวข้อ', 'รายละเอียด'] },
  { name: '01_Config', title: 'ตั้งค่าระบบ', subtitle: 'ค่ากลางของระบบ แก้ไขเฉพาะผู้ดูแล', headers: ['Key', 'Value'] },
  { name: '02_Branches', title: 'สาขา', subtitle: 'ข้อมูลสาขา — เพิ่มสาขาใหม่ที่นี่', headers: ['รหัสสาขา', 'ตัวย่อ', 'ชื่อสาขา', 'ที่อยู่', 'เบอร์โทร', 'ผู้จัดการ', 'LINE OA', 'Drive Folder ID', 'วันเปิด', 'สถานะ', 'หมายเหตุ'] },
  { name: '03_Customers', title: 'ลูกค้า', subtitle: 'ฐานข้อมูลลูกค้า — ตรวจลูกค้าใหม่และลูกค้าเก่า', headers: ['รหัสลูกค้า', 'LINE User ID', 'ชื่อลูกค้า', 'เบอร์โทร', 'วันมาครั้งแรก', 'วันมาล่าสุด', 'จำนวนครั้ง', 'ยอดรวม', 'สาขาประจำ', 'กลุ่มลูกค้า', 'สถานะ', 'หมายเหตุ'] },
  { name: '04_Staff', title: 'พนักงาน/ช่าง', subtitle: 'ข้อมูลทีมงานและประเภทค่าจ้าง', headers: ['รหัสพนักงาน', 'ชื่อ', 'ตำแหน่ง', 'ประเภทค่าจ้าง', 'ค่าแรงเริ่มต้น', 'เบอร์โทร', 'สาขา', 'สถานะ', 'หมายเหตุ'] },
  { name: '05_ServiceTypes', title: 'บริการ', subtitle: 'รายการบริการและราคาเริ่มต้น', headers: ['รหัสบริการ', 'หมวด', 'ชื่อบริการ', 'ราคาเริ่มต้น', 'ต้นทุนโดยประมาณ', 'ระยะเวลางาน', 'สถานะ', 'หมายเหตุ'] },
  { name: '10_Jobs_Active', title: 'รับงาน', subtitle: 'หน้างานปัจจุบัน — ใช้บันทึกรับงานและติดตามสถานะ', headers: ['รหัสงาน', 'วันที่', 'สาขา', 'ชื่อลูกค้า', 'เบอร์โทร', 'รายการ', 'จำนวนชิ้น', 'ราคา', 'มัดจำ', 'สถานะจ่ายเงิน', 'สถานะงาน', 'ช่าง', 'รูปใบรับงาน', 'หมายเหตุ'] },
  { name: '11_Jobs_DB', title: 'ฐานข้อมูลงาน', subtitle: 'ข้อมูลงานที่ปิดแล้ว — ไม่ควรแก้ไขโดยตรง', headers: ['รหัสงาน', 'วันที่', 'สาขา', 'ชื่อลูกค้า', 'เบอร์โทร', 'รายการ', 'จำนวนชิ้น', 'ราคา', 'มัดจำ', 'สถานะจ่ายเงิน', 'สถานะงาน', 'ช่าง', 'รูปใบรับงาน', 'หมายเหตุ', 'เวลาสร้าง', 'เวลาปิดงาน'] },
  { name: '20_Expenses', title: 'ค่าใช้จ่าย', subtitle: 'บันทึกรายจ่ายประจำวัน', headers: ['รหัสรายจ่าย', 'วันที่', 'สาขา', 'หมวด', 'รายละเอียด', 'จำนวนเงิน', 'ผู้บันทึก', 'หลักฐาน', 'หมายเหตุ'] },
  { name: '21_TechCosts', title: 'ต้นทุนช่าง', subtitle: 'ค่าแรงรายงาน ใช้วิเคราะห์ประสิทธิภาพช่าง', headers: ['รหัสบันทึก', 'วันที่', 'รหัสงาน', 'ช่าง', 'ต้นทุนค่าแรง', 'หมายเหตุ'] },
  { name: '22_Payroll', title: 'เงินเดือน', subtitle: 'สรุปจ่ายเงินเดือน/ค่าแรง', headers: ['รอบจ่าย', 'วันที่จ่าย', 'พนักงาน', 'ประเภท', 'ยอดงาน', 'เงินเดือน', 'ค่าแรงงาน', 'หัก/เพิ่ม', 'สุทธิ', 'สถานะ'] },
  { name: '30_Photos', title: 'รูปใบรับงาน', subtitle: 'บันทึกลิงก์รูปจาก LINE/Drive และอายุการเก็บ', headers: ['รหัสรูป', 'รหัสงาน', 'วันที่อัปโหลด', 'Folder ID', 'File ID', 'Link', 'ลบหลังวันที่', 'สถานะ'] },
  { name: '40_TaxInvoices', title: 'ใบกำกับภาษี', subtitle: 'ข้อมูลภาษีขายและใบกำกับ', headers: ['เลขที่เอกสาร', 'วันที่', 'รหัสงาน', 'ลูกค้า', 'เลขผู้เสียภาษี', 'สาขา', 'ยอดก่อน VAT', 'VAT 7%', 'ยอดรวม', 'สถานะ'] },
  { name: '41_VAT_Report', title: 'รายงาน VAT', subtitle: 'สรุป VAT รายเดือนเพื่อส่งบัญชี', headers: ['เดือน', 'ยอดขายก่อน VAT', 'VAT ขาย', 'ยอดซื้อก่อน VAT', 'VAT ซื้อ', 'VAT สุทธิ'] },
  { name: '42_Tax_Summary', title: 'สรุปภาษี', subtitle: 'สรุปข้อมูลรายเดือน/รายปีสำหรับสำนักงานบัญชี', headers: ['งวด', 'รายได้', 'ค่าใช้จ่าย', 'กำไร', 'VAT สุทธิ', 'หมายเหตุ'] },
  { name: '90_Dashboard', title: 'Dashboard', subtitle: 'ภาพรวมรายได้ กำไร ลูกค้า งาน และภาษี', headers: ['ตัวชี้วัด', 'ค่า'] },
  { name: '99_Audit_Log', title: 'ประวัติระบบ', subtitle: 'บันทึกการทำงานอัตโนมัติของระบบ', headers: ['เวลา', 'โมดูล', 'การทำงาน', 'ผู้ใช้', 'รายละเอียด'] }
];

function installCareU() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  createAllSheets_(ss);
  seedBaseData_(ss);
  setupDriveFolders_(ss);
  styleAllSheets_(ss);
  refreshDashboard();
  installTriggers_();
  logAudit_('setup', 'INSTALL', 'ติดตั้งระบบ Care U สำเร็จ');
  SpreadsheetApp.getUi().alert('ติดตั้ง Care U System สำเร็จแล้ว');
}

function createAllSheets_(ss) {
  SHEETS.forEach(def => {
    let sheet = ss.getSheetByName(def.name);
    if (!sheet) sheet = ss.insertSheet(def.name);
    sheet.clear();
    sheet.getRange(4, 1, 1, def.headers.length).setValues([def.headers]);
  });
}

function seedBaseData_(ss) {
  const readme = ss.getSheetByName('00_README');
  readme.getRange(5, 1, 8, 2).setValues([
    ['1. เริ่มต้น', 'Run function installCareU() ครั้งเดียว ระบบจะสร้างทุกอย่างให้'],
    ['2. รับงาน', 'กรอกงานใหม่ที่ชีท 10_Jobs_Active'],
    ['3. ปิดงาน', 'เปลี่ยนสถานะงานเป็น DONE แล้วระบบ archive อัตโนมัติ'],
    ['4. ค่าใช้จ่าย', 'บันทึกค่าใช้จ่ายที่ชีท 20_Expenses'],
    ['5. ภาษี', 'ดูสรุปที่ 41_VAT_Report และ 42_Tax_Summary'],
    ['6. รูปใบรับงาน', 'รูปจะถูกเก็บในโฟลเดอร์ CareU_Images'],
    ['7. Backup', 'ระบบสร้าง backup รายวันใน CareU_Backups'],
    ['8. Dashboard', 'ดูภาพรวมที่ 90_Dashboard']
  ]);

  const config = ss.getSheetByName('01_Config');
  config.getRange(5, 1, 10, 2).setValues([
    ['ROOT_FOLDER_ID', ROOT_FOLDER_ID],
    ['BACKUP_FOLDER_ID', ''],
    ['IMAGE_FOLDER_ID', ''],
    ['DEFAULT_BRANCH', 'BR-001'],
    ['VAT_RATE', VAT_RATE],
    ['MAX_IMAGE_AGE_DAYS', 60],
    ['MAX_ROWS_PER_FILE', 50000],
    ['LINE_CHANNEL_ACCESS_TOKEN', ''],
    ['LINE_CHANNEL_SECRET', ''],
    ['SYSTEM_VERSION', 'v1.0']
  ]);

  ss.getSheetByName('02_Branches').getRange(5, 1, 1, 11).setValues([[ 'BR-001', 'TBR', 'Care U - ตลาดสดธนบุรี', 'ตลาดสดธนบุรี กรุงเทพฯ', '02-xxx-xxxx', 'เอ้ (Nontwaris)', '<set>', '<set>', new Date(), 'ACTIVE', 'สาขาแรก / Flagship' ]]);
  ss.getSheetByName('03_Customers').getRange(5, 1, 1, 12).setValues([[ 'CUS-0001', 'Uxxxxxxxxxxxx', 'ตัวอย่างลูกค้า', '0812345678', new Date(), new Date(), 5, 1850, 'BR-001', 'REGULAR', 'ACTIVE', 'ลูกค้าประจำ' ]]);
  ss.getSheetByName('04_Staff').getRange(5, 1, 2, 9).setValues([
    ['ST-001', 'ช่างเอก', 'ช่าง', 'PER_JOB', 0, '', 'BR-001', 'ACTIVE', ''],
    ['ST-002', 'แอดมิน', 'แอดมิน', 'MONTHLY', 0, '', 'BR-001', 'ACTIVE', '']
  ]);
  ss.getSheetByName('05_ServiceTypes').getRange(5, 1, 3, 8).setValues([
    ['SV-001', 'กางเกง', 'ตัดขากางเกง', 120, 40, '1 วัน', 'ACTIVE', ''],
    ['SV-002', 'ซิป', 'เปลี่ยนซิป', 200, 80, '1-2 วัน', 'ACTIVE', ''],
    ['SV-003', 'เสื้อ', 'แก้ทรงเสื้อ', 250, 100, '2-3 วัน', 'ACTIVE', '']
  ]);
}

function setupDriveFolders_(ss) {
  const root = DriveApp.getFolderById(ROOT_FOLDER_ID);
  const backup = getOrCreateSubFolder_(root, 'CareU_Backups');
  const images = getOrCreateSubFolder_(root, 'CareU_Images');
  getOrCreateSubFolder_(root, 'CareU_Tax_Documents');
  getOrCreateSubFolder_(root, 'CareU_Archive');
  const config = ss.getSheetByName('01_Config');
  setConfigValue_(config, 'BACKUP_FOLDER_ID', backup.getId());
  setConfigValue_(config, 'IMAGE_FOLDER_ID', images.getId());
}

function getOrCreateSubFolder_(parent, name) {
  const existing = parent.getFoldersByName(name);
  return existing.hasNext() ? existing.next() : parent.createFolder(name);
}

function setConfigValue_(sheet, key, value) {
  const values = sheet.getRange(5, 1, Math.max(sheet.getLastRow() - 4, 1), 2).getValues();
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] === key) {
      sheet.getRange(i + 5, 2).setValue(value);
      return;
    }
  }
  sheet.appendRow([key, value]);
}

function styleAllSheets_(ss) {
  SHEETS.forEach(def => {
    const sheet = ss.getSheetByName(def.name);
    if (!sheet) return;
    const colCount = Math.max(def.headers.length, 2);
    const lastRow = Math.max(sheet.getLastRow(), 20);
    sheet.clearFormats();
    sheet.setHiddenGridlines(true);

    sheet.getRange(1, 1, 1, colCount).merge()
      .setValue(def.title)
      .setFontFamily(SYSTEM_FONT)
      .setFontSize(18)
      .setFontWeight('bold')
      .setFontColor('#ffffff')
      .setBackground(TITLE_COLOR)
      .setHorizontalAlignment('center')
      .setVerticalAlignment('middle');

    sheet.getRange(2, 1, 1, colCount).merge()
      .setValue(def.subtitle)
      .setFontFamily(SYSTEM_FONT)
      .setFontSize(11)
      .setFontColor('#666666')
      .setBackground(SUBTITLE_COLOR)
      .setHorizontalAlignment('center')
      .setVerticalAlignment('middle');

    sheet.getRange(3, 1, 1, colCount).merge().setBackground('#ffffff');

    sheet.getRange(4, 1, 1, colCount)
      .setFontFamily(SYSTEM_FONT)
      .setFontSize(12)
      .setFontWeight('bold')
      .setFontColor('#ffffff')
      .setBackground(HEADER_COLOR)
      .setHorizontalAlignment('center')
      .setVerticalAlignment('middle')
      .setWrap(true);

    sheet.getRange(5, 1, Math.max(lastRow - 4, 1), colCount)
      .setFontFamily(SYSTEM_FONT)
      .setFontSize(11)
      .setFontColor('#111111')
      .setVerticalAlignment('middle')
      .setWrap(true)
      .setBorder(true, true, true, true, true, true, BORDER_COLOR, SpreadsheetApp.BorderStyle.SOLID);

    sheet.getRange(1, 1, lastRow, colCount)
      .setBorder(true, true, true, true, true, true, BORDER_COLOR, SpreadsheetApp.BorderStyle.SOLID);

    sheet.setRowHeight(1, 40);
    sheet.setRowHeight(2, 28);
    sheet.setRowHeight(3, 12);
    sheet.setRowHeight(4, 36);
    sheet.setFrozenRows(4);

    for (let c = 1; c <= colCount; c++) {
      sheet.autoResizeColumn(c);
      const w = sheet.getColumnWidth(c);
      sheet.setColumnWidth(c, Math.min(Math.max(w + 30, 95), 260));
    }

    formatNumericColumns_(sheet, def.headers, lastRow);
    applyDropdowns_(sheet);
  });
}

function formatNumericColumns_(sheet, headers, lastRow) {
  headers.forEach((h, i) => {
    if (/(ราคา|ยอด|เงิน|VAT|ต้นทุน|มัดจำ|จำนวน|สุทธิ|ค่าแรง|กำไร)/.test(h)) {
      sheet.getRange(5, i + 1, Math.max(lastRow - 4, 1), 1).setNumberFormat('#,##0');
      sheet.getRange(5, i + 1, Math.max(lastRow - 4, 1), 1).setHorizontalAlignment('right');
    }
    if (/(วันที่|วัน|เวลา|งวด)/.test(h)) {
      sheet.getRange(5, i + 1, Math.max(lastRow - 4, 1), 1).setNumberFormat('yyyy-mm-dd');
      sheet.getRange(5, i + 1, Math.max(lastRow - 4, 1), 1).setHorizontalAlignment('center');
    }
  });
}

function applyDropdowns_(sheet) {
  const name = sheet.getName();
  const statusRule = SpreadsheetApp.newDataValidation().requireValueInList(['PENDING', 'IN_PROGRESS', 'DONE', 'CANCEL'], true).build();
  const payRule = SpreadsheetApp.newDataValidation().requireValueInList(['UNPAID', 'DEPOSIT', 'PAID'], true).build();
  const activeRule = SpreadsheetApp.newDataValidation().requireValueInList(['ACTIVE', 'INACTIVE'], true).build();
  if (name === '10_Jobs_Active') {
    sheet.getRange('J5:J200').setDataValidation(payRule);
    sheet.getRange('K5:K200').setDataValidation(statusRule);
  }
  if (['02_Branches', '03_Customers', '04_Staff', '05_ServiceTypes'].includes(name)) {
    const lastCol = sheet.getLastColumn();
    const headers = sheet.getRange(4, 1, 1, lastCol).getValues()[0];
    const idx = headers.indexOf('สถานะ') + 1;
    if (idx > 0) sheet.getRange(5, idx, 200, 1).setDataValidation(activeRule);
  }
}

function refreshDashboard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dash = ss.getSheetByName('90_Dashboard');
  if (!dash) return;
  dash.getRange(5, 1, 10, 2).clearContent();
  dash.getRange(5, 1, 10, 2).setValues([
    ['รายได้วันนี้', '=SUMIFS(\'11_Jobs_DB\'!H:H,\'11_Jobs_DB\'!B:B,TODAY())'],
    ['รายได้เดือนนี้', '=SUM(FILTER(\'11_Jobs_DB\'!H:H,TEXT(\'11_Jobs_DB\'!B:B,"yyyy-mm")=TEXT(TODAY(),"yyyy-mm")))'],
    ['ค่าใช้จ่ายเดือนนี้', '=SUM(FILTER(\'20_Expenses\'!F:F,TEXT(\'20_Expenses\'!B:B,"yyyy-mm")=TEXT(TODAY(),"yyyy-mm")))'],
    ['กำไรเดือนนี้', '=B6-B7'],
    ['จำนวนงานค้าง', '=COUNTIF(\'10_Jobs_Active\'!K:K,"<>DONE")'],
    ['จำนวนลูกค้าทั้งหมด', '=MAX(COUNTA(\'03_Customers\'!A:A)-4,0)'],
    ['VAT ขายประมาณการ', '=B6*0.07'],
    ['จำนวนสาขา Active', '=COUNTIF(\'02_Branches\'!J:J,"ACTIVE")'],
    ['อัปเดตล่าสุด', '=NOW()'],
    ['สถานะระบบ', 'ACTIVE']
  ]);
  styleAllSheets_(ss);
}

function archiveDoneJobs() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const active = ss.getSheetByName('10_Jobs_Active');
  const db = ss.getSheetByName('11_Jobs_DB');
  if (!active || !db) return;
  backupSpreadsheet_();
  const lastRow = active.getLastRow();
  if (lastRow < 5) return;
  const data = active.getRange(5, 1, lastRow - 4, active.getLastColumn()).getValues();
  for (let i = data.length - 1; i >= 0; i--) {
    if (String(data[i][10]).toUpperCase() === 'DONE') {
      const row = data[i].concat([new Date(), new Date()]);
      db.appendRow(row);
      active.deleteRow(i + 5);
      logAudit_('archive', 'DONE_TO_DB', data[i][0]);
    }
  }
  refreshDashboard();
}

function backupSpreadsheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const backupId = getConfig_('BACKUP_FOLDER_ID');
  if (!backupId) return;
  const folder = DriveApp.getFolderById(backupId);
  const file = DriveApp.getFileById(ss.getId());
  file.makeCopy('Backup_' + ss.getName() + '_' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd_HHmmss'), folder);
}

function cleanupOldImages() {
  const imageFolderId = getConfig_('IMAGE_FOLDER_ID');
  const days = Number(getConfig_('MAX_IMAGE_AGE_DAYS')) || 60;
  if (!imageFolderId) return;
  const folder = DriveApp.getFolderById(imageFolderId);
  const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  const files = folder.getFiles();
  while (files.hasNext()) {
    const file = files.next();
    if (file.getDateCreated() < cutoff) {
      file.setTrashed(true);
      logAudit_('cleanup', 'TRASH_OLD_IMAGE', file.getName());
    }
  }
}

function installTriggers_() {
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('archiveDoneJobs').timeBased().everyMinutes(30).create();
  ScriptApp.newTrigger('refreshDashboard').timeBased().everyHours(1).create();
  ScriptApp.newTrigger('cleanupOldImages').timeBased().everyDays(1).atHour(2).create();
}

function getConfig_(key) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('01_Config');
  if (!sheet) return '';
  const values = sheet.getRange(5, 1, Math.max(sheet.getLastRow() - 4, 1), 2).getValues();
  const found = values.find(r => r[0] === key);
  return found ? found[1] : '';
}

function logAudit_(module, action, detail) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('99_Audit_Log');
  if (!sheet) return;
  sheet.appendRow([new Date(), module, action, Session.getActiveUser().getEmail() || 'system', detail]);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Care U')
    .addItem('ติดตั้ง/รีเซ็ตระบบ', 'installCareU')
    .addItem('จัดรูปแบบใหม่', 'runStyleOnly')
    .addItem('อัปเดต Dashboard', 'refreshDashboard')
    .addItem('Archive งาน DONE', 'archiveDoneJobs')
    .addToUi();
}

function runStyleOnly() {
  styleAllSheets_(SpreadsheetApp.getActiveSpreadsheet());
}
