//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。
 *
 */

(function() {

	// マップ上にウィンドウ表示するよ宣言
	var Scene_map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		Scene_map_start.call(this);
	    this._InfoWindow = new Window_Info();
	    this.addWindow(this._InfoWindow);
	};
    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
        this._InfoWindow.setText();
    };

	// ここからメニューウィンドウ作り始まります。
	function Window_Info() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function() {
		var x = 560;
		var y = -10;
	    var width = 450;
	    var height = 90;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};

	// ウィンドウに載せる内容
	Window_Info.prototype.refresh = function() {
	    this.contents.clear();
		this.changeTextColor(this.textColor(0));
        this.drawIcon(90, 1, -3);
			  this.drawText($gameVariables.value(20),40,-3);
				this.resetTextColor();
				//金
		this.changeTextColor(this.textColor(6));
		    this.drawIcon(92, 100, 42);
		  	this.drawText($gameVariables.value(17),135,42);
				this.resetTextColor();
				//GP
		this.changeTextColor(this.textColor(2));
		    this.drawIcon(93, 1, 42);
		  	this.drawText($gameVariables.value(19),40,42);
				this.resetTextColor();
		this.changeTextColor(this.textColor(0));
				//HP
	  this.changeTextColor(this.textColor(24));
				this.drawIcon(94, 86, -3);
			  this.drawText($gameVariables.value(201),125,-3);
		this.resetTextColor();
				this.drawText("/",176,0);
				this.drawText($gameVariables.value(202),190,-3);
				this.resetTextColor();
				//経験値
		this.changeTextColor(this.textColor(4));
	      this.drawIcon(91, 1, 18);
				this.drawText($gameVariables.value(16),40,18);
				this.resetTextColor();
		this.changeTextColor(this.textColor(0));
				this.drawText("/",130,21);
				this.drawText($gameVariables.value(18),144,18);
				this.resetTextColor();
	};

	// フォントサイズ
	Window_Info.prototype.standardFontSize = function() {
    	return 16;
    };
	// ウィンドウの透明度
	Window_Info.prototype.standardBackOpacity = function() {
    	return 170;
	};
    // ウィンドウの余白
	Window_Info.prototype.standardPadding = function() {
    	return 8;
	};
	// ウィンドウの色調
	Window_Info.prototype.updateTone = function() {
    	this.setTone(0, 0, 0);
	};

})();
