#pragma strict

GameObject.Find("MessageGUI").guiText.enabled = false;

function OnTriggerEnter(trigger:Collider){
	if(trigger.tag == "Door"){
		GameObject.Find("MessageGUI").guiText.text = "Press 'E' to Enter";
		GameObject.Find("MessageGUI").guiText.enabled = true;
	}
}
function OnTriggerExit(trigger:Collider){
	if(trigger.tag == "Door"){
		GameObject.Find("MessageGUI").guiText.enabled = false;
	}
}