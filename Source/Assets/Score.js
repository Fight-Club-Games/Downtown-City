#pragma strict

public var score:float = 0;
public var gui:GUIText;

function Start(){
	gui = gameObject.GetComponent(GUIText);
	}
function Update(){
	if(score<0){
		score=0;
		}
	gui.text = "Money earned: "+Mathf.CeilToInt(score);
	}