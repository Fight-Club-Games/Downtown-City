#pragma strict
public var goldgive:goldgiver;
var speed = 200;
var slot:float=0;
public var GoldComp:NPC_inventory;

public var moneyEarned:int;

var otherWheels:GameObject[];

var otherSpins:spinnn[];

var slotWheel=[
	30,//pepper
	71,//triangle
	115,//six
	164,//eggplant
	207,//rock
	250,//dollar
	300,//apple
	344//seven
	];

function Start(){
	otherWheels = new GameObject[3];
	otherSpins = new spinnn[3];

	otherWheels = GameObject.FindGameObjectsWithTag("wheel");
	var i = 0;
	for(x in otherWheels){
		 otherSpins[i] = x.GetComponent("spinnn");
		 i++;
		 }
	}
function SlotPoints(){
	var y:int=0;
	for(var x in otherSpins){
		if(y==0){
		 y = x.slot;
		 }
		else{
			if(x.slot!=y){
			return 0;
			}
		}
	}
	if(slot==30) return 1000;//pepper
	if(slot==71) return 333;//triangle
	if(slot==115) return 666;//six
	if(slot==164) return 100;//eggplant
	if(slot==207) return 10;//rock
	if(slot==250) return 10000;//dollar
	if(slot==300) return 5000;//apple
	if(slot==344) return 777;//seven
}
function Update() {

	if(goldgive.spin == true){
	
		transform.Rotate(Vector3.left * Time.deltaTime * speed, Space.World);
	}
		if(goldgive.slotPicked){
			slot = slotWheel[Random.Range(0,8)];
			transform.localEulerAngles = new Vector3(0,270,slot);
			
			moneyEarned = SlotPoints();
			goldgive.spin=false;
			for(x in otherSpins){
					if(x.slot==0){
					return;
					}
				}
				goldgive.slotPicked = false;
				goldgive.spin = false;
				slot = 0;
			}
	}