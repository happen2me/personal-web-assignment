function showAndHide(){
	gridView = document.getElementById("grid_view").style;
	carouselView = document.getElementById("carousel_view").style;
	carouselButton = document.getElementById("carousel_button").style;
	gridButton = document.getElementById("grid_button").style;
	if(gridView.display!="none"){
		gridView.display="none";
		carouselView.display="block";
		carouselButton.display="none"
		gridButton.display="inline"
	}
	else{
		gridView.display="inline";
		carouselView.display="none";
		carouselButton.display="inline"
		gridButton.display="none"
	}
}