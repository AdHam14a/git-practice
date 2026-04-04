const makeSize = (size) => {
  return () => {
    document.body.style.fontSize = `${size}px`;
  };
};

const size12 = makeSize(12);
const size14 = makeSize(14);
const size16 = makeSize(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
