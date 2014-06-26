using UnityEngine;
using System.Collections;

public class ExitButton : MonoBehaviour {

	public Texture2D exit;

	private void OnGUI () {
		if (GUI.Button (new Rect (500, 120, 122, 120), exit)) {
			Application.LoadLevel ("DowntownCity");
				}
	}
}
