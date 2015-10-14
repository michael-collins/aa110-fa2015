##3D Realtime Interactive
	

In this exercise, you will gain familiarity with scripting and interactive 3d environment tools. Using your work from Exercise 4.3, you will be importing relevant assets into Playcanvas.com, and creating interactivity.


##Learning Resources

[Playcanvas Developer Resources](http://developer.playcanvas.com/)

			



##Steps to Completion
1. Open your Exercise 4.3 project files, and export two FBX versions.
   
   a. **_scene_idle.fbx_** (This files contains a scene with idle animation or keyframes with no animation)
   
   b. **_scene_animated.fbx_** (this file contains the same scene fully animated)

2. Create an account on [PlayCanvas.com](http://playcanvas.com).

3. Create a New Project

   a.Log into PlayCanvas
   
   b. Click on the **Projects** tab and click **New+** on the top right.
   
   c. Enter project details, select **Blank Project**, and click **Create**.
   
   
4. Upload your 3D scene to PlayCanvas
   
   a. Click on **Editor** to enter the PlayCanvas scene editing environment.
   
   b. Upload your two previously exported FBX files and associated texture files to PlayCanvas. Can you do this by clicking on *8add assets**, or simply by dragging from your desktop into the assets area in the web browser.
   
   c. In the Hierarchy panel, click the **plus** button and select **Model**.
   
   d. Select the **Model** in the Hierarchy panel to reveal it's attributes.
   
   e. Drag the **_scene_idle.fbx_** into the _Model_ field to link your scene model with the newly created Model. 
   
   f. Most likely the scale is too small, so you will have to increase the scale to x=100, y=100, z=100 in the scale fields.
   
   g. You will now see your model in the viewport
   
5. Set up your materials
   
   a. Click **Asset Materials** in the **Entity panel** under the **Model** section.
   
   b. Under **Mesh Instances**, drag your texture files to the corresponding channels.
   
   c. Surface bump maps require an extra step. Traditional greyscale bump maps will not work with PlayCanvas. If surface bump is desired, convert your color texture to a normal map using this [normal map tool](http://cpetry.github.io/NormalMap-Online/) and upload to the **Normals** section in the **Material** panel.
   
   d. You should see your materials applied to your model in PlayCanvas. See [Materials Documentation](http://developer.playcanvas.com/en/tutorials/beginner/basic-materials/) for more details.

6. Add interactivity to your animations with PlayCanvas
   
   

##Grading

Your grade will be assessed according to the [Exercise Grading Criteria](/grading/exercise-grading-criteria.md)
