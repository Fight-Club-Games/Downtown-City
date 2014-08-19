#pragma strict

GameObject.Find("MessageGUI").guiText.enabled = false;

var door:DoorBuilding;

function Awake(){
if(PlayerPrefs.GetInt("DoorEntered") == 1){
	transform.position = new Vector3(PlayerPrefs.GetFloat("PlayerX",transform.position.x),PlayerPrefs.GetFloat("PlayerY",transform.position.y),PlayerPrefs.GetFloat("PlayerZ",transform.position.z));
		}
		}
function OnTriggerEnter(trigger:Collider){
	if(trigger.tag == "Door"){
		door = trigger.gameObject.GetComponent("DoorBuilding");
		}
}
function Update(){
	if(door){
		GameObject.Find("MessageGUI").guiText.enabled = true;
		if(Input.GetKey(KeyCode.E)){
		if(door.scene){
		PlayerPrefs.SetFloat("PlayerX",transform.position.x);
		PlayerPrefs.SetFloat("PlayerY",transform.position.y);
		PlayerPrefs.SetFloat("PlayerZ",transform.position.z);
		PlayerPrefs.SetInt("DoorEntered",1);
		PlayerPrefs.Save();
Application.LoadLevel(door.scene);
		}
		else{
		GameObject.Find("MessageGUI").guiText.text = "This door is locked!";
		}
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
		door = null;
	}
}