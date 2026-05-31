const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1020/800/400",
    "https://picsum.photos/id/1024/800/400",
    "https://picsum.photos/id/1025/800/400",
    "https://picsum.photos/id/1035/800/400",
    "https://picsum.photos/id/1040/800/400",
    "https://picsum.photos/id/1050/800/400"
];

const commands = [
    "Open Gallery",
    "Next Image",
    "Previous Image",
    "Play Slideshow",
    "Pause Slideshow",
    "Open Modal",
    "Close Modal"
];

let currentIndex = 0;
let slideshow = null;

const mainImage =
document.getElementById("mainImage");

const thumbnails =
document.getElementById("thumbnails");

const modal =
document.getElementById("imageModal");

const modalImage =
document.getElementById("modalImage");

const commandPalette =
document.getElementById("commandPalette");

const commandInput =
document.getElementById("commandInput");

const commandList =
document.getElementById("commandList");

function renderThumbnails() {

    thumbnails.innerHTML = "";

    images.forEach((img,index)=>{

        const image =
        document.createElement("img");

        image.src = img;

        image.addEventListener("click",()=>{
            showImage(index);
        });

        thumbnails.appendChild(image);
    });
}

function showImage(index){

    currentIndex=index;

    mainImage.src=images[index];
}

function nextImage(){

    currentIndex++;

    if(currentIndex>=images.length){
        currentIndex=0;
    }

    showImage(currentIndex);
}

function prevImage(){

    currentIndex--;

    if(currentIndex<0){
        currentIndex=images.length-1;
    }

    showImage(currentIndex);
}

document
.getElementById("nextBtn")
.addEventListener("click",nextImage);

document
.getElementById("prevBtn")
.addEventListener("click",prevImage);

function toggleSlideshow(){

    const btn =
    document.getElementById("playBtn");

    if(slideshow){

        clearInterval(slideshow);

        slideshow=null;

        btn.textContent="Play";

    }else{

        slideshow=setInterval(
            nextImage,
            2000
        );

        btn.textContent="Pause";
    }
}

document
.getElementById("playBtn")
.addEventListener("click",toggleSlideshow);

mainImage.addEventListener("click",()=>{

    modal.classList.remove("hidden");

    modalImage.src=
    images[currentIndex];
});

document
.getElementById("closeModal")
.addEventListener("click",()=>{

    modal.classList.add("hidden");
});

function openPalette(){

    commandPalette.classList.remove("hidden");

    commandInput.focus();

    renderCommands(commands);
}

function closePalette(){

    commandPalette.classList.add("hidden");

    commandInput.value="";
}

function renderCommands(list){

    commandList.innerHTML="";

    list.forEach(command=>{

        const li =
        document.createElement("li");

        li.textContent=command;

        commandList.appendChild(li);
    });
}

commandInput.addEventListener("input",()=>{

    const keyword=
    commandInput.value.toLowerCase();

    const filtered=
    commands.filter(command=>
        command.toLowerCase()
        .includes(keyword)
    );

    renderCommands(filtered);
});

document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="k"){

        e.preventDefault();

        openPalette();
    }

    if(e.key==="Escape"){

        closePalette();

        modal.classList.add("hidden");
    }

    if(e.key==="ArrowRight"){

        nextImage();
    }

    if(e.key==="ArrowLeft"){

        prevImage();
    }

    if(e.code==="Space"){

        e.preventDefault();

        toggleSlideshow();
    }

    const num=parseInt(e.key);

    if(num>=1 && num<=9){

        showImage(num-1);
    }
});

renderThumbnails();
renderCommands(commands);
showImage(0);