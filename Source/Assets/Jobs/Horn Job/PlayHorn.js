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
	if(Input.GetKeyDown("up")){
		mid.Play();
	}
	if(Input.GetKeyUp("up")){
		mid.Stop();
	}
	if(Input.GetKeyDown("right")){
		high.Play();
	}
	if(Input.GetKeyUp("right")){
		high.Stop();
	}
}