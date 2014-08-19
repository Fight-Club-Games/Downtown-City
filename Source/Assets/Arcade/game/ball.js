#pragma strict
var pointsGuiText : GUIText;
var winLose : GUIText;
var points = 0;
var anim : Animator;

var thatsMyTriggerWord:boolean = true;

var play:boolean = false;

var stoptriggeringme:boolean=false;

var goldy:NPC_inventory;

function Start() {

	anim = GetComponent("Animator");
	winLose.enabled = true;
	winLose.text = "Press space to play.";

}

function Update() {
if(Input.GetKeyUp("space")){
	play = true;
}
if(play){
	if(!stoptriggeringme){
	rigidbody2D.isKinematic = false;
		Physics2D.gravity = Vector2(0, 0);
		rigidbody2D.velocity = Vector3.down*10;
		winLose.enabled = false;
		stoptriggeringme = true;
		
		
	}
	if(points == 60){
	
		winLose.enabled = true;
		winLose.text = ("You won!");
		anim.SetBool("Won", true);
		rigidbody2D.isKinematic = true;
		rigidbody2D.velocity = Vector3.zero;
		if(thatsMyTriggerWord){
		goldy.GoldPickUp(60);
		thatsMyTriggerWord=false;
		}
		
	}	
	}
}


function OnCollisionEnter2D(col: Collision2D){

	if (col.gameObject.tag == "Block"){
		Destroy(col.gameObject); 		
        anim.SetTrigger("Hit");
		points += 5;
		pointsGuiText.text = (points.ToString());
		
	}
	
	if (col.gameObject.name == "fall"){
		Destroy(gameObject);
		winLose.enabled = true;
		winLose.text = ("You lose!");
		points = 0;
		pointsGuiText.text = (points.ToString());
	}	
}
