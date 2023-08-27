const ColorPickerBtn = document.querySelector("#color-picker");
const ColorList = document.querySelector(".all-colors");
const ClearAll = document.querySelector(".clear-all");
const PickedColors = JSON.parse(localStorage.getItem("picked-colors") || "[]");
const copyColor = (elem) => {
  navigator.clipboard.writeText(elem.dataset.color);
  elem.innerHTML = "Copied";
  setTimeout(() => (elem.innerHTML = elem.dataset.color), 1000);
};

const showColors = () => {
  if (!PickedColors.length) return;
  ColorList.innerHTML = PickedColors.map(
    (color) =>
      `<li class="color">
        <span class="box" style="background: ${color}; border: 2px solid ${
        color == "#ffffff" ? "#ccc" : color
      }"></span>
        <span class="value" data-color = ${color} >${color}</span>
      </li>`
  ).join("");

  document.querySelector(".picked-colors").classList.remove("hide");

  document.querySelectorAll(".color").forEach((li) => {
    li.addEventListener("click", (e) =>
      copyColor(e.currentTarget.lastElementChild)
    );
  });
};
showColors();

const activateEye = async () => {
  try {
    const colorSearch = new EyeDropper();
    const { sRGBHex } = await colorSearch.open();
    navigator.clipboard.writeText(sRGBHex);
    if (!PickedColors.includes(sRGBHex)) {
      PickedColors.push(sRGBHex);
      localStorage.setItem("picked-colors", JSON.stringify(PickedColors));
      showColors();
    }
  } catch (error) {
    console.log(error);
  }
};

const ClearAllColors = () => {
  PickedColors.length = 0;
  localStorage.setItem("picked-colors", JSON.stringify(PickedColors));
  document.querySelector(".picked-colors").classList.add("hide");
};

ClearAll.addEventListener("click", ClearAllColors);
ColorPickerBtn.addEventListener("click",activateEye);
ColorPickerBtn.addEventListener(
  "keydown",
  (e) => e.key === "s" && activateEye()
);
