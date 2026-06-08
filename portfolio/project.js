function openModal(title, image, description){

    document.getElementById("projectModal").style.display = "flex";

    document.getElementById("modalTitle").innerText = title;

    document.getElementById("modalImage").src = image;

    document.getElementById("modalDescription").innerText = description;

}

function closeModal(){

    document.getElementById("projectModal").style.display = "none";

}

window.onclick = function(event){

    const modal = document.getElementById("projectModal");

    if(event.target === modal){

        modal.style.display = "none";

    }

}