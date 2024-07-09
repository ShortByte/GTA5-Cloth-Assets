
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

    for(let item of data[key]) {
      const component = document.createElement('div');
      component.classList.add('col-12', 'col-md-4', 'col-lg-3', 'col-xl-2');

      const card = document.createElement('div');
      card.classList.add('card', 'my-2');

      if(item.size > 100) {
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

      if(item.size <= 100) {
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

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    preparePage(res);
  })
  .catch((error) => console.error(error));