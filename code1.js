gdjs.WinnerCode = {};
gdjs.WinnerCode.GDNewObjectObjects1= [];
gdjs.WinnerCode.GDNewObjectObjects2= [];
gdjs.WinnerCode.GDNewObject2Objects1= [];
gdjs.WinnerCode.GDNewObject2Objects2= [];
gdjs.WinnerCode.GDagainObjects1= [];
gdjs.WinnerCode.GDagainObjects2= [];
gdjs.WinnerCode.GDYellowButtonObjects1= [];
gdjs.WinnerCode.GDYellowButtonObjects2= [];

gdjs.WinnerCode.conditionTrue_0 = {val:false};
gdjs.WinnerCode.condition0IsTrue_0 = {val:false};
gdjs.WinnerCode.condition1IsTrue_0 = {val:false};
gdjs.WinnerCode.condition2IsTrue_0 = {val:false};


gdjs.WinnerCode.eventsList0 = function(runtimeScene) {

{


gdjs.WinnerCode.condition0IsTrue_0.val = false;
gdjs.WinnerCode.condition1IsTrue_0.val = false;
{
gdjs.WinnerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.WinnerCode.condition0IsTrue_0.val ) {
{
gdjs.WinnerCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
}}
if (gdjs.WinnerCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.WinnerCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.WinnerCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDNewObjectObjects1[i].playAnimation();
}
}}

}


{


gdjs.WinnerCode.condition0IsTrue_0.val = false;
{
gdjs.WinnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.WinnerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Game", false);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main Game");
}}

}


};

gdjs.WinnerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinnerCode.GDNewObjectObjects1.length = 0;
gdjs.WinnerCode.GDNewObjectObjects2.length = 0;
gdjs.WinnerCode.GDNewObject2Objects1.length = 0;
gdjs.WinnerCode.GDNewObject2Objects2.length = 0;
gdjs.WinnerCode.GDagainObjects1.length = 0;
gdjs.WinnerCode.GDagainObjects2.length = 0;
gdjs.WinnerCode.GDYellowButtonObjects1.length = 0;
gdjs.WinnerCode.GDYellowButtonObjects2.length = 0;

gdjs.WinnerCode.eventsList0(runtimeScene);
return;

}

gdjs['WinnerCode'] = gdjs.WinnerCode;
