let allProducts = [
  { id: 1, title: "Album 1", price: 12.93, img: "Images/Album 1.png" },
  { id: 2, title: "Album 2", price: 21, img: "Images/Album 2.png" },
  { id: 3, title: "Album 3", price: 33, img: "Images/Album 3.png" },
  { id: 4, title: "Album 4", price: 41.98, img: "Images/Album 4.png" },
  { id: 5, title: "Coffee", price: 98, img: "Images/Cofee.png" },
  { id: 6, title: "Shirt", price: 65.33, img: "Images/Shirt.png" },
];
const shopItemsContainer = document.querySelector(".shop-items");

allProducts.forEach(function (product) {
  let productContainer = document.createElement("div");
  productContainer.classList.add("shop-itme");

  let productTitleSpan = document.createElement("span");
  productTitleSpan.classList.add("shop-item-title");
  productTitleSpan.innerHTML = product.title;

  let productImageElem = document.createElement("img");
  productImageElem.classList.add("shop-item-image");
  productImageElem.setAttribute("src", product.img);

  let productDetailContainer = document.createElement("div");
  productDetailContainer.classList.add("shop-item-details");

  let productPriceSpan = document.createElement("span");
  productPriceSpan.innerHTML = product.price;
  productPriceSpan.classList.add("shop-item-price");

  let productAddBtn = document.createElement("button");
  productAddBtn.innerHTML = "Add to cart";
  productAddBtn.className = "btn btn-primary shop-item-button";
  productDetailContainer.append(productPriceSpan, productAddBtn);
  productContainer.append(
    productTitleSpan,
    productImageElem,
    productDetailContainer
  );
  shopItemsContainer.append(productContainer);
});
