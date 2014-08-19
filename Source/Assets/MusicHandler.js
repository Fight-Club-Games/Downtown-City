#pragma strict

var openingTheme:AudioSource;
var normalTheme:AudioSource;

function Start(){
	if(PlayerPrefs.GetInt("DoorEntered") == 1){
		normalTheme.Play();
	}
}


function Update () {
	if(PlayerPrefs.GetInt("DoorEntered") != 1){
		openingTheme.Play();
		PlayerPrefs.SetInt("DoorEntered",1);
	}
}