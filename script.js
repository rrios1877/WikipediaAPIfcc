$(document).ready(function(){
  //when search is clicked runs code
  $('#search').click(function(){
    //Gets search input
    var searchTerm = $('#searchTerm').val();
    // API URL with searchTerm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success:function(data){
      
      $("#output").html('');
     // Get heading console.log(data[0][1]);
     // Get description console.log(data[2][0]);
      //Get link console.log(data[3][0]);
      for(var i=0;i < data[1].length; i++) {
      $('#output').prepend(" <li> <a href= " + data[3][i] + ">" + data[1][i] + " </a><h4> " + data[2][i] + " </h4></li> ");
    }
        $('#searchTerm').val('');
    },
      error: function(errorMessage){
      alert("Error");
    }
      
    }); 
    });
    $('#searchTerm').keypress(function(e)
   // allows you to hit enter key after you type in a search word                            
   {
  if(e.which==13){
    $('#search').click();
  }
    });
  
  });
  
