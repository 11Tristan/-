// Week 16: 使用類別 (Class) 定義物件結構
class Student {
  constructor(name, score) {
    this.name = name;
    this.score = Number(score);
  }
}

// Week 6: 使用陣列 (Array) 來儲存資料
let students = [];

// Week 12-14: 定義函式 (Function) - 新增學生
function addStudent() {
  // Week 2: 變數與輸入處理
  let nameInput = document.getElementById("studentName");
  let scoreInput = document.getElementById("studentScore");
  
  let name = nameInput.value.trim();
  let score = scoreInput.value;

  // Week 4: 控制敘述 (驗證輸入是否合法)
  if (name === "" || score === "") {
    alert("請輸入完整的姓名與分數！");
    return;
  }
  
  if (score < 0 || score > 100) {
    alert("分數必須在 0 到 100 之間！");
    return;
  }

  // 建立物件並放入陣列
  let newStudent = new Student(name, score);
  students.push(newStudent);

  // 清空輸入框
  nameInput.value = "";
  scoreInput.value = "";

  // 更新畫面
  renderTable();
}

// Week 12: 函式 - 渲染畫面 (將陣列內容轉為 HTML)
function renderTable() {
  let list = document.getElementById("studentList");
  list.innerHTML = ""; // 清空目前的列表
  
  let totalScore = 0;

  // Week 5: 迴圈 (Loop) 遍歷陣列
  for (let i = 0; i < students.length; i++) {
    let s = students[i];
    totalScore += s.score;

    // Week 4: 條件判斷 (判斷及格)
    let status = s.score >= 60 ? "及格" : "不及格";
    let statusClass = s.score >= 60 ? "pass" : "fail";

    // 組合 HTML 字串
    let row = `
      <tr>
        <td>${s.name}</td>
        <td>${s.score}</td>
        <td class="${statusClass}">${status}</td>
      </tr>
    `;
    list.innerHTML += row;
  }

  // 計算平均
  updateStats(totalScore);
}

// 更新統計數據
function updateStats(total) {
  let stats = document.getElementById("stats");
  if (students.length === 0) {
    stats.innerText = "目前人數：0 | 平均分數：0";
  } else {
    // Week 3: 運算
    let avg = (total / students.length).toFixed(1); // 取小數點第一位
    stats.innerText = `目前人數：${students.length} | 平均分數：${avg}`;
  }
}

// Week 10: 排序與搜尋 (這裡實作排序)
function sortByScore() {
  // 使用 JS 內建的 sort，但在教學上你可以解釋這是比較兩個物件的 score 屬性
  students.sort(function(a, b) {
    return b.score - a.score; // 由高到低排序
  });
  renderTable();
}

// 清除所有資料
function clearAll() {
  students = []; // 清空陣列
  renderTable();
}