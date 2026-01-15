
let url = 'http://universities.hipolabs.com/search?name=';

let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click",async()=>{
     let country = input.value;
     let collArr = await getColleges(country);
     
     display(collArr);
    
});


async function getColleges(country) {
  
  try{
       let res = await axios.get(url+country);
       return res.data;
  }

  catch(err){
    return [];
  }
};


function display(colleges){
  let list = document.querySelector("#list");
  list.innerText = "";
  for(clg of colleges){
    let li = document.createElement("li");
    li.innerText = clg.name;
    list.appendChild(li);
  }
}



