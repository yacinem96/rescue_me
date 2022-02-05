var url = location.pathname;
console.log(url);
var index = url.lastIndexOf("/") + 1;
console.log(index);
let path = url.substring(index);
console.log(path);
var favs = [];
var favoris=[-1];
var contacts = [];
var animals = [];
var htmlanimals = "";
var htmlcontact = "";
var noms = ["Chat", "Chien berger", "Husky", "Siamois", "Hamster", "Cochon d'inde", "Peroquet", "Peroquet 2", "Peruche"];
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
var descriptions = ["Some quick example text to build on the card title and make up the bulk of the card's content.", "Some quick example text to build on the card title and make up the bulk of the card's content.", "Some quick example text to build on the card title and make up the bulk of the card's content.", "Some quick example text to build on the card title and make up the bulk of the card's content.", "Some quick example text to build on the card title and make up the bulk of the card's content.", "Some quick example text to build on the card title and make up the bulk of the card's content.", "Some quick example text to build on the card title and make up the bulk of the card's content.", "Some quick example text to build on the card title and make up the bulk of the card's content.", "Some quick example text to build on the card title and make up the bulk of the card's content."];
var cons;
var tableContact = document.getElementById("tableContact");

// begin index page
if (path === "index.html") {

  var inputSearch = document.getElementById("inputSearch");
  var btnSearch = document.getElementById("btnSearch");
  btnSearch.addEventListener("click", search);

  function search(e) {
    e.preventDefault();
    var searchVal = inputSearch.value;
    console.log(searchVal);
    var found = animals.find(e => e.nom === searchVal);
    if (found) {
      const index = found.id;
      htmlanimals = `
             <div class="card m-3 shadow" style="width: 18rem;">
             <img src="images/${found.image}" class="card-img-top mt-2" alt="..." width="100%"
             height="160px">
             <div class="card-body">
               <h5 class="card-title">${found.nom}</h5>
               <p class="card-text">${found.description}</p> 
               <a style="width:50%"class="btn btn-dark" onclick="adopter(${found.id})">
               <i class="fas fa-plus-circle"></i>
               Adopter
               </a>
               <a  style="width:30%"class="btn  btn-danger  float-end" onclick="supp(${found.id})">
               <i class="fas fa-trash-alt"></i>
               </a>
               </div>
               </div>`;
      document.getElementById("animals").innerHTML = htmlanimals;
    } else {
      alert("Aucun resltat")
    }

  }
// if (localStorage.getItem("favs")) {
//   console.log("getitem favs");
//   favoris = localStorage.getItem("favs").split(",");
//   favs=favoris;
// } else {
  
// }
    


  function displayAnimals() {
    console.log(favoris);
    for (let i = 0; i < noms.length; i++) {
      const nom = noms[i];
      const image = images[i];
      const desc = descriptions[i];
      var animal = {
        id: i,
        nom: nom,
        image: image,
        description: desc,

      };

      animals.push(animal);

      htmlanimals += `
             <div class="card m-3 shadow" style="width: 18rem;">
             <img src="images/${image}" class="card-img-top mt-2" alt="..." width="100%"
             height="160px">
             <div class="card-body">
               <h5 class="card-title">${nom}</h5>
               <p class="card-text">${desc}</p> 
               <a style="width:50%"class="btn btn-dark" onclick="adopter(${i})">
               <i class="fas fa-plus-circle"></i>
               Adopter
               </a>
               <a  style="width:30%"class="btn  btn-outline-danger  float-end" id="fav" onclick="fav(${i})">
               <i class="fas fa-heart"></i>
               </a>
             </div>
           </div>`;
 console.log("favoris"+favoris);  
     var btnf = document.getElementById("fav");
console.log(btnf);
    var existe =favoris.find(e=> e==i);
    console.log("existe " + existe +" i "+i);
           if ( existe==i) {
             console.log("bloc if");
           btnf.classList.replace("btn-outline-danger","btn-danger");
           } else {
          console.log("walou");
           }
    }

    document.getElementById("animals").innerHTML = htmlanimals;
  }

  function fav(i) {
    favs=favoris;
    var existe =favoris.find(e=> e==i);
    console.log("favoris : "+favoris);
    //  var j=existe.index;
    if (existe) {
      favs.pop(i);


    } else {
      favs.push(i);
      // btnf.classList.replace("btn-outline-danger","btn-danger");
    }
    
    
    localStorage.setItem("favs", favs);
    console.log("table : " + favs);    


  }



  displayAnimals();
  // onload index
  onload = () => {
    // favoris = localStorage.getItem("favs").split(",");
    // favs=favoris;
    if (localStorage.getItem("favs")) {
      console.log("getitem favs");
      favoris = localStorage.getItem("favs").split(",");
      favs=favoris;
    } else {
      
    }
    
    cons = localStorage.getItem("contacts");
    console.log("cons = " + cons);

    tableContact.innerHTML = cons;
  }


  var btncree = document.getElementById("creeA");

  btncree.onclick = function (e) {

    e.preventDefault();
    console.log("btn click");

    const nom = document.getElementById("inputNom").value;
    const image = document.getElementById("inputImg").value;
    const desc = document.getElementById("txtDesc").value;
    const id = animals.length;
    const check = document.getElementById("gridCheck").checked;
    var path = image.split(`fakepath\\`);
    const img = path[1];


    console.log(check);
    if (!check) {
      alert("Veiller cochz le checkbox");
    }
    else if (!nom || !image || !desc) {
      alert("Veiller remplir les champs vide");

    }
    else {
      console.log(img);

      noms.push(nom);
      images.push(img);
      descriptions.push(desc);
      console.log(noms);

      var animal = {
        id: id,
        nom: nom,
        image: img,
        description: desc,
      };
      animals.push(animal);
      htmlanimals = "";
      displayAnimals();
      // window.open("index.html");
    }



  }

  function supp(i) {
    animals.splice(i, 1);
    htmlanimals = "";
    displayAnimals();
  }


}
// end index page


