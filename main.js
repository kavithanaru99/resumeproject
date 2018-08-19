// function Loadjson(file,callback){
// 	var xhr=new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json")
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState === 4 && xhr.status == "200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// }

// Loadjson("data.json",function(text){
// 	var data = JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	carrerinfo(data.carrer);
// 	qualify(data.educationalqualification);
// 	skillset(data.skills);
// 	achiev(data.achievements);
// })
function loadjson(file){
  return new Promise((resolve,reject)=>{
  	return fetch(file).then(response=>{
  		if(response.ok){
  			resolve(response.json());
  		}
  		else{
  			reject(new Error('error'));
  		}
  	})
  })
}

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data)
	basics(data.details);
	carrerinfo(data.carrer);
	qualify(data.educationalqualification);
	skillset(data.skills);
	achiev(data.achievements);
})

 



var left = document.querySelector(".left");

function basics(det){
   var img = document.createElement("img");
   img.src = det.image;
   left.appendChild(img);

var name = document.createElement("h3");
name.textContent = det.name;
left.appendChild(name);

var phoneno = document.createElement("h3");
phoneno.textContent = det.phoneno;
left.appendChild(phoneno);

var email = document.createElement("a");
email.href = "narukavithareddy@gmail.com";
email.textContent = det.email;
left.appendChild(email);

var add = document.createElement("h2");
add.textContent="address";
left.appendChild(add);

var hr = document.createElement("hr");
left.appendChild(hr);

var address = document.createElement("h3");
address.textContent = det.address;
left.appendChild(address);

}
var right = document.querySelector(".right");
function carrerinfo(car){
	var add = document.createElement("h3");
	add.textContent ="carrerobjective";
	right.appendChild(add);

	 var hr = document.createElement("hr");
	    right.appendChild(hr);

	    var info = document.createElement("info");
	       info.textContent =car.info;
	       right.appendChild(info);
}
var right = document.querySelector(".right");

function qualify(edu){
	var add = document.createElement("h4");
	add.textContent = "educationalqualificationtion";
	right.appendChild(add);

	var hr = document.createElement("hr");
	right.appendChild(hr);

	var table1 = document.createElement("table");
     table1.border = "2";
     right.appendChild(table1);


     tabledata=" ";
     for(i=0;i<edu.length;i++)
     {
     	tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].percentage+"</td><tr>";
     }
     table1.innerHTML=tabledata;
 }
 function skillset(skill){
 	var sk = document.createElement("h1");
 	sk.textContent="technicalskills";
 	right.appendChild(sk);

 	var hr = document.createElement("hr")
 	 right.appendChild(hr);

      	 for(i=0;i<skill.length;i++){
       var s = document.createElement("h3");
 	 	s.textContent=skill[i].title;
 	 	right.appendChild(s);

 	 	var li = document.createElement("li");
 	 	var ul = document.createElement("u1");
        li.textContent = skill[i].title;

 	 	ul.appendChild(li);
 	 	right.appendChild(ul); 
 	 }
 }
 var right = document.querySelector(".right");
  
 function achiev(ac){
 	var a = document.createElement("h1");
 	a. textContent="achievements";
 	right.appendChild(a);

 	var hr = document.createElement("hr");
 	right.appendChild(hr);

      	 for(i=0;i<ac.length;i++){
      	 	 	 	var d = document.createElement("li");
 	 	var l = document.createElement("u1");
        d.textContent = ac[i].title;

 	 	l.appendChild(d);
 	 	right.appendChild(l); 

       
 
 	 }
 }
 function openpage(){
 	window.open("resumeproject.html","_self",true)
 }


