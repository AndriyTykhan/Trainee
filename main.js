
let data = [
  {
    "title": "Donald Trump begint als president van de Verenigde Staten",
    "date": "20 Jan",
    "img": "01.jpg",
    "description": "Donald Trump wordt 20 januari geïnaugureerd als 45ste president van de Verenigde Staten. Wat volgt zijn opvallende maatregelen zoals het inreisverbod en het erkennen van Jeruzalem als hoofdstad van Israël. Ondertussen krijgt het onderzoek naar de Russische inmenging tijdens zijn verkiezingscampagne steeds meer vorm. Belangrijke voormalige adviseurs als Michael Flynn en Paul Manafort worden gehoord, en ook familieleden als zoon Trump Jr. en Jared Kushner moeten er aan geloven.",
  },{
    "title": "Feyenoord na achttien jaar landskampioen",
    "date": "14 Mei",
    "img": "02.jpg",
    "description": "Na achttien jaar is Feyenoord weer kampioen van Nederland. Terwijl Rotterdam al bijna feest viert gaat het mis tegen Excelsior (3-0 verlies), maar in de laatste wedstrijd van het seizoen, op 14 mei tegen Heracles Almelo (3-1 winst), stelt de ploeg van trainer Giovanni van Bronckhorst alsnog de titel veilig. Dirk Kuijt maakt een hattrick en is de held van het Legioen.",
  },{
    "title": "Grote explosie tijdens concert Ariane Grande in Manchester",
    "date": "22 Mei",
    "img": "03.jpg",
    "description": "In mei vindt in het Britse Manchester een grote explosie plaats tijdens een concert van de Amerikaanse popzangeres Ariana Grande. Zeker 22 mensen komen om, ruim honderd mensen raken gewond. Later blijkt dat Salman Abedi, die banden had met Islamitische Staat, zichzelf heeft opgeblazen. Hij zou geen onderdeel zijn van een groter terroristisch netwerk, maar er wordt wel gedacht dat er meerdere mensen bij de aanslag betrokken zijn geweest.",
  }
]


$(document).ready( function() {
	let node = '';

	/*
	fetch(`https://pokeapi.co/api/v1/pokemon/?limit=12`)
					.then(response => response.json())
					.then(json => this.data = json);
	*/
	for (i in data) {
		node += `<div id="info" class="container text-center news"><img src=img/${data[i].img}><div class="info"><p class="date">${data[i].date}</p><h2> 
		 ${data[i].title}</h2><p>${data[i].description}</p><div class="video text-center"><img src=img/${data[2].img}><i class="far fa-play-circle"></i>
		 </div></div></div>`
	}
	document.getElementById("data").innerHTML = node;

})
