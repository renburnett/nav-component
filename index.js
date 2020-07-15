const fitNavElement = document.getElementById("fit");
const careNavElement = document.getElementById("care");
const materialsNavElement = document.getElementById("materials");

const fitSection = document.getElementById("fit_section");
const careSection = document.getElementById("care_section");
const materialsSection = document.getElementById("materials_section");

const mobileFitSection = document.getElementById("mobile_fit_section");
const mobileCareSection = document.getElementById("mobile_care_section");
const mobileMaterialsSection = document.getElementById("mobile_materials_section");

const mobileNavIcons = document.getElementsByClassName("mobile_nav_icon");

const navElements = [fitNavElement, careNavElement, materialsNavElement];
const desktopSectionElements = [fitSection, careSection, materialsSection];
const mobileSectionElements = [mobileFitSection, mobileCareSection, mobileMaterialsSection];

let hasResizedUp = false;
let hasResizedDown = false;

navElements.forEach((el) => {
  el.addEventListener('click', (event) => {
    navElements.forEach((navEle) => {
      if (navEle.id === event.target.parentElement.id) {
        // hide & show mobile subsections & toggle nav ele backgrounds
        if (window.innerWidth <= 767) {
          navEle.classList.toggle('topnav_clicked');

          if (!navEle.nextElementSibling.classList.contains("display_none")) {
            navEle.nextElementSibling.classList.remove("mobile_sub_section");
            navEle.nextElementSibling.classList.add("display_none");
          } else {
            navEle.nextElementSibling.classList.add("mobile_sub_section");
            navEle.nextElementSibling.classList.remove("display_none");
          }

          // toggle icons
          navEle.lastElementChild.innerText === "+" ? navEle.lastElementChild.textContent = "-" : navEle.lastElementChild.textContent = "+";

          // hide & show desktop subsections
        } else { 
          desktopSectionElements.forEach((sectionEle) => {
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

// handle nav during window resize
window.addEventListener('resize', () => {

  navElements.forEach((navEle) => {
    if (navEle.classList.contains("topnav_clicked")) {
      navEle.classList.remove("topnav_clicked")
      navEle.lastElementChild.innerText === "+" ? navEle.lastElementChild.textContent = "-" : navEle.lastElementChild.textContent = "+";
    }
  })

  if (window.innerWidth >= 767 && !hasResizedUp) {
    desktopSectionElements.forEach((sectionElement) => {
      sectionElement.classList.add("display_none");
      hasResizedUp = true;
      hasResizedDown = false;
    })
  } else if (window.innerWidth < 767 && !hasResizedDown) {
    mobileSectionElements.forEach((mobileElement) => {
       mobileElement.classList.remove("mobile_sub_section");
       mobileElement.classList.add("display_none");
       hasResizedDown = true;
       hasResizedUp = false;
     })
   }
  })