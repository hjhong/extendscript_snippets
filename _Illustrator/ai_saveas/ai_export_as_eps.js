﻿#target "Illustrator"
for(var d=app.documents.length; d>0; d--){

var docObj=app.activeDocument;
		var removeExtName=docObj.name.toString().replace(/\..{2,4}$/,"");//拡張子をとる
//		var oldName=removeExtName.replace(/ \[更新済み\]?/,"");// [更新済み]があるならとる
		var newPath=docObj.path.toString()+"/"+removeExtName+".eps";
		var savePath=new File(newPath);
		var saveOpt=new EPSSaveOptions();

		//ここから保存オプション
		saveOpt.compatibility=Compatibility.ILLUSTRATOR12;//AI CS2
		saveOpt.preview=EPSPreview.BWMACINTOSH;//Mac 1Bit
		saveOpt.overPrint=PDFOverprint.PRESERVEPDFOVERPRINT;//オーバープリント保持
		saveOpt.embedAllFonts=true;
		saveOpt.embedLinkedFiles=true;//配置画像を含む
		saveOpt.includeDocumentThumbnails=true;
		saveOpt.cmykPostScript=true;
		saveOpt.compatibleGradientPrinting=false;
		//saveOpt.flattenOutput=OutputFlattening.PRESERVEAPPEARANCE//
		saveOpt.EPSPostScriptLevelEnum=EPSPostScriptLevelEnum.LEVEL3//ポストスクリプトレベル3

		//別名保存、元データは保存せずに閉じる
		docObj.saveAs(savePath, saveOpt);
		docObj.close(SaveOptions.DONOTSAVECHANGES);
		}