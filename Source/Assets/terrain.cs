using UnityEngine;
using System.Collections;

public class terrain : MonoBehaviour 
{
	public Terrain terrainSystem;
	
	public Transform prefab;
	
	public int smoothingPasses;
	public int randomPasses;
	public int trees;
	public int seed;
	
	void Start () {
		
		seed = 1; //Insert your own seed here
//		clearTerrain();//levels terrain to 0. Delete if you want to use with a pre-generated terrain.
		for(int i = 0; i < randomPasses; i++)//goes until passes are met
		{
			subsequentPasses(randomPasses - i + 1);//randomizes terrain
		}
		for(int i = 0; i < smoothingPasses; i++)//runs until smoothing passes are met
		{
			smoothTerrainPass();//smooth terrain
		}
//		treePlace ();//place trees on terrain (uses tree assigned to terrain in terrain options, if none, it will not place trees)

	
	}
	
	void Update () {
		//useless for now. Can be used to modify terrain (waves etc.)
	}
	
/*	void treePlace()
	{
		int xRes = terrainSystem.terrainData.heightmapWidth;//gets x sizes
		int zRes = terrainSystem.terrainData.heightmapHeight;//gets z sizes
		float[,] heights = terrainSystem.terrainData.GetHeights(0,0,xRes, zRes); //sets heights[,] as the terrain data
		if(seed != 0)//checks for seed
		{
			UnityEngine.Random.seed = seed; //if not seed, random seed applied
		}
		for(int z = 0; z < terrainSystem.terrainData.size.z; z+=10)//generates terrain in increments of 10. runs through z
		{
			for(int x = 0; x < terrainSystem.terrainData.size.x; x+=10)//runs through X.
			{
				int localX=Mathf.FloorToInt((x/terrainSystem.terrainData.size.x)*xRes);//gets local position instead of terrain position
				int localZ=Mathf.FloorToInt((z/terrainSystem.terrainData.size.z)*zRes);//gets local position instead of terrain position
				if(UnityEngine.Random.value >= 0.7f && heights[localX,localZ] >= 0.30f)//decides where to place tree
				{
					
					TreeInstance tmpInstance = new TreeInstance();//from here down places tree
					tmpInstance.widthScale = 1;
					tmpInstance.color=Color.white;
					tmpInstance.lightmapColor = Color.white;
					tmpInstance.prototypeIndex=1;
					tmpInstance.heightScale = 1;
					tmpInstance.position = new Vector3(z/terrainSystem.terrainData.size.z, heights[localX,localZ], x/terrainSystem.terrainData.size.x);
					terrainSystem.AddTreeInstance(tmpInstance);
					trees++;//ends tree place
				}
			}
		}
	}
	*/
	void clearTerrain()
	{
		int xRes = terrainSystem.terrainData.heightmapWidth;//gets x sizes
		int zRes = terrainSystem.terrainData.heightmapHeight;//gets y sizes
		float[,] heights = terrainSystem.terrainData.GetHeights(0,0,xRes, zRes);//sets heights[,] as terrain data 
		for(int z = 0; z < zRes; z++)//runs through z
		{
			for(int x = 0; x < xRes; x++)//runs through x
			{
				heights[x,z]=0;//sets heights to 0
			}
		}
		terrainSystem.terrainData.SetHeights(0,0,heights);//applies terrain data
	}
	/*Randomizes terrain by perlin noise frequency.
	 * Frequency is the size of block that it creates.
	 * a frequency of 10 will create a 10X10 block of random height terrain.
	 * 
	 * ex.
	 * 		subsequentPasses(6)
	 * 				divides the terrain into 6X6 blocks and randomizes
	 */
	void subsequentPasses(int freq)
	{
		int xRes = terrainSystem.terrainData.heightmapWidth;//gets x size
		int zRes = terrainSystem.terrainData.heightmapHeight;//gets z size
		float[,] heights = terrainSystem.terrainData.GetHeights(0,0,xRes, zRes); //sets heights[,] as terrain data
		if(seed != 0)//checks for seed
		{
			UnityEngine.Random.seed = seed;//if no seed, random seed applied
		}
		for(int z = freq; z+freq < zRes; z+=freq)//goes through z in freq.
		{
			for(int x = freq; x+freq < xRes; x+=freq)//goes through x in freq.
			{
				float tempHeight=((UnityEngine.Random.value-UnityEngine.Random.value)/10);//gets temporary height
				for(int i = z-freq; i <= z; i++)
				{
					for(int j = x-freq; j <= x; j++)
					{
						heights[i,j]+=tempHeight;//sets height in frequency increments
					}
				}
			}
		}
		terrainSystem.terrainData.SetHeights(0,0,heights);//applies height data
	}
	
	void smoothTerrainPass()
	{
		int xRes = terrainSystem.terrainData.heightmapWidth;//gets x size
		int zRes = terrainSystem.terrainData.heightmapHeight;//gets z size
		float[,] heights = terrainSystem.terrainData.GetHeights(0,0,xRes, zRes); //sets heights[,] as terrain data
		for(int z = 0; z < zRes; z++)//goes through z
		{
			for(int x = 0; x < xRes; x++)//goes through x
			{
				//start interpolation between points
				if(x-1 >= 0)
				{
					heights[x-1,z]=interpolate (heights[x,z], heights[x-1,z], 0.5f);
				}
				if(x+1 < xRes)
				{
					heights[x+1,z]=interpolate (heights[x,z], heights[x+1,z], 0.5f);
				}
				if(z-1 >= 0)
				{
					heights[x,z-1]=interpolate (heights[x,z], heights[x,z-1], 0.5f);
				}
				if(z+1 < zRes)
				{
					heights[x,z+1]=interpolate (heights[x,z], heights[x,z+1], 0.5f);
				}
				//end interpolation between points
			}
		}
		terrainSystem.terrainData.SetHeights(0,0,heights);//apply terrain data
	}
	/*interpolates between two points.
	 * 
	 * ex.
	 * 		interpolate(1,2,0.5f)
	 * 			will return 1.5 because it is exactly 0.5 between 1 and 2.
	 */
	float interpolate(float a, float b, float x)
	{
		//you shouldn't care what this does, actually...
		float ft = x * 3.14159f;
		float f = (1 - Mathf.Cos(ft)) * 0.5f;
		
		return a*(1-f) + b*f;
	}
}
