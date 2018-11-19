function drawData(arr) {
    const template = document.querySelector('#template');
    console.log(arr.articles);
    let fragment = document.createDocumentFragment();

    const container = document.querySelector('#container');
    console.log(container);
    //container.appendChild(template)
    //console.log(container)

    arr.forEach(element => {
        console.log(element);
        let content = template.content.cloneNode(true);
        let author = content.querySelector('.article__author');
        author.textContent = element.author;
        let title = content.querySelector('.article__title');
        title.textContent = element.title;
        let description = content.querySelector('.article__description');
        description.textContent = element.description;

        let img = content.querySelector('.article__img');
        img.setAttribute('src', element.urlToImage);
        fragment.appendChild(author);
        fragment.appendChild(title);
        fragment.appendChild(description);
        fragment.appendChild(img);

    });
    container.appendChild(fragment);
}