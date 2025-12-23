// 获取当前本地时间
function getLocalTimestamp() {
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');
  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const hour = pad(now.getHours());
  const minute = pad(now.getMinutes());
  const second = pad(now.getSeconds());

  return `${year}${month}${day}_${hour}${minute}${second}`; // 例如：20251002_203245
}

var cursor_off = {
  type: jsPsychCallFunction,
  func: function () {
    document.body.style.cursor = "none";
  }
}

var cursor_on = {
  type: jsPsychCallFunction,
  func: function () {
    document.body.style.cursor = "auto";
  }
}

// save data to server
function saveData(data, filename) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url_zstublj);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    filedata: data,
    filename: filename
  }));
}
