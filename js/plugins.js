// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"OnlineAvatar","status":true,"description":"Firebaseを使ってプレイヤーをオンライン同期します。","parameters":{"apiKey":"AIzaSyDhvH2mOA9umNksBASmaSvqB-rKSP9Ok7o","authDomain":"psur0617.firebaseapp.com","databaseURL":"https://psur0617.firebaseio.com","avatarEvent":"3","syncSwitchStart":"51","syncSwitchEnd":"150","syncVariableStart":"21","syncVariableEnd":"200"}},
{"name":"TMNamePop","status":true,"description":"イベントの頭上に文字列を表示する機能を追加します。","parameters":{"backOpacity":"96","fontSize":"20","outlineWidth":"4","outlineColor":"rgba(0, 0, 0, 0.5)","width":"300","roundRectRadius":"6"}},
{"name":"TMEventItemEx","status":true,"description":"アイテム選択の処理にヘルプウィンドウを追加し、\n個数表示の有無と表示行数をアイテムタイプごとに設定できます。","parameters":{"helpWindowEnabledItem":"0","helpWindowEnabledKey":"0","helpWindowEnabledA":"0","helpWindowEnabledB":"0","showItemNumberItem":"1","showItemNumberKey":"0","showItemNumberA":"1","showItemNumberB":"1","numVisibleRowsItem":"4","numVisibleRowsKey":"4","numVisibleRowsA":"4","numVisibleRowsB":"4","fixPlacement":"bottom"}},
{"name":"Gacha","status":false,"description":"ランダムにアイテムを取得します。","parameters":{"Help Message Text":"1回Required Amount\\Gでガチャを引きます","Button Text":"ガチャを引く","Button Text All":"全額でガチャを引く","Get Message Text":"GET Item Name","Show Item Description":"0","Effect":"119","Rank1 Effect":"-1","Rank2 Effect":"-1","Rank3 Effect":"-1","Rank4 Effect":"-1","Rank5 Effect":"-1","ME":"Organ","Required Amount":"100","Required Variable":"0","Cost Unit":"回"}},
{"name":"CustomizeConfigDefault","status":true,"description":"オプションデフォルト値設定プラグイン","parameters":{"常時ダッシュ":"ON","コマンド記憶":"OFF","BGM音量":"100","BGS音量":"100","ME音量":"100","SE音量":"100","常時ダッシュ消去":"ON","コマンド記憶消去":"ON","BGM音量消去":"OFF","BGS音量消去":"OFF","ME音量消去":"OFF","SE音量消去":"OFF"}},
{"name":"Rubi_riru","status":true,"description":"ルビ振りを行います。用語登録によるオートルビ振り機能つき。","parameters":{"Auto Ruby":"true","Help Auto Ruby":"true","Database Auto Ruby":"true","Jisage":"2","Ruby Size":"-1"}},
{"name":"111_InputForm","status":true,"description":"フォーム作って文字入力（修正版）","parameters":{}},
{"name":"ShowFPSOnStartup","status":true,"description":"タイトル画面時にFPS表示をONにさせます","parameters":{}},
{"name":"AcceptAllKeys","status":true,"description":"使えるキーを拡張します","parameters":{"key_a":"a","key_b":"b","key_c":"c","key_d":"d","key_e":"e","key_f":"f","key_g":"g","key_h":"h","key_i":"i","key_j":"j","key_k":"k","key_l":"l","key_m":"m","key_n":"n","key_o":"o","key_p":"p","key_q":"pageup","key_r":"r","key_s":"s","key_t":"t","key_u":"u","key_v":"v","key_w":"pagedown","key_x":"escape","key_y":"y","key_z":"ok","key_backspace":"backspace","key_tab":"tab","key_enter":"ok","key_shift":"shift","key_control":"control","key_alt":"control","key_escape":"escape","key_space":"ok","key_pageup":"pageup","key_pagedown":"pagedown","key_left":"left","key_right":"right","key_up":"up","key_down":"down","key_insert":"escape","numpad_0":"escape","numpad_2":"down","numpad_4":"left","numpad_6":"right","numpad_8":"up","F9":"debug"}},
{"name":"nonStopCharacter","status":true,"description":"","parameters":{}},
{"name":"UsefulTimer","status":false,"description":"v1.0.0 タイマー、ストップウォッチ、現在時刻、現在年月日を\r\n使用することができるようになります。","parameters":{"●カウントダウンタイマー":"","Timer X":"Graphics.width - this.bitmap.width","Timer Y":"0","Timer Width":"96","Timer Height":"48","Timer Font Name":"'GameFont'","Timer Font Size":"32","Timer Font Italic":"false","Timer Text Opacity":"255","Timer Text Color":"#FFFFFF","Timer Outline Width":"4","Timer Outline Color":"0,0,0,0.5","Timer Hour":"false","Timer Hour ZeroPad":"2","Timer Min":"true","Timer Min ZeroPad":"2","Timer Sec":"true","Timer Sec ZeroPad":"2","Timer MSec":"false","Timer MSec Digits":"2","Timer More than 60Sec":"false","Timer More than 60Min":"false","":"","●ストップウォッチ":"","StWatch X":"Graphics.width - this.bitmap.width","StWatch Y":"48","StWatch Width":"96","StWatch Height":"48","StWatch Font Name":"'GameFont'","StWatch Font Size":"32","StWatch Font Italic":"false","StWatch Text Opacity":"255","StWatch Text Color":"#FFFFFF","StWatch Outline Width":"4","StWatch Outline Color":"0,0,0,0.5","StWatch Hours":"false","StWatch Hours ZeroPad":"2","StWatch Min":"true","StWatch Min ZeroPad":"2","StWatch Sec":"true","StWatch Sec ZeroPad":"2","StWatch MSec":"false","StWatch MSec Digits":"2","StWatch More than 60Sec":"false","StWatch More than 60Min":"false","●現在時刻":"","Clock X":"652","Clock Y":"72","Clock Width":"224","Clock Height":"48","Clock Font Name":"'GameFont'","Clock Font Size":"20","Clock Font Italic":"false","Clock Text Opacity":"255","Clock Text Color":"#FFFFFF","Clock Outline Width":"4","Clock Outline Color":"0,0,0,0.5","Clock Hours":"true","Clock Hours ZeroPad":"false","Clock Min":"true","Clock Min ZeroPad":"true","Clock Sec":"true","Clock Sec ZeroPad":"true","Clock MSec":"false","Clock MSec Digits":"2","●現在年月日":"","Date X":"0","Date Y":"48","Date Width":"224","Date Height":"48","Date Font Name":"'GameFont'","Date Font Size":"32","Date Font Italic":"false","Date Text Opacity":"255","Date Text Color":"#FFFFFF","Date Outline Width":"4","Date Outline Color":"0,0,0,0.5","Date ZeroPad":"false","Date Year":"true","Date Month":"true","Date Date":"true","Date Day":"true","Date Day Sun":"日","Date Day Mon":"月","Date Day Tue":"火","Date Day Wed":"水","Date Day Thu":"木","Date Day Fri":"金","Date Day Sat":"土"}},
{"name":"HalfMove","status":false,"description":"半歩移動プラグイン","parameters":{"8方向移動":"ON","イベントすり抜け":"OFF","強制中無効":"OFF","角回避":"ON","斜め移動中減速":"ON","トリガー拡大":"OFF","実歩数調整":"OFF","上半分移動不可地形":"0","上半分移動不可Region":"0","下半分移動不可地形":"0","下半分移動不可Region":"0","右半分移動不可地形":"0","右半分移動不可Region":"0","左半分移動不可地形":"0","左半分移動不可Region":"0","全方向移動不可地形":"0","全方向移動不可Region":"0","イベント複数起動防止":"OFF","イベント位置重複OK":"OFF"}},
{"name":"AudioSource","status":true,"description":"音源と聞き手の位置関係に応じて自動的に音量・位相を調節します。","parameters":{"listener":"player","decay":"85","pan":"10","cutoff":"1"}},
{"name":"InfoWindow","status":true,"description":"情報表示ウィンドウをメニュー画面に追加するプラグイン","parameters":{}},
{"name":"Yami_8DirEx","status":false,"description":"8方向移動(タッチパネル対応版)","parameters":{"dir4 Switch ID":"12"}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{}},
{"name":"MPP_ChoiceEX","status":true,"description":"【ver.3.3】選択肢の機能拡張","parameters":{"maxPageRow":"10"}},
{"name":"Torigoya_RetryLoadPlus","status":true,"description":"ファイルの読み込み失敗時にリトライします","parameters":{"Retry Max":"3","Retry Message Text":"ファイルの読み込みに失敗しました。\\n読み込みなおしてもエラーが出る場合は製作者にお伝え下さい。","Retry Button Text":"読み込みなおす"}},
{"name":"MessageSelectPicture","status":true,"description":"選択肢のピクチャ表示プラグイン","parameters":{}},
{"name":"TitleCommandPosition","status":true,"description":"タイトルコマンドウィンドウの位置を変更します。","parameters":{"Offset X":"-200","Offset Y":"-230","Width":"150","Background":"2"}},
{"name":"PD_DelayTitle","status":true,"description":"タイトル画面の各画像の表示にディレイとフェードイン機能を追加します。","parameters":{"Delay BG1":"0","Fade BG1":"60","Delay BG2":"60","Fade BG2":"60","Delay Title":"120","Fade Title":"60","Delay Command":"160","Pass To Decide":"1"}},
{"name":"Torigoya_SaveCommand","status":true,"description":"プラグインコマンドからセーブを実行できるようにします。","parameters":{}},
{"name":"HTN_SaveMax","status":true,"description":"セーブ最大数を変更します","parameters":{"Max Quantity":"1"}},
{"name":"BB_CustomSaveWindow","status":true,"description":"セーブウインドウ改造プラグイン","parameters":{"OutsideFrameColor":"0","OutsideFrameOpacity":"64","InsideFrameColor":"0","InsideFrameOpacity":"64","MaxItem":"4","Item0":"9","Item0Length":"200","Item1title":"総プレイ時間","Item1":"2","Item2title":"累計撃破数","Item2":"8","Item3title":"所持金","Item3":"6","Item4title":"Level","Item4":"7","Item5":"0","ItemValue1":"17","ItemValue2":"20","ItemValue3":"236","ItemValue4":"10","ItemValue1unit":"S","ItemValue2unit":"","ItemValue3unit":"体","ItemValue4unit":"","TitleFramelength1":"130","TitleFramelength2":"130","TitleFramelength3":"130","TitleFramelength4":"130","CharacterPositionY":"12","LevelPositionY":"23","LevelOnOff":"0"}},
{"name":"VersionSpecified","status":true,"description":"【MMP ver.1.0】タイトル画面にバージョンを明記します。","parameters":{"version":"Ver 0.2.55","fontSize":"20","fontColor":"rgb(255, 255, 255)","windowX":"540","windowY":"560"}}
];
