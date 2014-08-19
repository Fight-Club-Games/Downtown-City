#pragma strict

public var GoldComp:NPC_inventory;
public var Spin:spinnn;
var slotPicked:boolean=false;
var spin = false;
var gambling = false;

public var wheels:Array;

function Start(){
	wheels = GameObject.FindGameObjectsWithTag("wheel");
	}

function Update () {
	if(Spin.moneyEarned > 0){
		GoldComp.GoldPickUp(Spin.moneyEarned);
		Spin.moneyEarned = 0;
		}
		if(Input.GetKeyUp(KeyCode.Space)){
		if((GoldComp.gold>=10)&&(!spin)){
			GoldComp.GoldDrop(10);
			spin = true;
			slotPicked=false;
			gambling = true;
			}
			else if(gambling){
			spin = false;
			slotPicked=true;
			gambling = false;
			}
}
}