const Details = [
	{
		id: "AWPDetails",
		image: "Images/AWP/Asiimov.png",
		name: "AWP|Asiimov",
		price: "100$-150$",
		Description: "It has been custom painted with a sci-fi design.",
		FlavorText: "Anyone can predict the future... a visionary shapes it",
		FinishStyle: " Custom Paint Job",
		Added: "18 October 2019",
		Creator: " Workshop Submission",
		Update: "Cache and Release",
		Quality:
			"StatTrak Factory New,StatTrak Minimal Wear,Factory New,Minimal Wear",
		case: "Images/AWP/CS20.png",
	},

	{
		id: "AWPDetails",
		image: "Images/AWP/Wildfire.png",
		name: "AWP|Wildfire",
		price: "2000$-2500$",
		Description: "It has been custom painted with a knotwork dragon.",
		FlavorText: "200 keys could never unlock its secrets",
		FinishStyle: " Custom Paint Job",
		Added: "18 October 2019",
		Creator: " Workshop Submission",
		Update: "Cache and Release",
		Quality:
			"StatTrak Factory New,StatTrak Minimal Wear,Factory New,Minimal Wear",
		case: "Images/AWP/CS20.png",
	},
	{
		id: "AWPDetails",
		image: "Images/AWP/Fade.png",
		name: "AWP|Fade",
		price: "2000$-2500$",
		Description: "It has been custom painted with a knotwork dragon.",
		FlavorText: "200 keys could never unlock its secrets",
		FinishStyle: " Custom Paint Job",
		Added: "18 October 2019",
		Creator: " Workshop Submission",
		Update: "Cache and Release",
		Quality:
			"StatTrak Factory New,StatTrak Minimal Wear,Factory New,Minimal Wear",
		case: "Images/AWP/CS20.png",
	},
	{
		id: "KNIFEDetails",
		image: "Images/Knives/Marble Fade.png",
		name: "Knife|MarbleFade",
		price: "1000$-1500$",
		Description: " The nail that sticks out gets the hammer",
		FlavorText: "Anyone can predict the future... a visionary shapes it",
		FinishStyle: " Custom Paint Job",
		Added: "18 October 2019",
		Creator: " Workshop Submission",
		Update: "Cache and Release",
		Quality:
			"StatTrak Factory New,StatTrak Minimal Wear,Factory New,Minimal Wear",
		case: "Images/AWP/CS20.png",
	},
	{
		id: "KNIFEDetails",
		image: "Images/Knives/Tiger tooth.png",
		name: "Knife|Tigertooth",
		price: "1000$-1500$",
		Description: " The nail that sticks out gets the hammer",
		FlavorText: "Anyone can predict the future... a visionary shapes it",
		FinishStyle: " Custom Paint Job",
		Added: "18 October 2019",
		Creator: " Workshop Submission",
		Update: "Cache and Release",
		Quality:
			"StatTrak Factory New,StatTrak Minimal Wear,Factory New,Minimal Wear",
		case: "Images/AWP/CS20.png",
	},
	{
		id: "AKDetails",
		image: "./Images/AK-47/Vulcan.png",
		name: "AK-47|Vulcan",
		price: "200$-250$",
		Description:
			"  It has been custom painted to depict mutated rats trying to escape a radioactive,neon green forest.",
		FlavorText: "Anyone can predict the future... a visionary shapes it",
		FinishStyle: " Custom Paint Job",
		Added: "18 October 2019",
		Creator: " Workshop Submission",
		Update: "Cache and Release",
		Quality:
			"StatTrak Factory New,StatTrak Minimal Wear,Factory New,Minimal Wear",
		case: "Images/AWP/CS20.png",
	},
	{
		id: "AKDetails",
		image: "Images/AK-47/Neon Revolution.png",
		name: "AK-47|NeonRevolution",
		price: "200$-250$",
		Description:
			"  It has been custom painted to depict mutated rats trying to escape a radioactive,neon green forest.",
		FlavorText: "Anyone can predict the future... a visionary shapes it",
		FinishStyle: " Custom Paint Job",
		Added: "18 October 2019",
		Creator: " Workshop Submission",
		Update: "Cache and Release",
		Quality:
			"StatTrak Factory New,StatTrak Minimal Wear,Factory New,Minimal Wear",
		case: "Images/AWP/CS20.png",
	},
	{
		id: "AKDetails",
		image: "Images/AK-47/Neon Rider.png",
		name: "AK-47|NeonRider",
		price: "200$-250$",
		Description:
			"  It has been custom painted to depict mutated rats trying to escape a radioactive,neon green forest.",
		FlavorText: "Anyone can predict the future... a visionary shapes it",
		FinishStyle: " Custom Paint Job",
		Added: "18 October 2019",
		Creator: " Workshop Submission",
		Update: "Cache and Release",
		Quality:
			"StatTrak Factory New,StatTrak Minimal Wear,Factory New,Minimal Wear",
		case: "Images/AWP/CS20.png",
	},
	{
		id: "M4Details",
		image: "./Images/M4A4/The Emperor.png",
		name: "M4A4|TheEmperor",
		price: "200$-250$",
		Description:
			"  It has been custom painted to depict mutated rats trying to escape a radioactive,neon green forest.",
		FlavorText: "Anyone can predict the future... a visionary shapes it",
		FinishStyle: " Custom Paint Job",
		Added: "18 October 2019",
		Creator: " Workshop Submission",
		Update: "Cache and Release",
		Quality:
			"StatTrak Factory New,StatTrak Minimal Wear,Factory New,Minimal Wear",
		case: "Images/AWP/CS20.png",
	},
];

