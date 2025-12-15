document.addEventListener("DOMContentLoaded", function () {
  function $(sel) { return document.querySelector(sel); }
  const profileImg = $("#profileImg");
  const changePhotoBtn = $("#changePhotoBtn");
  const resetBtn = $("#resetBtn");
  const themeToggleBtn = $("#themeToggleBtn");
  const username = $("#username");
  const nameInput = $("#nameInput");
  const likeBtn = $("#likeBtn");
  const likes = $("#likes");

  const img1 = profileImg.src;
  const img2 = "https://i.pinimg.com/474x/ac/94/04/ac9404eea5831c035cc9e333f967ea61.jpg";
  let currentImg = (profileImg.src === img2) ? 2 : 1;
  const initialName = username.textContent;
  const initialLikes = Number(likes.textContent) || 0;

  // Смена фото по кнопке
  changePhotoBtn.addEventListener("click", function () {
    if (currentImg === 1) {
      profileImg.src = img2 || img1;
      currentImg = 2;
    } else {
      profileImg.src = img1 || img2;
      currentImg = 1;
    }
  });

  // Сброс имени и лайков
  resetBtn.addEventListener("click", function () {
    username.textContent = initialName;
    nameInput.value = "";
    likes.textContent = String(initialLikes);
    profileImg.src = img1;
    currentImg = 1;
  });

  // Увеличиваем счётчик лайков
  likeBtn.addEventListener("click", function () {
    likes.textContent = String(Number(likes.textContent || 0) + 1);
  });

  // Подсказки при наведении
  [changePhotoBtn, resetBtn, likeBtn, themeToggleBtn].forEach(function (btn) {
    btn.addEventListener("mouseover", function () { });
  });

  // Проверка input
  nameInput.addEventListener("input", function (e) {
    const v = e.target.value;
    if (v.trim() === "") {
      e.target.classList.add("invalid");
    } else {
      e.target.classList.remove("invalid");
      username.textContent = v;
    }
  });

  // Переключение темы
  themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
});
