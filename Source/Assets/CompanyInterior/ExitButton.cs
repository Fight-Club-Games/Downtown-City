using UnityEngine;
using System.Collections;

public class ExitButton : MonoBehaviour {

	public Texture2D exit;

	private void OnGUI () {
		if (GUI.Button (new Rect (Screen.width/1.2f, Screen.height/2, 122, 120), exit)) {
			Application.LoadLevel ("DowntownCity");
				}
	}
}
