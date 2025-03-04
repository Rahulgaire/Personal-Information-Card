// let name=get.elementById("name").value;
// let email=document.getElementById("email").value;
// let number=document.getElementById("number").value;
// let image=document.getElementById("image")
// let btn=document.getElementById("btn");
// let clear=document.getElementById("clear");
// let result=document.getElementById("result");
// function submitform(){
//     if(!name||email||number||image){
//         alert("Please fill all the fields");
//         return;
//     }
//     result.innerHtml= name;
//     alert("Form submitted successfully");
// }

function submitForm(e) {
  e.preventDefault();
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const imageInput = document.getElementById("image");
  const resultDiv = document.getElementById("result");

  // Check if fields are filled
  if (!name || !email || !tel || !imageInput.files[0]) {
    alert("Please fill all fields and upload an image.");
    return;
  }

  // Handle image upload
  // const file = imageInput.files[0];
  // const fileUrl = URL.createObjectURL(file);

  let images = [];

  for (let i = 0; i < imageInput.files.length; i++) {
    const file = imageInput.files[i];
    const fileUrl = URL.createObjectURL(file);
    images.push(fileUrl);
  }

  // Create card
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
            <div>
                <img src="${images[0]}" alt="Uploaded Image" style="max-width: 100%; height: auto;">    
               <!-- <img src="${images[1]}" alt="Uploaded Image" style="max-width: 100%; height: auto;">    
                 <img src="${images[2]}" alt="Uploaded Image" style="max-width: 100%; height: auto;">  -->
           </div>
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${tel}</p>
        `;

  // Append card to result divfile
  resultDiv.appendChild(card);

  // Show success alert
  alert("Form submitted successfully");
}

// Convert image to data URL

function clearForm() {
  // Reset the form
  document.getElementById("myForm").reset();

  // Optionally clear all cards
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Uncomment this line to delete all cards
}
