let books = [
  {
    isbn: "1",
    image: "angular.jpg",
    stock: 34,
    quantity: 1,
    title: "Angular JS",
    price: 56
  },
  {
    isbn: "2",
    image: "ja_angular.jpg",
    stock: 4,
    quantity: 1,
    title: "JavaScript et Angular",
    price: 36
  },
  {
    isbn: "3",
    image: "jquery.jpg",
    stock: 34,
    quantity: 1,
    title: "JQuery",
    price: 56
  },
  {
    isbn: "4",
    image: "js.jpg",
    stock: 14,
    quantity: 1,
    title: "JavaScript : Le guide complet",
    price: 6
  },
  {
    isbn: "5",
    image: "js_jquery.jpg",
    stock: 4,
    quantity: 1,
    title: "JavaScript et JQuery",
    price: 46
  },
  {
    isbn: "6",
    image: "node_js.jpg",
    stock: 4,
    quantity: 1,
    title: "Node Js",
    price: 38
  },
  {
    isbn: "7",
    image: "php.jpg",
    stock: 4,
    quantity: 1,
    title: "Php",
    price: 46
  },
  {
    isbn: "8",
    image: "php_mysql.jpg",
    stock: 4,
    quantity: 1,
    title: "Php et Mysql",
    price: 38
  },
  {
    isbn: "9",
    image: "react.jpg",
    stock: 12,
    quantity: 1,
    title: "React",
    price: 98
  },
  {
    isbn: "10",
    image: "symfony_php.jpg",
    stock: 12,
    quantity: 1,
    title: "Php et Symfony",
    price: 46
  }
];

const tBody = document.getElementsByTagName('tbody')[0];
const totalPriceElement = document.getElementById('total-price');

// Fonction pour afficher les éléments dans le panier
function displayBooks() {
  tBody.innerHTML = ""; // Vider le corps du tableau
  let total = 0;
  books.forEach(book => {
    let tr = document.createElement('tr');

    // Image
    let firstTd = document.createElement('td');
    let img = document.createElement('img');
    img.src = `img/${book.image}`;
    img.alt = book.title;
    img.width = 50;
    img.height = 50;
    firstTd.append(img);
    tr.append(firstTd);

    // Quantité
    let qtyTd = document.createElement('td');
    let qtyInput = document.createElement('input');
    qtyInput.type = "number";
    qtyInput.value = book.quantity;
    qtyInput.min = 0;
    qtyInput.max = book.stock; // Ajouter la quantité maximale
    qtyInput.onchange = (e) => updateQuantity(book.isbn, e.target.value);
    qtyTd.append(qtyInput);
    tr.append(qtyTd);

    // Titre
    let titleTd = document.createElement('td');
    titleTd.textContent = book.title;
    tr.append(titleTd);

    // Prix unitaire
    let priceTd = document.createElement('td');
    priceTd.textContent = `$${book.price}`;
    tr.append(priceTd);

    // Total
    let totalTd = document.createElement('td');
    let bookTotal = book.price * book.quantity;
    totalTd.textContent = `$${bookTotal}`;
    total += bookTotal;
    tr.append(totalTd);

    // Actions
    let actionTd = document.createElement('td');
    let removeImg = document.createElement('img');
    removeImg.src = 'img/trash-icon.png'; // Chemin de l'image de poubelle
    removeImg.alt = 'Supprimer';
    removeImg.style.cursor = 'pointer';
    removeImg.width = 20;
    removeImg.height = 20;
    removeImg.onclick = () => removeBook(book.isbn);
    actionTd.append(removeImg);
    tr.append(actionTd);

    tBody.append(tr);
  });

  // Mettre à jour le prix total
  totalPriceElement.textContent = `$${total + 7}`; // Inclure les frais de port et taxes fixes
}

// Mettre à jour la quantité d'un livre
function updateQuantity(isbn, newQuantity) {
  books = books.map(book => {
    if (book.isbn === isbn) {
      const updatedQuantity = Math.min(parseInt(newQuantity), book.stock); // Assurer que la quantité ne dépasse pas le stock disponible
      return { ...book, quantity: updatedQuantity };
    }
    return book;
  });
  displayBooks();
}

// Ajouter un nouveau livre
function addBook() {
  const isbn = document.getElementById('isbn').value;
  const image = document.getElementById('image').value;
  const title = document.getElementById('title').value;
  const price = parseInt(document.getElementById('price').value);
  const stock = parseInt(document.getElementById('stock').value);

  books.push({ isbn, image, stock, quantity: 1, title, price });
  displayBooks();
}

// Supprimer un livre
function removeBook(isbn) {
  books = books.filter(book => book.isbn !== isbn);
  displayBooks();
}

// Initialiser l'affichage
displayBooks();
