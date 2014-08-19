#pragma strict

public var upSpeed:float = 1;

public var scoreobj:GameObject;
private var scorevar:Score;

function Start(){
scoreobj = GameObject.Find("Score");
scorevar = scoreobj.GetComponent("Score");
}

function Update () {
	transform.position.y += upSpeed;
	if(transform.position.y > 8){
		Destroy(transform.gameObject);
		scorevar.score -= 5;
		}
}
function OnTriggerEnter2D(col:Collider2D){
	if(col.tag == "arrow"){
		Destroy(transform.gameObject);
		scorevar.score += 3;
		}
		}