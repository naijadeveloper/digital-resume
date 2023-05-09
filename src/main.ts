import './style/global.css';

// 🌞 , 🌚 theme emojis for content

const themeSwitch = document.querySelector("#themeSwitcher")!;
const htmlDoc = document.documentElement;

//set theme
const localData = localStorage.getItem("theme");
if(localData !== null) {
  if(localData == "") {
    htmlDoc.classList.remove("dark");
    themeSwitch.innerHTML = `<span>🌚</span>`;
  }else {
    htmlDoc.classList.add("dark");
    themeSwitch.innerHTML = `<span>🌞</span>`;
  }
}else {
  htmlDoc.classList.add("dark");
  themeSwitch.innerHTML = `<span>🌞</span>`;
}

// on click
themeSwitch.addEventListener("click", () => {
  if(htmlDoc.classList.contains("dark")) {
    htmlDoc.classList.remove("dark")
    localStorage.setItem("theme", "")
    //set content
    themeSwitch.innerHTML = `<span>🌚</span>`;
  }else {
    htmlDoc.classList.add("dark");
    localStorage.setItem("theme", "dark")
    //set content
    themeSwitch.innerHTML = `<span>🌞</span>`;
  }
})