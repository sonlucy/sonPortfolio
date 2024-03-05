const content = [
  [
    "안녕하세요. ~~~를 하는 손보경입니다. 너우ㅏ움임워뮈루미뮈뤼마림리ㅏㅁㄹ니루이눌인뤼우니루니ㅜ리울"
  ],
  [
    "",
    "2001년 출생",
    "신명고등학교 졸업 (2020/2)",
    "영남대학교 정보통신공학과 졸업 (2024/2)",
    "멀티캠퍼스-프론트엔드 수료(2024/4/22)"
  ],
  [
    "",
    "🏊‍♂️ swiming",
    "⚽ watching/playing football",
    "🎧 listening to music",
    "📷 photography(taking photos)",
    "👩‍🍳 cooking",
    "🖌️ drawing",
    "👩‍💻 coding"
  ]
];

const btnOne = document.getElementById("btn-1");
const btnTwo = document.getElementById("btn-2");
const btnThree = document.getElementById("btn-3");
// const tabContent = document.getElementById("tab-content")
const tabContent = document.querySelector(".tab-content");

function displayContent(items) {
  let listContent = "";
  let i=0
  for (const item of items) {
    i+=1;
    if (i==1 ){listContent += `<p id="FirstItem">${item}</p>`;}
    else {
      listContent += `<li>${item}</li>`;
    }
  }
  const list = document.createElement("ul");
  tabContent.innerHTML = ""; 
  list.innerHTML = listContent; 
  tabContent.append(list);
}

function highlightButton(btn) {
  btnOne.className = "";
  btnTwo.className = "";
  btnThree.className = "";
  btn.className = "active";
}

function handleClick(event) {
  const btnId = event.target.id;
  highlightButton(event.target);
  if (btnId === "btn-1") {
    displayContent(content[0]);
  } else if (btnId === "btn-2") {
    displayContent(content[1]);
  } else {
    displayContent(content[2]);
  }
}

displayContent(content[0]); // initially show this content

btnOne.addEventListener("click", handleClick);
btnTwo.addEventListener("click", handleClick);
btnThree.addEventListener("click", handleClick);
