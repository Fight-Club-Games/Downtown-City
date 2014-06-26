#pragma strict

GameObject.Find("MessageGUI").guiText.enabled = false;



var inTrigger = false;
var inOffice = false;
function Awake(){
if(PlayerPrefs.GetInt("FirstSpawn")){
transform.position = Vector3( PlayerPrefs.GetFloat("PlayerX"), PlayerPrefs.GetFloat("PlayerY"), PlayerPrefs.GetFloat("PlayerZ") );
}
}

function OnTriggerEnter(trigger:Collider){
	if(trigger.tag == "Door"){
		inTrigger = true;
		}
		else if(trigger.tag == "officeinterior"){
			inOffice = true;
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
	if(inOffice){
		GameObject.Find("MessageGUI").guiText.enabled = true;
		if(Input.GetKey(KeyCode.E)){
		PlayerPrefs.SetFloat("PlayerX", transform.position.x);
PlayerPrefs.SetFloat("PlayerY", transform.position.y);
PlayerPrefs.SetFloat("PlayerZ", transform.position.z);
PlayerPrefs.SetInt("FirstSpawn",1);
PlayerPrefs.Save();
			Application.LoadLevel("officeinterior");
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
	else if(trigger.tag == "officeinterior"){
			inOffice = false;
		}
}