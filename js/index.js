const content = [
  [
    '"태도가 성과를 만들고, 습관이 나를 만든다." <br><br>함께 일하고 싶은 동료, 소프트웨어 개발자 손보경입니다. <br> 자기개발을 좋아하는 개발자로서 새로운 기술을 습득하고 기존 기술을 향상시키는 것을 즐깁니다. <br><br>개발자로서의 역량 뿐만 아니라 한 사람으로서의 인간성을 지속적으로 발전시키고자 하는 의지를 지녔습니다. :) '
  ],
  [
    "",
    "멀티캠퍼스-프론트엔드 수료(2024/4/22)",
    "영남대학교 정보통신공학과 졸업 (2024/2)",
    "신명고등학교 졸업 (2020/2)",
    "2001년 출생",
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
