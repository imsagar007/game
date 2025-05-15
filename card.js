
// const cardData = [
//     {
//       id: 1,
//       title: "Card One",
//       text: "Some quick example text for card one content.",
//       img: "https://via.placeholder.com/600x400",
//       description: "Detailed description for Card One."
//     },
//     {
//       id: 2,
//       title: "Card Two",
//       text: "Short info for Card Two.",
//       img: "https://via.placeholder.com/600x400",
//       description: "Longer, more descriptive text for Card Two here."
//     },
//     {
//       id: 3,
//       title: "Card Three",
//       text: "Intro summary for Card Three.",
//       img: "https://via.placeholder.com/600x400",
//       description: "This is Card Three's full detail page content."
//     }
//   ];

//   const container = document.getElementById("card-container");

//   cardData.forEach((card, index) => {
//     const delay = index * 0.5;
//     const col = document.createElement("div");
//     col.className = "col-md-4 mb-4";
//     col.innerHTML = `
//       <div class="card animate__animated animate__zoomIn" style="animation-delay: ${delay}s;">
//         <img src="${card.img}" class="card-img-top" alt="${card.title}">
//         <div class="card-body">
//           <h5 class="card-title">${card.title}</h5>
//           <p class="card-text">${card.text}</p>
//           <a href="card-detail.html?id=${card.id}" class="btn btn-primary">Download</a>
//         </div>
//       </div>
//     `;
//     container.appendChild(col);
//   });

  // tab card


  const cardGroups = {
    tab1: [
      {
        id: 1,
        title: "Card A1",
        text: "Quick summary of A1.",
        img: "https://via.placeholder.com/300x200",
        description: "Detailed info about Card A1."
      },
      {
        id: 2,
        title: "Card A2",
        text: "Quick summary of A2.",
        img: "https://via.placeholder.com/300x200",
        description: "Detailed info about Card A2."
      }
    ],
    tab2: [
      {
        id: 3,
        title: "Card B1",
        text: "Quick summary of B1.",
        img: "https://via.placeholder.com/300x200",
        description: "Detailed info about Card B1."
      },
      {
        id: 4,
        title: "Card B2",
        text: "Quick summary of B2.",
        img: "https://via.placeholder.com/300x200",
        description: "Detailed info about Card B2."
      }
    ],
    tab3: [
      {
        id: 5,
        title: "Card C1",
        text: "Quick summary of C1.",
        img: "https://via.placeholder.com/300x200",
        description: "Detailed info about Card C1."
      }
    ]
  };

  // Function to render cards for each tab
  function renderCards(tabId, cards) {
    const container = document.getElementById(`${tabId}-cards`);
    container.innerHTML = "";
    cards.forEach((card, index) => {
      const delay = index * 0.3;
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";
      col.innerHTML = `
        <div class="card animate__animated animate__fadeInUp" style="animation-delay: ${delay}s;">
          <img src="${card.img}" class="card-img-top" alt="${card.title}">
          <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.text}</p>
            <a href="card-detail.html?id=${card.id}" class="btn btn-primary">View Details</a>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  }

  // Render all tabs on load
  renderCards('tab1', cardGroups.tab1);
  renderCards('tab2', cardGroups.tab2);
  renderCards('tab3', cardGroups.tab3);

