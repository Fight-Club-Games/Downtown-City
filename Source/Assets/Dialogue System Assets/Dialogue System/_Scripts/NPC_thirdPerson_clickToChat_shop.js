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

var startShopScene : int;
var shopScene : boolean = false;
var endChatPage : boolean = false;
var customSkin1 : GUISkin;
var customSkin2 : GUISkin;

var buttonNames : String[];						//This array lets you set the names of your buttons.

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
	if(talking && shopScene == false){
		if(Input.GetButtonDown("Fire1") || endChatPage == true){
			endChatPage = false;
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
			//yield WaitForSeconds(textScrollSpeed / 100);
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
			//If you have more than 10 pages of speech, copy the above code and adjust it accordingly.
			//Add more pages of speech here.
			//Increase the currentLine value by 1
			//Increase the textures values by 1
			if(currentLine == startShopScene){
				shopScene = true;
			}
			if(currentLine != startShopScene){
				shopScene = false;
			}
		}
		else{
			return;
		}
	}
	textIsScrolling = false;	
}


//OnGUI is used for the shop scene, modify the GUI how you would normally.
//We currently have 3 buttons available when the player clicks this NPC.
function OnGUI(){
	if(shopScene == true){
		//Use GUISkins to create really cool looking buttons!
		//I talk a little about how to use them at http://youtu.be/t7M4PxF7H7Y
		//Button 1
		GUI.skin = customSkin1;
		//We use the Array buttonNames in the inspector to name our buttons.
		if(GUI.Button(new Rect(Screen.width / 4 - 90,50,180,50), buttonNames[0])){
			//Your buttons can do whatever you want, assign their functons here.
			//This button lets you buy Gold.
			//The code below sends a message to the NPC_inventory script which controls the players gold.
			//A message is being sent to the player calling 	function GoldPickUp(goldPickUpAmount : int)
			//We're adding 5 gold.
			player.SendMessage ("GoldPickUp", 5);
		}
		//Button 2
		if(GUI.Button(new Rect(Screen.width / 4 - 90,100,180,50), buttonNames[1])){
			//This button lets you spend Gold.
			//A message is being sent to the player calling 	function GoldDrop(goldDropAmount : int)
			//We're subtracting 1 gold.
			player.SendMessage ("GoldDrop", 1);
		}
		//Button 3
		//This button is used to close the shop window.
		//When it is pressed it also allows for a closing dialogue
		//to be seen if the number of pages is set higher than 1.
		GUI.skin = customSkin2;
		if(GUI.Button(new Rect(Screen.width / 4 - 90,150,180,50),buttonNames[2])){
			shopScene = false;
			endChatPage = true;
		}
	}
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