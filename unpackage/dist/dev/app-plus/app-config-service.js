
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/part1/step1/step1","pages/part1/step2/step2","pages/part2/step1/step1","pages/part2/step2/step2","pages/part2/step3/step3","pages/part2/step4/step4","pages/part2/step5/step5","pages/part2/step6/step6","pages/part2/step7/step7","pages/part2/step8/step8","pages/part2/step9/step9","pages/part2/step10/step10","pages/part2/step11/step11","pages/part3/step1/step1","pages/part1/step1_1/step1_1","pages/part1/step1_2/step1_2","pages/part1/step3/step3","pages/part4/step1/step1","pages/part4/step2/step2","pages/part4/step3/step3","pages/part4/step3_2/step3_2","pages/part4/step3_2/step3_2","pages/part4/step5/step5","pages/part4/step5_1/step5_1","pages/part4/step5_2/step5_2","pages/part4/step6/step6","pages/part4/step6_1/step6_1","pages/part4/step6_2/step6_2","pages/part4/step6_3/step6_3","pages/part4/step7/step7","pages/part4/step7_1/step7_1","pages/part4/step7_2/step7_2","pages/part4/step7_3/step7_3","pages/part4/step7_4/step7_4","pages/part4/step7_5/step7_5"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"drag","compilerVersion":"3.7.3","entryPagePath":"pages/part1/step1/step1","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/part1/step1/step1","meta":{"isQuit":true},"window":{"navigationBarTitleText":"","disableScroll":false,"navigationStyle":"custom"}},{"path":"/pages/part1/step2/step2","meta":{},"window":{"navigationBarTitleText":"","disableScroll":false,"navigationStyle":"custom"}},{"path":"/pages/part2/step1/step1","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part2/step2/step2","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part2/step3/step3","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part2/step4/step4","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part2/step5/step5","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part2/step6/step6","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part2/step7/step7","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part2/step8/step8","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part2/step9/step9","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part2/step10/step10","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part2/step11/step11","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part3/step1/step1","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom","pageOrientation":"portrait-primary"}},{"path":"/pages/part1/step1_1/step1_1","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part1/step1_2/step1_2","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part1/step3/step3","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step1/step1","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step2/step2","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step3/step3","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step3_2/step3_2","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step5/step5","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step5_1/step5_1","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step5_2/step5_2","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step6/step6","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step6_1/step6_1","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step6_2/step6_2","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step6_3/step6_3","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step7/step7","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step7_1/step7_1","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step7_2/step7_2","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step7_3/step7_3","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step7_4/step7_4","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}},{"path":"/pages/part4/step7_5/step7_5","meta":{},"window":{"navigationBarTitleText":"","disableScroll":true,"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
