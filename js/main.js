var url=location.pathname;
console.log(url);
var index=url.lastIndexOf("/")+1;
console.log(index);
let path=url.substring(index);
console.log(path);


if (path==="index.html") {

    var noms=["Chat","Chien berger","Husky","Siamois","Hamster","Cochon d'inde","Peroquet","Peroquet 2","Peruche"];
    var images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];
    var descriptions=["Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content."];
    var animals=[];
    var htmlanimals = "";

    function displayAnimals(){
        for (let i = 0; i < noms.length; i++) {
            const nom=noms[i];
            const image=images[i];
            const desc=descriptions[i];
            var animal={
                id:i,
                nom:nom,
                image:image,
                description:desc,

            };
        
             animals.push(animal);
        
             htmlanimals+=`
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
               <a  style="width:30%"class="btn  btn-danger  float-end">
               <i class="fas fa-trash-alt"></i>
               </a>
             </div>
           </div>`;
            
        }
        
        
        document.getElementById("animals").innerHTML=htmlanimals;
    }

    onload=() =>{
       displayAnimals();  
    }

    
    var btncree=document.getElementById("creeA");

    btncree.onclick=function(e){
    
      e.preventDefault();
      console.log("btn click");
    
      const nom=document.getElementById("inputNom").value;
      const image=document.getElementById("inputImg").value;
      const desc=document.getElementById("txtDesc").value;
      const id=animals.length;
      const check =document.getElementById("gridCheck").checked;
      var path =image.split(`fakepath\\`);
      const img =path[1];
      
       console.log(check);
       if (!check) {
        alert("Veiller cochz le checkbox");
       }
       else if(!nom || !image || !desc ){
        alert("Veiller remplir les champs vide");
             
        }
        else{
          console.log(img);
    
      noms.push(nom);
      images.push(img);
      descriptions.push(desc);
      console.log(noms);
    
      var  animal={
        id:id,
        nom:nom,
        image:img,
        description:desc,
    };
      animals.push(animal);
      htmlanimals = "";
    displayAnimals();
    
        }
     
    
    }









} else if (path==="contact.html") {
    
} 