const menuBtns = document.querySelectorAll("#menuButton");
const gridItems = document.querySelector(".grid-container");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector("#nav-links");

let boughtItems = 0;

navToggle.addEventListener("click", function () {
	if (links.className == "links") {
		links.className += " responsive";
	} else {
		links.className = "links";
	}
});

displayScreen("all");
toDo();
menuBtns.forEach((e) => {
	e.addEventListener("click", () => {
		if (e.classList.contains("awp")) {
			remove();
			displayScreen("awp");
			toDo();
		}
		if (e.classList.contains("knife")) {
			remove();
			displayScreen("knf");
			toDo();
		}
		if (e.classList.contains("ak-47")) {
			remove();
			displayScreen("ak");
			toDo();
		}
		if (e.classList.contains("m4a4")) {
			remove();
			displayScreen("m4");
			toDo();
		}
		if (e.classList.contains("all")) {
			remove();
			displayScreen("all");
			toDo();
		}
	});
});

function displayScreen(name) {
	for (let i = 0; i < Details.length; i++) {
		if (name == "awp") {
			if (Details[i].id == "AWPDetails") {
				adding(Details[i]);
			}
		} else if (name == "ak") {
			if (Details[i].id == "AKDetails") {
				adding(Details[i]);
			}
		} else if (name == "knf") {
			if (Details[i].id == "KNIFEDetails") {
				adding(Details[i]);
			}
		} else if (name == "m4") {
			if (Details[i].id == "M4Details") {
				adding(Details[i]);
			}
		} else {
			adding(Details[i]);
		}
	}
}

function adding(name) {
	let div = document.createElement("div");
	div.classList.add("grid-item");

	gridItems.appendChild(div);
	div.innerHTML = `<img src="${name.image}">
                                <h3>${name.name}</h3>
                                <h3>${name.price}</h3>

                                <p class="grid-text">
                                        <b>Description:</b>${name.Description}
                                        <b>Flavor Text:</b> ${name.FlavorText}
                                        <b>Finish Style:</b> ${name.FinishStyle}
                                </p>
                                <span>
                                        <button class="grid-button ${name.name}"id="buy"><span>Buy</span></button>
                                        <button class="grid-button ${name.name}"id="know"><span>Know More</span></button>
                                </span>`;
}
function remove() {
	gridItems.innerHTML = "";
}
function toDo() {
	const buybtn = document.querySelectorAll("#buy");
	const knowbtn = document.querySelectorAll("#know");
	boughtSkins = [];

	buybtn.forEach((e) => {
		e.addEventListener("click", function () {
			if (!boughtSkins.includes(e.classList[1])) {
				boughtItems++;
				boughtSkins.push(e.classList[1]);
			}
			let count = document.querySelector(".number");
			count.innerHTML = boughtItems;
		});
	});
	knowbtn.forEach((e) => {
		e.addEventListener("click", function () {
			const text = document.querySelector(".grid-container");
			const display = document.getElementById("modelcontent");
			display.classList.add("display");
			text.classList.add("blur");
		
			let knowDetails = Details.find((i) => i.name === e.classList[1]);
		
			

			display.innerHTML= `
			<button id="closemodel">
                        		 <span><i class="fas fa-times"></i></span>
                	</button>
			<img class="model-image" src="${knowDetails.image}">
                                <h2>${knowDetails.name}</h2>
                                <h2>${knowDetails.price}</h2>

                                <p class="model-text">
                                        <b>Description:</b>${knowDetails.Description}
                                        <b>Flavor Text:</b> ${knowDetails.FlavorText}
                                        <b>Finish Style:</b> ${knowDetails.FinishStyle}
                                        <b>Added:</b> ${knowDetails.Added}
					<b>Creator:</b> ${knowDetails.Creator}
					<b>Update:</b>${knowDetails.Update}
					<b>Quality:</b>${knowDetails.Quality}
					
                                </p>
				<img src="${knowDetails.case}">
				
	
                                `;
				window.scrollTo(100, 100);
		
			let closemodel = document.getElementById("closemodel");
		
			closemodel.addEventListener('click',function()
			{
				display.classList.remove("display");
				text.classList.remove("blur");
			});
			
		});
	});
}
