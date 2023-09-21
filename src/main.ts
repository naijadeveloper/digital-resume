import './style/global.css';

//Get image from my github profile
// const img = document.querySelector("#profile-image") as HTMLImageElement;

// async function getImage() {
//   const res = await fetch("https://api.github.com/users/naijadeveloper");
//   const data = await res.json();
//   return data.avatar_url;
// }

// getImage().then((img_url: string) => {
//   img.src = img_url;
// });

// 🌞 , 🌚 theme emojis for content

const themeSwitch = document.querySelector("#themeSwitcher")!;
const htmlDoc = document.documentElement;

//set theme from localStorage
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

// set theme on click
themeSwitch.addEventListener("click", (e: Event) => {
  const target = e.target as Element;

  if(htmlDoc.classList.contains("dark")) {
    htmlDoc.classList.remove("dark");
    localStorage.setItem("theme", "");
    //set content
    target.innerHTML = `<span>🌚</span>`;
  }else {
    htmlDoc.classList.add("dark");
    localStorage.setItem("theme", "dark");
    //set content
    target.innerHTML = `<span>🌞</span>`;
  }
});