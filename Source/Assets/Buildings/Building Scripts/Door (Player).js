#pragma strict

GameObject.Find("MessageGUI").guiText.enabled = false;

var inTrigger = false;

function OnTriggerEnter(trigger:Collider){
	if(trigger.tag == "Door"){
		inTrigger = true;
		}
}
function Update(){
	if(inTrigger){
		GameObject.Find("MessageGUI").guiText.enabled = true;
		if(Input.GetKey(KeyCode.E)){
			GameObject.Find("MessageGUI").guiText.text = "This building is not available yet!";
		}
		else{
			GameObject.Find("MessageGUI").guiText.text = "Press 'E' to Enter";
		}
	}
	else{
		GameObject.Find("MessageGUI").guiText.enabled = false;
	}
}
function OnTriggerExit(trigger:Collider){
	if(trigger.tag == "Door"){
		inTrigger = false;
	}
}