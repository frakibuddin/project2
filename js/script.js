/*-----------------------preloader ------------------------*/
window.addEventListener("load", () => {
  document.querySelector(".theme-loader").style.display = "block";
  setTimeout(() => {
    document.querySelector(".theme-loader").style.display = "none";
  }, 10);
});

let tabBtn1 = document.querySelector("#tab-btn1");
let tabBtn2 = document.querySelector("#tab-btn2");
let tabBtn3 = document.querySelector("#tab-btn3");

let tabCntent1 = document.querySelector("#tab-content1");
let tabCntent2 = document.querySelector("#tab-content2");
let tabCntent3 = document.querySelector("#tab-content3");

tabBtn1.onclick = () => {
  tabBtn1.classList.add("active");

  tabBtn3.classList.remove("active");
  tabBtn2.classList.remove("active");

  tabCntent2.classList.remove("active");
  tabCntent3.classList.remove("active");

  tabCntent1.classList.add("active");
  tabBtn1.classList.add("active");
};
tabBtn2.onclick = () => {
  tabBtn1.classList.remove("active");

  tabBtn1.classList.remove("active");
  tabBtn3.classList.remove("active");

  tabCntent1.classList.remove("active");
  tabCntent3.classList.remove("active");

  tabCntent2.classList.add("active");
  tabBtn2.classList.add("active");
};
tabBtn3.onclick = () => {
  tabBtn2.classList.remove("active");

  tabBtn1.classList.remove("active");
  tabBtn2.classList.remove("active");

  tabCntent1.classList.remove("active");
  tabCntent2.classList.remove("active");

  tabCntent3.classList.add("active");
  tabBtn3.classList.add("active");
};

//accordion-heading
let accordion_heading1 = document.querySelector("#accordion-heading1");
let accordion_heading2 = document.querySelector("#accordion-heading2");
let accordion_heading3 = document.querySelector("#accordion-heading3");
let accordion_heading4 = document.querySelector("#accordion-heading4");

//text
let accordion_text1 = document.querySelector("#accordion-text1");
let accordion_text2 = document.querySelector("#accordion-text2");
let accordion_text3 = document.querySelector("#accordion-text3");
let accordion_text4 = document.querySelector("#accordion-text4");

//image accordion-img1

let accordion_img1 = document.querySelector("#accordion-img1");
let accordion_img2 = document.querySelector("#accordion-img2");
let accordion_img3 = document.querySelector("#accordion-img3");
let accordion_img4 = document.querySelector("#accordion-img4");

accordion_heading1.onclick = () => {
  accordion_heading2.classList.remove("active");
  accordion_heading3.classList.remove("active");
  accordion_heading4.classList.remove("active");

  accordion_text2.classList.remove("active");
  accordion_text3.classList.remove("active");
  accordion_text4.classList.remove("active");

  accordion_img2.classList.remove("active");
  accordion_img3.classList.remove("active");
  accordion_img4.classList.remove("active");

  //active
  accordion_heading1.classList.add("active");
  accordion_text1.classList.add("active");
  accordion_img1.classList.add("active");
};

accordion_heading2.onclick = () => {
  accordion_heading1.classList.remove("active");
  accordion_heading3.classList.remove("active");
  accordion_heading4.classList.remove("active");

  accordion_text1.classList.remove("active");
  accordion_text3.classList.remove("active");
  accordion_text4.classList.remove("active");

  accordion_img1.classList.remove("active");
  accordion_img3.classList.remove("active");
  accordion_img4.classList.remove("active");

  //active
  accordion_heading2.classList.add("active");
  accordion_text2.classList.add("active");
  accordion_img2.classList.add("active");
};

accordion_heading3.onclick = () => {
  accordion_heading1.classList.remove("active");
  accordion_heading2.classList.remove("active");
  accordion_heading4.classList.remove("active");

  accordion_text1.classList.remove("active");
  accordion_text2.classList.remove("active");
  accordion_text4.classList.remove("active");

  accordion_img1.classList.remove("active");
  accordion_img2.classList.remove("active");
  accordion_img4.classList.remove("active");

  //active
  accordion_heading3.classList.add("active");
  accordion_text3.classList.add("active");
  accordion_img3.classList.add("active");
};
accordion_heading4.onclick = () => {
  accordion_heading1.classList.remove("active");
  accordion_heading2.classList.remove("active");
  accordion_heading3.classList.remove("active");

  accordion_text1.classList.remove("active");
  accordion_text2.classList.remove("active");
  accordion_text3.classList.remove("active");

  accordion_img1.classList.remove("active");
  accordion_img2.classList.remove("active");
  accordion_img3.classList.remove("active");

  //active
  accordion_heading4.classList.add("active");
  accordion_text4.classList.add("active");
  accordion_img4.classList.add("active");
};

// tow tabs
let tabBtn1_twos = document.querySelector("#tabBtn1-twos");
let tabBtn2_twos = document.querySelector("#tabBtn2-twos");

let tabContent1_tows = document.querySelector("#tabContent1-tows");
let tabContent2_tows = document.querySelector("#tabContent2-tows");

tabBtn1_twos.onclick = () => {
  tabContent1_tows.classList.add("active");
  tabContent2_tows.classList.remove("active");

  tabBtn1_twos.classList.add("active");
  tabBtn2_twos.classList.remove("active");
};

tabBtn2_twos.onclick = () => {
  tabContent2_tows.classList.add("active");
  tabContent1_tows.classList.remove("active");

  tabBtn2_twos.classList.add("active");
  tabBtn1_twos.classList.remove("active");
};
