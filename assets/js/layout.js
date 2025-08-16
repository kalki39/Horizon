// function setHeaderHeight() {
//     const innerDiv = document.getElementById('innerDiv');
//     const topbar = document.querySelector('.topbar');
//     const pageheader = document.querySelector('.page-header');
            
//     if (!innerDiv) return;

//     const header = innerDiv.parentElement;
//     const headerP = innerDiv.parentElement.parentElement;
//     header.style.height = innerDiv.offsetHeight + 'px';
//     if (topbar && header) {
//         const topbarHeight = topbar.offsetHeight;
//         header.style.marginTop = `${topbarHeight}px`;
//         // pageheader.style.marginTop = `${topbarHeight + innerDiv.offsetHeight}px`;
//     }
//     // if (pageheader && header) {
//     //     const pageheaderHeight = pageheader.offsetHeight;
//     //     header.style.marginTop = `${topbarHeight}px`;
//     // }
//     // headerP.style.height = innerDiv.offsetHeight + 'px';
// }

function setHeaderHeight() {
    const innerDiv = document.getElementById('innerDiv');
    const topbar = document.querySelector('.topbar');
    const pageheader = document.querySelector('.page-header');

    if (!innerDiv) return;

    const header = innerDiv.parentElement;
    // const headerP = innerDiv.parentElement.parentElement;
    header.style.height = innerDiv.offsetHeight + 'px';

    let headerTotalHeight = innerDiv.offsetHeight;

    if (topbar && header) {
        const topbarHeight = topbar.offsetHeight;
        header.style.marginTop = `${topbarHeight}px`;
        // headerTotalHeight += topbarHeight;
    }

    if (pageheader) {
        pageheader.style.marginTop = `${headerTotalHeight}px`;
    }

    // Optional: Set the height of the header's grandparent if needed for layout
    // headerP.style.height = headerTotalHeight + 'px';
}

document.addEventListener('DOMContentLoaded', function () {
    // Load Header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Ensure the height is set after the header is added
            setTimeout(setHeaderHeight, 100);

            // Recalculate height on resize
            window.addEventListener('resize', setHeaderHeight);

            
        }).then(()=>{


            if (window.jQuery) { // Check if jQuery is loaded
                const $ = window.jQuery;
                if ($(".mobile-nav__container .main-menu__list").length) {
                    let dropdownAnchor = $(
                        ".mobile-nav__container .main-menu__list .dropdown > a"
                    );
                    dropdownAnchor.each(function () {
                        let self = $(this);
                        let toggleBtn = document.createElement("BUTTON");
                        toggleBtn.setAttribute("aria-label", "dropdown toggler");
                        toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
                        self.append(function () {
                            return toggleBtn;
                        });
                        self.find("button").on("click", function (e) {
                            e.preventDefault();
                            let self = $(this);
                            self.toggleClass("expanded");
                            self.parent().toggleClass("expanded");
                            self.parent().parent().children("ul").slideToggle();
                        });
                    });
                }
            } else {
                console.error("jQuery is required for the mobile navigation dropdown functionality.");
            }
        
        
            const mobileNavBtn = document.querySelector('.mobile-nav__btn.mobile-nav__toggler');
            const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper');
            const mobileNavContent = document.querySelector('.mobile-nav__content');
            const mobileNavCloseBtn = document.querySelector('.icon-close');
            if (mobileNavBtn) {
                document.addEventListener('click', function(event) {
                    // Check if the expanded class is currently applied
                    if (mobileNavWrapper.classList.contains('expanded')) {
                      // Check if the clicked element is NOT within the mobileNavContent AND is NOT the toggler button
                      if (!mobileNavContent.contains(event.target) && event.target !== mobileNavBtn && event.target.parentNode != mobileNavBtn) {
                        mobileNavWrapper.classList.remove('expanded');
                      }
                      if (event.target.classList.contains("icon-close")) {
                        mobileNavWrapper.classList.remove('expanded');
                      }
                    }
                  });
              mobileNavBtn.addEventListener('click', function() {
                mobileNavWrapper.classList.toggle('expanded');
              });

            //   const dropdownLinks = document.querySelectorAll(".mobile-nav__container .main-menu__list .dropdown > a");
        
            //     dropdownLinks.forEach(function (link) {
            //         const toggleBtn = document.createElement("BUTTON");
            //         toggleBtn.setAttribute("aria-label", "dropdown toggler");
            //         toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
            //         link.appendChild(toggleBtn);

            //         toggleBtn.addEventListener("click", function (e) {
            //             e.preventDefault();
            //             const self = this;
            //             const dropdownItem = self.parentNode;
            //             const subMenuList = dropdownItem.parentNode.querySelector("ul"); // Assuming the ul is the next sibling

            //             self.classList.toggle("expanded");
            //             dropdownItem.classList.toggle("expanded");

            //             if (subMenuList) {
            //                 if (subMenuList.style.display === "none" || subMenuList.style.display === "") {
            //                     subMenuList.style.display = "block";
            //                 } else {
            //                     subMenuList.style.display = "none";
            //                 }
            //             }
            //         });
            //     });
        
              
              
              
            }

        })
        .catch(error => console.error("Error loading header:", error));

    // Load Footer

   
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data)
        .catch(error => console.error("Error loading footer:", error));


        const courseCards = document.querySelectorAll('.course-card'); // Select all the course card divs

        courseCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Prevent the default behavior if the click originated from the anchor itself
            if (event.target.tagName === 'A') {
            return; // Let the default link behavior handle the navigation
            }

            // Find the anchor tag with the href inside the course card's title
            const anchorTag = this.querySelector('.course-card__title a[href]');

            if (anchorTag && anchorTag.href) {
            window.location.href = anchorTag.href;
            }
        });
        });

    // Load Sidebar
    // fetch("sidebar.html")
    //     .then(response => response.text())
    //     .then(data => document.getElementById("sidebar").innerHTML = data)
    //     .catch(error => console.error("Error loading sidebar:", error));
});

