#pragma strict

var low:AudioSource;
var mid:AudioSource;
var high:AudioSource;

function Update () {
	if(Input.GetKeyDown("left")){
		low.Play();
	}
	if(Input.GetKeyUp("left")){
		low.Stop();
	}
	if(Input.GetKeyDown("down")){
		mid.Play();
	}
	if(Input.GetKeyUp("down")){
		mid.Stop();
	}
	if(Input.GetKeyDown("right")){
		high.Play();
	}
	if(Input.GetKeyUp("right")){
		high.Stop();
	}
}