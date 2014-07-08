var player:Transform;
var talkTextGUI:GUIText;
@HideInInspector
var textScrollSpeed:float=20.0;
var textures : GUITexture[];
var talkLines:String[];
private var talking:boolean;
private var textIsScrolling:boolean;
private var currentLine:int;
private var playerScript:ThirdPersonController;			//Here you can edit in the player script you want to disable during chat conversation
														//Example: If I want to disable the script named "AndroidCarController" during chat, 
														//		   I should change this line to read:
														//
														//		   private var playerScript:AndroidCarController;

function Start(){
	for(var i = 0;i<textures.Length;i++){
		textures[i].enabled = false;					//Disables all NPC textures until they are called upon during dialogue
	}
}

function OnTriggerEnter(col:Collider) {
	if(col.tag == "Player" ){
		talking = true;
		currentLine = 0;
		startScrolling();
		//This line fades the current animation to idle for the standard unity third person controller
		player.animation.CrossFade("idle");	
		playerScript = player.GetComponent(ThirdPersonController);
		playerScript.enabled = false;
	}
	else{	
	}
}

function Update () {
	if(talking){
		if(Input.GetButtonDown("Fire1")){
			if(textIsScrolling){
				talkTextGUI.text = talkLines[currentLine];
				textIsScrolling = false;
			}
			else{
				if(currentLine < talkLines.Length - 1){
					currentLine++;
					startScrolling();
				}
				else{
					currentLine = 0;
					talkTextGUI.text = "";
					talking = false;
					for(var i = 0;i<textures.Length;i++){
						textures[i].enabled = false;
					}
					playerScript.enabled = true;				//End of chat. Player Script is enabled.
					//add custom end of dialogue functions here.
				}
			}
		}
	}
}

function startScrolling(){
	textIsScrolling = true;
	var startLine:int = currentLine;
	var displayText:String = "";

	for(var i:int = 0; i < talkLines[currentLine].Length; i++){
		if(textIsScrolling && currentLine == startLine){
			displayText += talkLines[currentLine][i];
			talkTextGUI.text = displayText;
			yield WaitForSeconds(textScrollSpeed / 100);
			if(currentLine == 0){
				textures[0].enabled = true;
			}
			if(currentLine == 1){
				textures[0].enabled = false;
				textures[1].enabled = true;
			}
			if(currentLine == 2){
				textures[1].enabled = false;
				textures[2].enabled = true;
			}
			if(currentLine == 3){
				textures[2].enabled = false;
				textures[3].enabled = true;
			}
			if(currentLine == 4){
				textures[3].enabled = false;
				textures[4].enabled = true;
			}
			if(currentLine == 5){
				textures[4].enabled = false;
				textures[5].enabled = true;
			}
			if(currentLine == 6){
				textures[5].enabled = false;
				textures[6].enabled = true;
			}
			if(currentLine == 7){
				textures[6].enabled = false;
				textures[7].enabled = true;
			}
			if(currentLine == 8){
				textures[7].enabled = false;
				textures[8].enabled = true;
			}
			if(currentLine == 9){
				textures[8].enabled = false;
				textures[9].enabled = true;
			}
		}
		else{
			return;
		}
	}
	textIsScrolling = false;	
}

//col.rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionZ | 
//							RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationZ;
		
//function OnTriggerStay(col:Collider) {
//	if(col.tag == "Player" ){
//		if(talking == false){
			//col.rigidbody.constraints = RigidbodyConstraints.None | RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationZ;
//		}
//	}
//}

//function OnTriggerExit(col:Collider) {
//	if(col.tag == "Player" ){
//	}
//}