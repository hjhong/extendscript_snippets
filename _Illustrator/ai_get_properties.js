(function(){
var o = app.activeDocument.activeDataSet;
(function(o){
  for(var i in o){
    try{
      i += ':' + o[i]
      }
    catch(e){
      i += ':' + e
      }
    $.writeln(i)
    }
  })(o);
})()