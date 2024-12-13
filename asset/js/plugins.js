const carousel2 = document.querySelector(".ae-carousel2"),
  firstImg2 = carousel2.querySelectorAll("img")[0],
  arrowIcons2 = document.querySelectorAll(".ae-wrapper2 i");

let isDragStart2 = false,
  isDragging2 = false,
  prevPageX2,
  prevScrollLeft2,
  positionDiff2;

const showHideIcons2 = () => {
  let scrollWidth = carousel2.scrollWidth - carousel2.clientWidth;
  arrowIcons2[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
  arrowIcons2[1].style.display =
    carousel2.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons2.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14;
    carousel2.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout2(() => showHideIcons2(), 60);
  });
});

const autoSlide2 = () => {
  if (
    carousel2.scrollLeft - (carousel2.scrollWidth - carousel2.clientWidth) >
      -1 ||
    carousel2.scrollLeft <= 0
  )
    return;
  positionDiff2 = Math.abs(positionDiff2);
  let firstImgWidth = firstImg2.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiff2;
  if (carousel2.scrollLeft > prevScrollLeft2) {
    return (carousel2.scrollLeft +=
      positionDiff2 > firstImgWidth / 3 ? valDifference : -positionDiff2);
  }
  carousel2.scrollLeft -=
    positionDiff2 > firstImgWidth / 3 ? valDifference : -positionDiff2;
};

const dragStart2 = (e) => {
  isDragStart2 = true;
  prevPageX2 = e.pageX || e.touches[0].pageX;
  prevScrollLeft2 = carousel2.scrollLeft;
};

const dragging2 = (e) => {
  if (!isDragStart2) return;
  e.preventDefault();
  isDragging2 = true;
  carousel2.classList.add("dragging2");
  positionDiff2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
  carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
  showHideIcons2();
};

const dragStop2 = () => {
  isDragStart2 = false;
  carousel2.classList.remove("dragging2");
  if (!isDragging2) return;
  isDragging2 = false;
  autoSlide2();
};
carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("touchstart", dragStart2);

document.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchmove", dragging2);

document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("touchend", dragStop2);

const carousel3 = document.querySelector(".ae-carousel3"),
  firstImg3 = carousel3.querySelectorAll("img")[0],
  arrowIcons3 = document.querySelectorAll(".ae-wrapper3 i");

let isDragStart3 = false,
  isDragging3 = false,
  prevPageX3,
  prevScrollLeft3,
  positionDiff3;

const showHideIcons3 = () => {
  let scrollWidth = carousel3.scrollWidth - carousel3.clientWidth;
  arrowIcons3[0].style.display = carousel3.scrollLeft == 0 ? "none" : "block";
  arrowIcons3[1].style.display =
    carousel3.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons3.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14;
    carousel3.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout3(() => showHideIcons2(), 60);
  });
});

const autoSlide3 = () => {
  if (
    carousel3.scrollLeft - (carousel3.scrollWidth - carousel3.clientWidth) >
      -1 ||
    carousel3.scrollLeft <= 0
  )
    return;
  positionDiff3 = Math.abs(positionDiff3);
  let firstImgWidth = firstImg3.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiff2;
  if (carousel3.scrollLeft > prevScrollLeft2) {
    return (carousel3.scrollLeft +=
      positionDiff3 > firstImgWidth / 3 ? valDifference : -positionDiff3);
  }
  carousel3.scrollLeft -=
    positionDiff3 > firstImgWidth / 3 ? valDifference : -positionDiff3;
};

const dragStart3 = (e) => {
  isDragStart3 = true;
  prevPageX3 = e.pageX || e.touches[0].pageX;
  prevScrollLeft3 = carousel3.scrollLeft;
};

const dragging3 = (e) => {
  if (!isDragStart3) return;
  e.preventDefault();
  isDragging3 = true;
  carousel3.classList.add("dragging3");
  positionDiff3 = (e.pageX || e.touches[0].pageX) - prevPageX3;
  carousel3.scrollLeft = prevScrollLeft3 - positionDiff3;
  showHideIcons3();
};

const dragStop3 = () => {
  isDragStart3 = false;
  carousel3.classList.remove("dragging3");
  if (!isDragging3) return;
  isDragging3 = false;
  autoSlide3();
};
carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("touchstart", dragStart3);

document.addEventListener("mousemove", dragging3);
carousel3.addEventListener("touchmove", dragging3);

document.addEventListener("mouseup", dragStop3);
carousel3.addEventListener("touchend", dragStop3);
