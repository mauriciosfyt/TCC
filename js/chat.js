 const form = document.getElementById("messageForm");
  const messageText = document.getElementById("messageText");
  const imageInput = document.getElementById("imageInput");
  const chatContent = document.getElementById("chatContent");
  const imageName = document.getElementById("imageName");
  const imagePreview = document.getElementById("imagePreview");

  imageInput.addEventListener("change", function () {
    imageName.textContent = "";
    imagePreview.innerHTML = "";

    if (imageInput.files.length > 0) {
      const file = imageInput.files[0];
      imageName.textContent = file.name;

      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        imagePreview.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = messageText.value.trim();
    const file = imageInput.files[0];
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    const headerDiv = document.createElement("div");
    const nameSpan = document.createElement("span");
    nameSpan.classList.add("name");
    nameSpan.textContent = "Você";

    const timeSpan = document.createElement("span");
    timeSpan.classList.add("time");
    timeSpan.textContent = time;

    headerDiv.appendChild(nameSpan);
    headerDiv.appendChild(timeSpan);
    messageDiv.appendChild(headerDiv);

    if (text !== "") {
      const textDiv = document.createElement("div");
      textDiv.classList.add("text");
      textDiv.textContent = text;
      messageDiv.appendChild(textDiv);
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const img = document.createElement("img");
        img.src = reader.result;
        img.classList.add("chat-image", "my-2");
        messageDiv.appendChild(img);
        chatContent.appendChild(messageDiv);
        form.reset();
        imageName.textContent = "";
        imagePreview.innerHTML = "";
      };
      reader.readAsDataURL(file);
    } else if (text !== "") {
      chatContent.appendChild(messageDiv);
      form.reset();
      imageName.textContent = "";
      imagePreview.innerHTML = "";
    }
  });