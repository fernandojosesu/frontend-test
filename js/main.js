//Matching Game Test V1.0
//Getting document ready for the script. When document ready load up JSON file. 
$(document).ready(function() {
	
	//Read JSON file. Save into variables to help create unsorted effect.
	//TODO: V1.1 -- This can be better by making random positions.
	$.getJSON('words.json', function(data) {
		//console.log(data); //remove comment for debugging.
		var pos1 = "<img src='" + data[0].image + "' onclick=\"check('" + data[0].word + "', '" + data[0].i_id + "');\" id='" + data[0].i_id + "'/>";
		var pos2 = data[0].word;
		var pos3 = data[1].word;
		var pos4 = data[2].word;
		var pos5 = "<img src='" + data[2].image + "' onclick=\"check('" + data[2].word + "', '" + data[2].i_id + "');\" id='" + data[2].i_id + "'/>";
		var pos6 = "<img src='" + data[1].image + "' onclick=\"check('" + data[1].word + "', '" + data[1].i_id + "');\" id='" + data[1].i_id + "'/>";
		
		$('.lead.first').html("<p>" + pos1 + "<pos2 onclick=\"check('" + data[0].word + "', '" + data[0].w_id + "');\" id='" + data[0].w_id + "'>" + pos2 + 
		"</pos2><pos3 onclick=\"check('" + data[1].word + "', '" + data[1].w_id + "');\" id='" + data[1].w_id + "'>" + pos3 + "</pos3></p>");
		
		$('.lead.second').html("<p><pos4 onclick=\"check('" + data[2].word + "', '" + data[2].w_id + "');\" id='" + data[2].w_id + "'>" + pos4 + "</pos4>" + pos5 + pos6 + "</p>");
    });
});

function check(str, id) {
	var count = parseInt(document.getElementById('count').value);
	document.getElementById(id).style.border = "3px solid #2C3E50";
	
	if (!(document.getElementById('str').value == "")) {
		var str1, str2, id1;
		str1 = str;
		str2 = document.getElementById('str').value;
		id1= document.getElementById('ID').value;
		
		//Select and unselect card properties.
		if (!(str1 == str2) || (id == id1)) {
			id2=document.getElementById('ID').value;
            document.getElementById('str').value="";
            document.getElementById('ID').value="";
            document.getElementById(id2).style.border="0px none";
            document.getElementById(id).style.border = "0px none";

			//If selected cards don't match. 
			if(id != id1) {
				swal("Oops...", "Try Again!", "error");
         	}
         	//If selected images match.
        }else {
    		//If match remove cards.
    		id2=document.getElementById('ID').value;
            document.getElementById(id2).style.visibility="hidden";
            document.getElementById(id).style.visibility="hidden";
            document.getElementById('str').value="";
            document.getElementById('ID').value="";  
           	document.getElementById('count').value = count +1;
           	
           	//If match is completed.
            if(count+1 == 3) {
                //swal({title: "Well Done!",   type: "success",   timer: 2000,   showConfirmButton: false});
                swal({   title: "Well Done!",   text: "Enter player name:",   type: "input",   showCancelButton: false, 
	                closeOnConfirm: false,    animation: "slide-from-top",   inputPlaceholder: "Enter your name..." }, 
	                
	                function(inputValue){   
		                if (inputValue === false) 
		                	return false;      
		                
		                if (inputValue === "") {     
			                swal.showInputError("Please enter your name!");     
			                return false;   
			            }      
			            
			            swal("Great Job! " + inputValue,  "You've finished the game!" , "success");
						setTimeout(function () { location.reload(1); }, 5000);
			    });
                
            //If 2 cards match
            }else {
                swal({title: "Nice Job!",   type: "success",   timer: 1000,   showConfirmButton: false});
            }
        }

    }else {
    	document.getElementById('str').value = str;
        document.getElementById('ID').value = id;
	}
}