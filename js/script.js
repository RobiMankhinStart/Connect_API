// ................Dom creation
let mainDiv = document.querySelector(".mainDiv");
let inputSearchDiv = document.querySelector(".inputSearchDiv");
let inputSearch = document.querySelector(".inputSearch");
let searchButton = document.querySelector(".searchButton");
let errorMessage = document.querySelector(".errorMessage");

let userListDiv = document.createElement("div");
userListDiv.classList.add("userListDiv");
mainDiv.appendChild(userListDiv);

let allData = [];
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    console.log(data);
    data.map((item) => {
      //....... dom creation
      let singleUser = document.createElement("div");
      let imgDiv = document.createElement("div");
      let name = document.createElement("h2");
      let username = document.createElement("h3");
      let email = document.createElement("h3");

      // adding clasName
      singleUser.classList.add("singleUser");
      imgDiv.classList.add("imgDiv");
      name.classList.add("name");
      username.classList.add("username");
      email.classList.add("email");

      // attaching value in dom

      name.innerHTML = `Name : ${item.name}`;
      username.innerHTML = `User Name : ${item.username}`;
      email.innerHTML = `Email : ${item.email}`;

      // appending
      singleUser.appendChild(imgDiv);
      singleUser.appendChild(name);
      singleUser.appendChild(username);
      singleUser.appendChild(email);
      userListDiv.appendChild(singleUser);
    });
  });
// search button click event
searchButton.addEventListener("click", () => {
  // clearing datas before showing results
  userListDiv.innerHTML = "";

  if (!inputSearch.value) {
    errorMessage.innerHTML = "Enter any name";
    allData.map((item) => {
      //....... dom creation
      let singleUser = document.createElement("div");
      let imgDiv = document.createElement("div");
      let name = document.createElement("h2");
      let username = document.createElement("h3");
      let email = document.createElement("h3");

      // adding clasName
      singleUser.classList.add("singleUser");
      imgDiv.classList.add("imgDiv");
      name.classList.add("name");
      username.classList.add("username");
      email.classList.add("email");

      // attaching value in dom

      name.innerHTML = `Name : ${item.name}`;
      username.innerHTML = `User Name : ${item.username}`;
      email.innerHTML = `Email : ${item.email}`;

      // appending
      singleUser.appendChild(imgDiv);
      singleUser.appendChild(name);
      singleUser.appendChild(username);
      singleUser.appendChild(email);
      userListDiv.appendChild(singleUser);
    });
  } else {
    const searchdItem = allData.find((i) => i.username == inputSearch.value);

    if (!searchdItem) {
      errorMessage.innerHTML = "no item found";
      userListDiv.innerHTML = "";
    } else {
      errorMessage.innerHTML = "";
      userListDiv.innerHTML = "";

      //....... dom creation
      let singleUser = document.createElement("div");
      let imgDiv = document.createElement("div");
      let name = document.createElement("h2");
      let username = document.createElement("h3");
      let email = document.createElement("h3");

      // adding clasName
      singleUser.classList.add("singleUser");
      imgDiv.classList.add("imgDiv");
      name.classList.add("name");
      username.classList.add("username");
      email.classList.add("email");

      // appending
      singleUser.appendChild(imgDiv);
      singleUser.appendChild(name);
      singleUser.appendChild(username);
      singleUser.appendChild(email);
      userListDiv.appendChild(singleUser);

      // attaching value in dom
      name.innerHTML = `Name : ${searchdItem.name}`;
      username.innerHTML = `User Name : ${searchdItem.username}`;
      email.innerHTML = `Email : ${searchdItem.email}`;
    }
  }
});
