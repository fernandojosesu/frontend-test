//Getting document ready for the script. When document ready load up JSON file. 
$(document).ready(function() {
	
	//Read JSON file. Save into variables to help create unsorted effect.
	//TODO: This can be better by making random positions instaead of saving into variables.
	$.getJSON('words.json', function(data) {
		//console.log(data); //remove comment for debugging.
		var pos1 = "<img src='" + data[0].image + "' />";
		var pos2 = data[0].word;
		var pos3 = data[1].word;
		var pos4 = data[2].word;
		var pos5 = "<img src='" + data[2].image + "' />";
		var pos6 = "<img src='" + data[1].image + "' />";
		
		$('.lead.first').html("<p>" + pos1 + "<pos2>" + pos2 + "</pos2><pos3>" + pos3 + "</pos3></p>");
		$('.lead.second').html("<p><pos4>" + pos4 + "</pos4>" + pos5 + pos6 + "</p>");
		 });
	
	 $('.start').on('click', function(){
		 $('.start').hide();
		 $.getJSON('words.json', function(data) {
			 console.log(data);
			 $('.first').html("<p>item1="+data[0].word+" item2="+data[1].word+" item3="+data[2].word+"</p>");
			 $('.second').html("<p>item1="+data[0].image+" item2="+data[1].image+" item3="+data[2].image+"</p>");
		 });
    });
});