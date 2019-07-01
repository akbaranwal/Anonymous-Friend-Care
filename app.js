var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');

box2.style.display = "none";
box3.style.display = "none";
box4.style.display = "none";

function func1(event) {
	event.preventDefault();
	box1.style.display = "none";
	box2.style.display = "block";
	box3.style.display = "none";
	box4.style.display = "none";
    console.log(' %c func1 called','color:yellow')

  

}

function func2(event){
   	event.preventDefault();
   box2.style.display = "none";
   box3.style.display = "block";
   box4.style.display = "none";
    console.log(' %c func1 called','color:red');

    

}


function func3(event) {
		event.preventDefault();
		box3.style.display = "none";
		box4.style.display = "block";
		box3.style.display = "none";
		var reach_us = document.getElementById('reach_us').value;
		var reward = document.getElementById('reward').value;
		var college = document.getElementById('college').value;
		var college_incident = document.getElementById('college_incident').value;
		var address = document.getElementById('address').value;
		var city = document.getElementById('city').value;
		var zipcode = document.getElementById('zipcode').value;
		var criminal =  document.getElementById('criminal').value;
		var branch =  document.getElementById('branch').value;
		var type_of_crime = document.getElementById('type_of_crime').value;
		var code = document.getElementById('code');
		var description = document.getElementById('description').value;
		code.style.color = "white";
		console.table({college_incident,address,city,zipcode,criminal,branch,reach_us, reward,code,type_of_crime,description});
		   var data = "college=" + college + "&" + "reward=" + reward + "&" +"reach_us=" + reach_us + "&" + "college_incident=" +college_incident + "&" + "branch=" + branch + "&" + "zipcode="+zipcode + "&" + "type_of_crime=" + type_of_crime + "&" + "criminal=" + criminal + "&" + "city=" + city + "&" + "description=" + description + "&" + "address=" + address ;
		   console.log(data);
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "submit_tip.php", true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.onload = function() {
				if (this.readyState == 4 && this.status == 200) {
					console.log(this.responseText);
					code.innerHTML= this.responseText;
					Ack(this.responseText);
				}
			 };
			xhr.send(data);
}

function func4(event) {
	event.preventDefault();
	box4.style.display = "none";
	var reach_us = document.getElementById('reach_us').value;
	var reward = document.getElementById('reward').value;
	var college = document.getElementById('college').value;
    var college_incident = document.getElementById('college_incident').value;
	var address = document.getElementById('address').value;
	var city = document.getElementById('city').value;
	var zipcode = document.getElementById('zipcode').value;
	var criminal =  document.getElementById('criminal').value;
	var branch =  document.getElementById('branch').value;
	var type_of_crime = document.getElementById('type_of_crime').value;
	var code = document.getElementById('code').value;
	var description = document.getElementById('description').value;
	
	console.table({college_incident,address,city,zipcode,criminal,branch,reach_us, reward,code,type_of_crime,description});
	   var data = "college=" + college + "&" + "reward=" + reward + "&" +"reach_us=" + reach_us + "&" + "college_incident=" +college_incident + "&" + "branch=" + branch + "&" + "zipcode="+zipcode + "&" + "type_of_crime=" + type_of_crime + "&" + "criminal=" + criminal + "&" + "city=" + city + "&" + "description=" + description + "&" + "address=" + address ;
	   console.log(data);
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "submit_tip.php", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.onload = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
				Ack(this.responseText);
			}
		 };
		xhr.send(data);

	
}
function Ack(id){
	console.log("Ack called !");
	swal("Good job!", "You Succesfully submitted a tip  ." +" Your Id is : " + id, "success");
}