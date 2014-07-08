var gold : int;					//This int is used to keep count of the player gold
var goldSkin : GUISkin;			//This skin is used to customize the way the gold string appears in OnGUI

function Start () {
	gold = PlayerPrefs.GetInt("gold");
}

function Update () {
}

//This function adds to the players gold count
//The gold count increases in value based on the the value in the message received.
//The goldPickUpAmount value is used to determine how much gold is picked up.
function GoldPickUp(goldPickUpAmount : int){
	gold += goldPickUpAmount;
	PlayerPrefs.SetInt("gold", gold);
}

//This function subtracts from the players gold count
//The gold count decreases in value based on the the value in the message received.
//The goldDropAmount value is used to determine how much gold is subtracted.
function GoldDrop(goldDropAmount : int){
	gold -= goldDropAmount;
	//Here we check to make sure it doesn't fall below 0.
	//If it does, we set it to 0.
	if(gold <= 0){
		gold = 0;
	}
	PlayerPrefs.SetInt("gold", gold);
}

//OnGUI will display the amount of gold the player has.
function OnGUI(){
	//Use a custom GUISkin to make your GUI look cool!
	GUI.skin = goldSkin;
	//GUI.Label is used to display the gold as a String
	//Customize the position of the goldString how you like.
	GUI.Label (Rect (20, 50,100,20), "Cash " + gold.ToString());
}