##3D Realtime Interactive
	

In this exercise, you will gain familiarity adding and modifying scripts to control 3D scenes. Using your work from Exercise 4.3, you will be importing relevant assets into Playcanvas.com, and creating interactivity. Ultimately, this assignment is complete when you can use the keyboard to trigger a change in the state of animation in the 3D scene. 


##Learning Resources

[Playcanvas Developer Resources](http://developer.playcanvas.com/)

			



##Steps to Completion
1. Open your Exercise 4.3 project files, and export two FBX versions.
  
   a. **_scene_idle.fbx_** (This files contains a scene with idle animation or keyframes with no animation)
   
   b. **_scene_animated.fbx_** (this file contains the same scene fully animated)

2. Create an account on [PlayCanvas.com](http://playcanvas.com).

3. Create a New Project

   a. Log into PlayCanvas
   
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

6. Add interactivity to your scene.	
   
   a. Select your Model in the **Hierarchy panel** and click on **Add Component** in the **Entity panel**.

   c. Choose **Animation** from the dropdown list.
   
   d. In the **Animation** section, choose **Add Animation** and select both FBX files from the assets panel.
   
   e. To add a script, click on **Add Component** in the **Entity panel** and choose script.
   
   f. Choose **Add Script** from the **Scripts** section and click on **Add Asset** from the assets panel.
   
   g. Choose **Script** from the dropdown list and name the script **_animation-blending.js_**.
   
   h. Now click on the newly created **_animation-blending.js_** script to add it into the Scripts section in the Entity panel.
   
   i. Click on **_animation-blending.js_** in the Scripts section in the Entity panel to open the script in a new browser tab.

   j. Paste the code from this file into the script editor [animation-blending.js](https://raw.githubusercontent.com/michael-collins/aa110-fa2015/master/exercises/exercise-5.0/animation-blending.js).
   
   k.  Change `YOUR_IDLE_ANIMATION_FILE_HERE` to `scene_idle` and `YOUR_ANIMATED_FILE_HERE` to `scene_animated`. This will link the FBX files that you added to the Animation section in the Entity panel to this script.
   
   l. Click **Save**:
   
7. Test your scene
   
   a. In the scene editor, click on the play button at the top to compile your scene and view it in a new browser. Press "S" on the keyboard to see if the animation blending is working. If you get errors, look at what they are saying, and attempt to fix the animation-blending.js file accordingly. Most likely you mispelled the names of the FBX files that were added to the Animation section, either in the file's name or where it is referenced in the script.

8. OPTIONAL: Configure your scene and add any more desired keyboard or mouse interaction, lighting, camera steup, etc. through following tutorials located in [PlayCanvas Developer Resources](http://developer.playcanvas.com/en/tutorials/).

9. In the Project Settings, upload a 720px by 720px image of your scene and write a description of how a viwer can interact with your 3D scene. The default functionality is to press "S" on the keyboard to trigger the scene animation. See this [example project:](https://playcanvas.com/michael-collins)

10. Go to the project page on PlayCanvas.com and click on **Publish**. Copy the link and paste it to **Lore.com** → **Discussion**. Submit the link to your playcanvas.com Projects page in a file called **_playcanvas_studentid.txt_** to [Exercise 5.0 Dropbox](https://psu.box.com/signup/collablink/d_4284118501/11e9c9e76f13f5)



##Grading

Your grade will be assessed according to the [Exercise Grading Criteria](/grading/exercise-grading-criteria.md)
