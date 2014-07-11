var btn = document.getElementById("btn");
btn.addEventListener("click", show,false);



function show(){
    var date= new Date();
	var time=date.toLocaleTimeString();    
	hour=date.getHours();
	min=date.getMinutes();
	
    start=document.getElementById("start").value;
	end=document.getElementById("end").value;
	if(start!="" && end!="")
	{
		stre=start.split(":");
		enre=end.split(":");
		if(stre[0]>enre[0])
		{
			entime=parseInt(enre[0], 10)+24;
			if(hour<stre[0])hour=hour;
		}
		else
		{
		    entime=parseInt(enre[0], 10);
		}
		if((stre[0]==hour && stre[1]<=min) || (hour>stre[0] && hour<entime) || (entime==hour && enre[1]>=min))
			if(stre[0]==entime && !(enre[1]>=min && stre[1]<=min))
			{
				document.getElementById("now").innerHTML="false";
		    }
			else
			{
				alert("已改震動");
				document.getElementById("now").innerHTML="true";
				javascript: navigator.vibrate(200,100,200);
			}
		else
		{
			document.getElementById("now").innerHTML="false";
		}
	}
	
	
	/*function SendMsg(){
		if(document.getElementById("title").value=="")
		{
			location="part3.html";
			return;
		}
	    
	    location="part3.html?title="+document.getElementById("title").value + "&date="+document.getElementById("date").value
	    +"&start="+document.getElementById("start").value + "&end="+document.getElementById("end").value 
	    + "&alarm="+document.getElementById("alarm").value; 
	  }*/
	
	
}


