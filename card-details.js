const cardData = [
    {
      id: 1,
      title: "Card One",
      text: "Short description for Card One.",
      img: "https://via.placeholder.com/600x400",
      description: "This is a full detailed description for Card One. It contains more information, images, features, etc."
    },
    {
      id: 2,
      title: "Card Two",
      text: "Intro for Card Two.",
      img: "https://via.placeholder.com/600x400",
      description: "Here’s what Card Two is all about. You can explain services, features, etc."
    },
    {
      id: 3,
      title: "Card Three",
      text: "Summary for Card Three.",
      img: "https://via.placeholder.com/600x400",
      description: "Everything about Card Three is explained here with detailed description."
    }
  ];

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const card = cardData.find(item => item.id === id);

  if (card) {
    const detailHTML = `
      <div class="card">
        <img src="${card.img}" class="card-img-top" alt="${card.title}">
        <div class="card-body">
          <h3 class="card-title">${card.title}</h3>
          <p class="card-text">${card.description}</p>
          <a href="index.html" class="btn btn-secondary mt-3">← Back to Home</a>
        </div>
      </div>
    `;
    document.getElementById("card-detail").innerHTML = detailHTML;
  } else {
    document.getElementById("card-detail").innerHTML = `
      <div class="alert alert-danger">Card not found!</div>
      <a href="index.html" class="btn btn-secondary mt-3">← Back to Home</a>
    `;
  }