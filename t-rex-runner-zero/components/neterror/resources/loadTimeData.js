var loadTimeData={
  values:{
    offlineContentList:"",
    //downloadButton
    //suggestedOfflineContentPresentation
    //attemptAutoFetch
    //reloadButton.msg
    // Check for Google cached copy suggestion.
    //cacheButton
    //disabledEasterEgg
  },
  getValue:function (s){
    return this.values[s]
  },
  valueExists:function (s){
    return this.values.hasOwnProperty(s)
  }
}

//var iconClass='icon-offline'


function addWindowEvent(event, fun, useCapture){
	if(window.attachEvent){
		window.attachEvent('on'+event, fun)
	}else if(window.addEventListener){
		window.addEventListener(event, fun, useCapture)
	}
}
addWindowEvent("load",function (){
  //new Runner('.interstitial-wrapper')

  //updateIconClass(document.body.classList,Runner.classes.ICON)

  document.body.classList.add('offline');
  new Runner('.interstitial-wrapper');
})
