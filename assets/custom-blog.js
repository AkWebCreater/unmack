var bunnyVideo = document.getElementById("videoid");
function playPause() { 
    if (bunnyVideo.paused)
    {			
		 bunnyVideo.play();
    }
	else 
	{
		bunnyVideo.pause();
	}
     
} 