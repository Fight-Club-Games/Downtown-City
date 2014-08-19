#pragma strict

var sun:GameObject;
var night:Material;
var day:Material;

function Update(){
if(PlayerPrefs.GetInt("time")!=1){
	sun.active = true;
	RenderSettings.skybox = day;
}
else{
sun.active = false;
	RenderSettings.skybox = night;
}
	}