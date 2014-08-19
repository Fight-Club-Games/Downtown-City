using UnityEngine;
using System.Collections;

public class Work : MonoBehaviour {
	
	public Texture2D work;
	public string level;
	
	private void OnGUI () {
		if (GUI.Button (new Rect (Screen.width/5, Screen.height/5, 169, 92), work)) {
			Application.LoadLevel (level);
		}
	}
}