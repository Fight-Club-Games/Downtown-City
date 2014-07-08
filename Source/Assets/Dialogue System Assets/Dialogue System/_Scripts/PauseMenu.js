var pause : boolean = false;
var pauseGUI : GUITexture;
private var allAudioSources : AudioSource[];

function Awake() {
	Time.timeScale = 1.0;
    allAudioSources = FindObjectsOfType(AudioSource) as AudioSource[];
}

function PauseAllAudio() {
   for(var audioS : AudioSource in allAudioSources) {
        audioS.Pause();
    }
}

function ResumeAllAudio() {
   for(var audioS : AudioSource in allAudioSources) {
        audioS.Play();
    }
}

function Update(){
	if(Input.GetKeyUp(KeyCode.Escape)) {
		if(pause==true){
			pause = false;
		}
		else {
			pause = true;
		}
		if(pause == true) {
			Time.timeScale = 0.0;
			pauseGUI.enabled = true;
			PauseAllAudio();
			
		}
		else {
			pause = false;
			Time.timeScale = 1.0;
			pauseGUI.enabled = false;
			ResumeAllAudio();
		}
	}		
}

function OnGUI(){
	if(pause == true) {
		if(GUI.Button(new Rect(Screen.width / 2 - 90,150,180,50),"Return To Main Menu")){
			Application.LoadLevel(0);
		}
		if(GUI.Button(new Rect(Screen.width / 2 - 90,200,180,50),"Quit The Game")){
			Application.Quit();
		}
	}
}