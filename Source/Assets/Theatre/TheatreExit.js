public var exit:Texture2D;
public var scorevar:Score;

function OnGUI () {
		if (GUI.Button (new Rect (Screen.width/1.2f, Screen.height/2, 122, 120), exit)) {
		if(scorevar.score > 0){
			PlayerPrefs.SetInt("gold", PlayerPrefs.GetInt("gold")+Mathf.CeilToInt(scorevar.score));
			Application.LoadLevel ("DowntownCity");
				}
	}
}