
function insertNavigation() {
  const content = `
    <a class="navbar-brand fw-medium fs-4" href="https://shortbyte.github.io/GTA5-Cloth-Assets/">
      GTA5 Cloth Assets
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link fw-medium active" aria-current="page" href="index.html">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link fw-medium" aria-current="page" href="masks.html">
            Masks Assets
          </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link fw-medium dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accessories Assets
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item fw-medium" href="accessories-female.html">Accessories (Female)</a></li>
            <li><a class="dropdown-item fw-medium" href="accessories-male.html">Accessories (Male)</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link fw-medium dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tops Assets
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item fw-medium" href="tops-female.html">Tops (Female)</a></li>
            <li><a class="dropdown-item fw-medium" href="tops-male.html">Tops (Male)</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link fw-medium dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Legs Assets
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item fw-medium" href="legs-female.html">Legs (Female)</a></li>
            <li><a class="dropdown-item fw-medium" href="legs-male.html">Legs (Male)</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link fw-medium dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shoes Assets
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item fw-medium" href="shoes-female.html">Shoes (Female)</a></li>
            <li><a class="dropdown-item fw-medium" href="shoes-male.html">Shoes (Male)</a></li>
          </ul>
        </li>

        <a class="nav-link px-0 ms-3" href="https://github.com/ShortByte/GTA5-Cloth-Assets" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="navbar-nav-svg" viewBox="0 0 512 499.36" role="img">
            <title>GitHub</title>
            <path fill="currentColor" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z">
            </path>
          </svg>
          <small class="d-lg-none ms-2">GitHub</small>
        </a>

        <li class="nav-item ms-3" style="margin-top: 2px">
          <a class="fw-medium btn btn-warning" aria-current="page" target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=2M2DMNEHGLGP4">
            Donate 🎉
          </a>
        </li>
      </ul>
    </div>
  `;

  const element = document.getElementById('navigation-container');

  if(element) {
    element.innerHTML = content;
  }
}

function insertFooter() {
  const content = `
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <span class="mb-3 mb-md-0 text-body-secondary">
          © 2024 Enneken-Solutions, (ShortByte)<br/>
          Made with <i class="bi bi-heart-fill" style="color: red"></i> in Cologne, Germany.
        </span>          
      </div>
  
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
          <a class="text-body-secondary fs-4" target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=2M2DMNEHGLGP4">
            <i class="bi bi-paypal"></i>
          </a>
        </li>
        <li class="ms-3">
          <a class="text-body-secondary fs-4" target="_blank" href="https://github.com/ShortByte">
            <i class="bi bi-github"></i>
          </a>
        </li>
        <li class="ms-3">
          <a class="text-body-secondary fs-4" target="_blank" href="https://discordapp.com/channels/@me/137341334745907200">
            <i class="bi bi-discord"></i>
          </a>
        </li>
      </ul>
    </footer>
  `;

  const element = document.getElementById('footer-container');

  if(element) {
    element.innerHTML = content;
  }
}

function preparePage(data) {
  const element = document.getElementById('page-content');
  element.innerHTML = '';

  Object.keys(data).forEach((key) => {
    const header = document.createElement('div');
    header.classList.add('col-12', 'py-2', 'my-4', 'border-bottom');

    const headerLabel = document.createElement('h3');
    headerLabel.innerText = `Drawable ID: ${key}`;
    header.append(headerLabel);

    const headerSmall = document.createElement('small');
    headerSmall.classList.add('fs-5')
    headerSmall.innerText = ` (Available Textures: ${data[key].length})`;
    headerLabel.append(headerSmall);

    element.append(header);

    const row = document.createElement('div');
    row.classList.add('row');

    for (let item of data[key]) {
      const component = document.createElement('div');
      component.classList.add('col-12', 'col-md-4', 'col-lg-3', 'col-xl-2');

      const card = document.createElement('div');
      card.classList.add('card', 'my-2');

      if (item.size > 100) {
        const cardPreviewImage = document.createElement('img');
        cardPreviewImage.classList.add('card-img-top', 'bg-light');
        cardPreviewImage.src = item.url;
        card.append(cardPreviewImage);
      }

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const cardBodyHeader = document.createElement('h5');
      cardBodyHeader.classList.add('card-title', 'text-center'),
        cardBodyHeader.innerText = `Texture ID: ${item.index}`;
      cardBody.append(cardBodyHeader);

      if (item.size <= 100) {
        const cardBodySubHeader = document.createElement('h6');
        cardBodySubHeader.classList.add('card-subtitle', 'text-center', 'mb-2', 'text-body-secondary');
        cardBodySubHeader.innerText = 'Not present in the game';
        cardBody.append(cardBodySubHeader);
      } else {
        const cardBodyButton = document.createElement('a');
        cardBodyButton.classList.add('btn', 'btn-primary', 'w-100');
        cardBodyButton.innerText = 'Copy image link';

        cardBodyButton.onclick = ((event) => {

          navigator.clipboard.writeText(item.url).then(() => {
            cardBodyButton.innerText = 'Copied!';
            cardBodyButton.classList.remove('btn-primary');
            cardBodyButton.classList.add('btn-success');

            setTimeout(() => {
              cardBodyButton.innerText = 'Copy image link';
              cardBodyButton.classList.add('btn-primary');
              cardBodyButton.classList.remove('btn-success');
            }, 1_500);
          }, () => {
            cardBodyButton.innerText = 'Copy failed!';
            cardBodyButton.classList.remove('btn-primary');
            cardBodyButton.classList.add('btn-danger');

            setTimeout(() => {
              cardBodyButton.innerText = 'Copy image link';
              cardBodyButton.classList.add('btn-primary');
              cardBodyButton.classList.remove('btn-danger');
            }, 1_500);
          });
        });

        cardBody.append(cardBodyButton);
      }

      card.append(cardBody);

      component.append(card);
      row.append(component);
    }

    element.append(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  insertNavigation();
  insertFooter();
  
  if (url !== undefined) {
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
      preparePage(res);
    })
    .catch((error) => console.error(error));
  }
});