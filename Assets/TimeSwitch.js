#pragma strict

var sun:GameObject;
var night:Material;
var day:Material;

function FixedUpdate(){
	if(Input.GetButtonDown("Switch")){
		sun.active = !(sun.active);
		if(RenderSettings.skybox == day){
			RenderSettings.skybox = night;
		}
		else{
			RenderSettings.skybox = day;
		}
	}
}