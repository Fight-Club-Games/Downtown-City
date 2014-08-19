#pragma strict
var moveSpeed : float = 10F;
 

function Update(){
 
 
	transform.Translate(Input.GetAxis("Horizontal") * moveSpeed * Time.deltaTime,0,0);
}