#pragma strict

public var key:KeyCode;
public var on:boolean;

private var spriteRen:SpriteRenderer;
private var startColor:Color;

public var myCollider:Collider2D;

public var scoreobj:GameObject;
private var scorevar:Score;

public var timer:float;

function Start(){
	spriteRen = GetComponent(SpriteRenderer);
	startColor = spriteRen.color;
	myCollider = gameObject.GetComponent(BoxCollider2D);
	scorevar = scoreobj.GetComponent("Score");
	}

function Update () {
	if(Input.GetKey(key)){
		on = true;
		if(timer<0){
			scorevar.score -= 0.15;
			timer = 0.01;
			}
			timer-=Time.deltaTime;
		}
	else{
		on = false;
		spriteRen.color = startColor;
		}
		
		if(on){
			spriteRen.color = Color.gray;
			}
		myCollider.isTrigger = on;
}