// Conatct page
else if (path === "contact.html") {

  var contacter = document.getElementById("contacter");

  // onload contact
  onload = () => {
    cons = localStorage.getItem("contacts");
    console.log("cons = " + cons);

    tableContact.innerHTML = cons;
  }

  contacter.onclick = function (e) {

    e.preventDefault();
    console.log("validate form");
    const nom = document.formContact.inputNom.value;
    const age = document.formContact.inputAge.value;
    const tel = document.formContact.inputTel.value;
    const profession = document.formContact.profession.value;
    const desc = document.formContact.txtDesc.value;
    const id = new Date();
    const check = document.getElementById("gridCheck").checked;
    console.log(profession);
    var found = contacts.find(e => e.tel === tel);
    console.log(check);

    if (!nom || !age || !desc || !profession || !tel) {
      alert("Veiller remplir les champs vide");
    }

    else if (!check) {
      alert("Veiller cochz le checkbox");
    }
    else if (found) {
      alert("Vous nous avez deja contacter");
    }
    else {
      var contact = {
        id: id,
        nom: nom,
        age: age,
        tel: tel,
        profession: profession,
        desc: desc

      };
      contacts.push(contact);
      console.log(contacts);

      htmlcontact = "";
      listeContact(contacts);

    }
  }
  function listeContact(contacts) {
    if (cons) {
      htmlcontact = cons;
    }

    for (let i = 0; i < contacts.length; i++) {
      htmlcontact += `
      <tr>
       <td>${contacts[i].id}</td>
       <td>${contacts[i].nom}</td>
       <td>${contacts[i].age}</td>
       <td>${contacts[i].tel}</td>
       <td>${contacts[i].profession}</td>
       <td>${contacts[i].desc}</td>
      </tr>
      `;


    }

    tableContact.innerHTML = htmlcontact;
    localStorage.setItem("contacts", htmlcontact)
  }

} 