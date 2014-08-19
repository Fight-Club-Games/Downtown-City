#pragma strict

public var score:int=0;
public var scoreTimerTime:float=3;

public var scoreText:GUIText;
public var scoreTimeText:GUIText;
public var heartAttackText:GUIText;

public var heartTimerTime:float=30;
public var scoreTimer:float=0;
public var heartTimer:float=0;

function Start(){
	scoreTimer = scoreTimerTime;
	heartTimer = heartTimerTime;
	}

function Update () {
	if(scoreTimer>0){
		scoreTimer-=Time.deltaTime;
		}
	else{
		scoreTimer=scoreTimerTime;
		score+=1;
		}
		
	if(Input.GetKeyDown("space")){
		heartTimer = heartTimerTime;
		}
		
	if(heartTimer>0){
		heartTimer-=Time.deltaTime;
		}
	else{
		PlayerPrefs.SetFloat("PlayerX",895.6547);
		PlayerPrefs.SetFloat("PlayerZ",1115.657);
		Application.LoadLevel("HeartAttack");
		}
		scoreText.text = "Score: "+score;
		scoreTimeText.text = "Next point in "+Mathf.CeilToInt(scoreTimer)+" seconds";
		heartAttackText.text = "Heart attack in "+Mathf.CeilToInt(heartTimer)+" seconds";
}