const products = [
{
id:1,
name:"iPhone 16",
price:25990000,
category:"phone",
rating:4.5,
image:"https://placehold.co/300x200"
},
{
id:2,
name:"Samsung S24",
price:22990000,
category:"phone",
rating:4.4,
image:"https://placehold.co/300x200"
},
{
id:3,
name:"MacBook Pro",
price:45990000,
category:"laptop",
rating:4.8,
image:"https://placehold.co/300x200"
},
{
id:4,
name:"Dell XPS",
price:35990000,
category:"laptop",
rating:4.7,
image:"https://placehold.co/300x200"
},
{
id:5,
name:"iPad Air",
price:16990000,
category:"tablet",
rating:4.6,
image:"https://placehold.co/300x200"
},
{
id:6,
name:"Xiaomi Pad",
price:7990000,
category:"tablet",
rating:4.2,
image:"https://placehold.co/300x200"
},
{
id:7,
name:"AirPods Pro",
price:6990000,
category:"accessory",
rating:4.3,
image:"https://placehold.co/300x200"
},
{
id:8,
name:"Galaxy Buds",
price:3490000,
category:"accessory",
rating:4.1,
image:"https://placehold.co/300x200"
},
{
id:9,
name:"Pixel 9",
price:19990000,
category:"phone",
rating:4.6,
image:"https://placehold.co/300x200"
},
{
id:10,
name:"ThinkPad X1",
price:32990000,
category:"laptop",
rating:4.5,
image:"https://placehold.co/300x200"
},
{
id:11,
name:"Surface Pro",
price:28990000,
category:"tablet",
rating:4.4,
image:"https://placehold.co/300x200"
},
{
id:12,
name:"Magic Mouse",
price:2490000,
category:"accessory",
rating:4.0,
image:"https://placehold.co/300x200"
}
];

const container =
document.getElementById("productContainer");

const modal =
document.getElementById("modal");

const modalBody =
document.getElementById("modalBody");

let cartCount = 0;

function renderProducts(data){

container.innerHTML="";

data.forEach(product=>{

const card =
document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="${product.image}">
<div class="card-body">
<h3>${product.name}</h3>

<p class="price">
${product.price.toLocaleString()}đ
</p>

<p class="rating">
⭐ ${product.rating}
</p>

<button
class="btn detail-btn"
data-id="${product.id}">
Chi tiết
</button>

<button
class="btn cart-btn">
Thêm giỏ
</button>

</div>
`;

container.appendChild(card);
});
}

renderProducts(products);

document
.getElementById("searchInput")
.addEventListener("input",e=>{

const keyword =
e.target.value.toLowerCase();

const result =
products.filter(product=>
product.name
.toLowerCase()
.includes(keyword)
);

renderProducts(result);

});

document
.querySelectorAll("[data-category]")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const category =
btn.dataset.category;

if(category==="all"){
renderProducts(products);
return;
}

const result =
products.filter(
p=>p.category===category
);

renderProducts(result);

});
});

document
.getElementById("sortSelect")
.addEventListener("change",e=>{

const value=e.target.value;

const sorted=[...products];

switch(value){

case "priceAsc":
sorted.sort(
(a,b)=>a.price-b.price
);
break;

case "priceDesc":
sorted.sort(
(a,b)=>b.price-a.price
);
break;

case "name":
sorted.sort(
(a,b)=>
a.name.localeCompare(b.name)
);
break;

case "rating":
sorted.sort(
(a,b)=>b.rating-a.rating
);
break;
}

renderProducts(sorted);

});

container.addEventListener("click",e=>{

if(
e.target.classList.contains("cart-btn")
){

cartCount++;

document.getElementById(
"cartBadge"
).textContent=cartCount;
}

if(
e.target.classList.contains("detail-btn")
){

const id=
Number(e.target.dataset.id);

const product=
products.find(
p=>p.id===id
);

modalBody.innerHTML=`
<h2>${product.name}</h2>
<p>Giá:
${product.price.toLocaleString()}đ
</p>
<p>Rating:
${product.rating}
</p>
`;

modal.classList.remove("hidden");
}
});

document
.getElementById("closeModal")
.addEventListener("click",()=>{

modal.classList.add("hidden");

});

document
.getElementById("darkModeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});