// document.addEventListener('DOMContentLoaded', function() {
//     const mobileNavBtn = document.querySelector('.mobile-nav__btn.mobile-nav__toggler');
//     const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper');
  
//     if (mobileNavBtn && mobileNavWrapper) {
//       mobileNavBtn.addEventListener('click', function() {
//         mobileNavWrapper.classList.toggle('expanded');
//       });
//     }
//   });


// document.addEventListener('DOMContentLoaded', function () {
//     // Load Header
//     fetch("header.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("header").innerHTML = data;

//             // Ensure the height is set after the header is added
//             setTimeout(setHeaderHeight, 100);

//             // Recalculate height on resize
//             window.addEventListener('resize', setHeaderHeight);

//             // Setup event listeners AFTER the header is loaded
//             const mobileNavBtn = document.querySelector('.mobile-nav__btn.mobile-nav__toggler');
//             const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper');
//             const mobileNavContent = document.querySelector('.mobile-nav__content');
//             const mobileNavCloseBtn = document.querySelector('.icon-close');

//             if (mobileNavBtn && mobileNavWrapper) {
//                 mobileNavBtn.addEventListener('click', function() {
//                     mobileNavWrapper.classList.toggle('expanded');
//                 });

//                 document.addEventListener('click', function(event) {
//                     // Check if the expanded class is currently applied
//                     // if (mobileNavWrapper.classList.contains('expanded')) {
//                         // Check if the clicked element is NOT within the mobileNavContent AND is NOT the toggler button
//                         if (!mobileNavContent?.contains(event.target) && event.target !== mobileNavBtn) {
//                             mobileNavWrapper.classList.remove('expanded');
//                         }
//                         // Check if the clicked element has the class "icon-close"
//                         if (event.target?.classList?.contains("icon-close")) {
//                             mobileNavWrapper.classList.remove('expanded');
//                         }
//                     // }
//                 });
//             }
//         })
//         .catch(error => console.error("Error loading header:", error));

//     // Load Footer
//     fetch("footer.html")
//         .then(response => response.text())
//         .then(data => document.getElementById("footer").innerHTML = data)
//         .catch(error => console.error("Error loading footer:", error));

//     // Load Sidebar
//     fetch("sidebar.html")
//         .then(response => response.text())
//         .then(data => document.getElementById("sidebar").innerHTML = data)
//         .catch(error => console.error("Error loading sidebar:", error));
// });