const fitNavElement = document.getElementById("fit");
const careNavElement = document.getElementById("care");
const materialsNavElement = document.getElementById("materials");

const fitSection = document.getElementById("fit_section");
const careSection = document.getElementById("care_section");
const materialsSection = document.getElementById("materials_section");

const mobileNavIcons = document.getElementsByClassName("mobile_nav_icon");

const navElements = [fitNavElement, careNavElement, materialsNavElement];
const sectionElements = [fitSection, careSection, materialsSection];

window.addEventListener("DOMContentLoaded", (event) => {
  materialsNavElement.click();
})

navElements.forEach((element) => {
  element.addEventListener('click', (event) => {
    navElements.forEach((navEle) => {
      if (navEle.id === event.target.parentElement.id) {
        // hide & show mobile subsections & toggle nav ele backgrounds
        if (window.innerWidth <= 767) {
          navEle.classList.toggle('topnav_clicked');

          if (navEle.nextElementSibling.classList.contains("flex_column")) {
            navEle.nextElementSibling.classList.remove("flex_column");
            navEle.nextElementSibling.classList.add("display_none");
          } else {
            navEle.nextElementSibling.classList.add("flex_column");
            navEle.nextElementSibling.classList.remove("display_none");
          }

          // toggle icons
          navEle.lastElementChild.innerText === "+" ? navEle.lastElementChild.textContent = "-" : navEle.lastElementChild.textContent = "+";

          // hide & show desktop subsections
        } else { 
          sectionElements.forEach((sectionEle) => {
            navElements.forEach((navElement) => {
              if (navElement.classList.contains("topnav_clicked")) {
                navElement.classList.remove("topnav_clicked")
              }
            })
            navEle.classList.toggle('topnav_clicked');

            if (`${event.target.parentElement.id}_section` === sectionEle.id && sectionEle.classList.contains("display_none")) {
              sectionEle.classList.remove("display_none");
            } else {
              sectionEle.classList.add("display_none");
            }
          })
        }
      }
    })
  })
})
