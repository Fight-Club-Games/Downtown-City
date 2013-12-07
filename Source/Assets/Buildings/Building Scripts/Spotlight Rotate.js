#pragma strict

var speed:int;
var direction:boolean;

function Update () {
	if(direction){
		transform.Rotate(Vector3.up * speed,Space.World);
	}
	else{
		transform.Rotate(Vector3.up * (-speed),Space.World);
	}
}