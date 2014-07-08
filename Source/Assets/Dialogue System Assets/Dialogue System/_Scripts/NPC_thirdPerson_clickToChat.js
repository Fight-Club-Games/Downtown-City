var player:Transform;
var talkTextGUI:GUIText;
var toggleColorChange:boolean;
var textures:GUITexture[];
var talkLines:String[];
@HideInInspector
var textScrollSpeed:float=20;
@HideInInspector
var distanceToChat:int=5;
private var talking:boolean;
private var textIsScrolling:boolean;
private var currentLine:int;
private var playerScript:ThirdPersonController;

function Start(){
	for(var i = 0;i<textures.Length;i++){
		//Disables all NPC textures until they are called upon during dialogue
		textures[i].enabled = false;
	}
}

//When the cursor hovers over this object
function OnMouseEnter(){
	if (player){
		var dist = Vector3.Distance(player.position, transform.position);
		//Use this line to debug distance checks//	print ("Distance to other: " + dist);
	}
	if(toggleColorChange==true && dist <= distanceToChat){
	//Change text color to green
	renderer.material.color=Color.green;
	}
}

//When the cursor leaves this object
function OnMouseExit(){
	if(toggleColorChange==true){
	//change text color to black
	renderer.material.color=Color.black;
	}
}

function OnMouseUp(){
	if (player){
		var dist = Vector3.Distance(player.position, transform.position);
		//Use this line to debug distance checks
		//	print ("Distance to other: " + dist);
	}
	if (talking==false && dist <= distanceToChat) {
		talking = true;
		currentLine = 0;
		startScrolling();
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
					//End of chat.
					//Add custom end of dialogue functions here.
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

//function OnTriggerEnter(col:Collider){
//	if(col.tag == "Player"){
//	}
//}

//function OnTriggerExit(col:Collider) {
//	if(col.tag == "Player" ){
//	}
//}

//function OnTriggerStay(col:Collider) {
//	if(col.tag == "Player" ){
//	}
//}