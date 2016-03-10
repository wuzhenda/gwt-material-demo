$wnd.gwtmaterialdemo.runAsyncCallback2("function $scrollIntoView(elem){\n  var left = elem.offsetLeft, top_0 = elem.offsetTop;\n  var width_0 = elem.offsetWidth, height = elem.offsetHeight;\n  if (elem.parentNode != elem.offsetParent) {\n    left -= elem.parentNode.offsetLeft;\n    top_0 -= elem.parentNode.offsetTop;\n  }\n  var cur = elem.parentNode;\n  while (cur && cur.nodeType == 1) {\n    left < cur.scrollLeft && (cur.scrollLeft = left);\n    left + width_0 > cur.scrollLeft + cur.clientWidth && (cur.scrollLeft = left + width_0 - cur.clientWidth);\n    top_0 < cur.scrollTop && (cur.scrollTop = top_0);\n    top_0 + height > cur.scrollTop + cur.clientHeight && (cur.scrollTop = top_0 + height - cur.clientHeight);\n    var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;\n    if (cur.parentNode != cur.offsetParent) {\n      offsetLeft -= cur.parentNode.offsetLeft;\n      offsetTop -= cur.parentNode.offsetTop;\n    }\n    left += offsetLeft - cur.scrollLeft;\n    top_0 += offsetTop - cur.scrollTop;\n    cur = cur.parentNode;\n  }\n}\n\nfunction addWindowScrollHandler(handler){\n  maybeInitializeCloseHandlers();\n  maybeInitializeScrollHandlers();\n  return addHandler_0(($clinit_Window$ScrollEvent() , $clinit_Window$ScrollEvent() , TYPE_25), handler);\n}\n\nfunction fireEvent_4(event_0){\n  !!handlers_1 && $fireEvent(handlers_1, event_0);\n}\n\nfunction maybeInitializeScrollHandlers(){\n  if (!scrollHandlersInitialized) {\n    $initHandler(\"function __gwt_initWindowScrollHandler(scroll) {\\n  var wnd = window, oldOnScroll = wnd.onscroll;\\n  \\n  wnd.onscroll = function(evt) {\\n    try {\\n      scroll();\\n    } finally {\\n      oldOnScroll && oldOnScroll(evt);\\n    }\\n  };\\n  \\n  // Remove the reference once we've initialize the handler\\n  wnd.__gwt_initWindowScrollHandler = undefined;\\n}\\n\", new WindowImplIE$3);\n    scrollHandlersInitialized = true;\n  }\n}\n\nfunction onScroll_0(){\n  scrollHandlersInitialized && fireEvent_4(new Window$ScrollEvent(($wnd.pageXOffset | 0 , $doc , $wnd.pageYOffset | 0)));\n}\n\nvar scrollHandlersInitialized = false;\nfunction $clinit_Window$ScrollEvent(){\n  $clinit_Window$ScrollEvent = emptyMethod;\n  TYPE_25 = new GwtEvent$Type;\n}\n\nfunction $dispatch_4(handler){\n  $setupCutOutPosition(handler.this$01.focus_0, handler.this$01.targetElement, handler.this$01.cutOutPadding, handler.this$01.circle);\n}\n\nfunction Window$ScrollEvent(){\n  $clinit_Window$ScrollEvent();\n}\n\ndefineClass(818, $intern_17, {}, Window$ScrollEvent);\n_.dispatch = function dispatch_25(handler){\n  $dispatch_4(dynamicCast(handler, 1786));\n}\n;\n_.getAssociatedType = function getAssociatedType_26(){\n  return TYPE_25;\n}\n;\nvar TYPE_25;\nvar Lcom_google_gwt_user_client_Window$ScrollEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ScrollEvent', 818);\nfunction WindowImplIE$3(){\n}\n\ndefineClass(942, 1, {}, WindowImplIE$3);\n_.execute_1 = function execute_13(){\n  $wnd.__gwt_initWindowScrollHandler($entry(onScroll_0));\n}\n;\nvar Lcom_google_gwt_user_client_impl_WindowImplIE$3_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/3', 942);\nfunction $closeCutOut(this$static){\n  $setPropertyImpl($doc.documentElement.style, 'overflow', this$static.viewportOverflow);\n  ($clinit_DOM() , this$static.element).style['display'] = ($clinit_Style$Display() , 'none');\n  if (this$static.resizeHandler) {\n    $removeHandler(this$static.resizeHandler.real);\n    this$static.resizeHandler = null;\n  }\n  if (this$static.scrollHandler) {\n    $removeHandler(this$static.scrollHandler.real);\n    this$static.scrollHandler = null;\n  }\n  if (this$static.autoAddedToDocument) {\n    $removeFromParent_0(this$static);\n    this$static.autoAddedToDocument = false;\n  }\n  fire_1(this$static, this$static);\n}\n\nfunction $openCutOut(this$static){\n  var docStyle, temp, style, computed;\n  if (!this$static.targetElement) {\n    throw new IllegalStateException_0('The target element should be set before calling openCutOut().');\n  }\n  $scrollIntoView(this$static.targetElement);\n  this$static.computedBackgroundColor == null && (temp = new MaterialWidget_0($doc.createElement('div')) , temp.setBackgroundColor(this$static.backgroundColor) , style = ($clinit_DOM() , temp.element).style , $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'fixed')) , $setPropertyImpl(style, 'width', ($clinit_Style$Unit() , '1.0px')) , $setPropertyImpl(style, 'height', '1.0px') , $setPropertyImpl(style, 'left', '-10.0px') , $setPropertyImpl(style, 'top', '-10.0px') , $setPropertyImpl(style, 'zIndex', '-10000') , computed = setupComputedBackgroundColor(this$static.backgroundColor) , this$static.opacity_0 < 1 && $equals_1(computed.substr(0, 4), 'rgb(') && (computed = $replace_0($replace_0(computed, 'rgb(', 'rgba('), ')', ', ' + this$static.opacity_0 + ')')) , this$static.computedBackgroundColor = computed , undefined);\n  docStyle = $doc.documentElement.style;\n  this$static.viewportOverflow = docStyle['overflow'];\n  $setPropertyImpl(docStyle, 'overflow', 'hidden');\n  $setupTransition(this$static);\n  if (this$static.animated) {\n    this$static.focus_0.style['boxShadow'] = '0px 0px 0px 0rem ' + this$static.computedBackgroundColor;\n    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new MaterialCutOut$1(this$static));\n  }\n   else {\n    this$static.focus_0.style['boxShadow'] = '0px 0px 0px ' + this$static.backgroundSize + ' ' + this$static.computedBackgroundColor;\n  }\n  if (this$static.circle) {\n    $setPropertyImpl(this$static.focus_0.style, 'WebkitBorderRadius', '50%');\n    $setPropertyImpl(this$static.focus_0.style, 'borderRadius', '50%');\n  }\n   else {\n    $setPropertyImpl(this$static.focus_0.style, 'WebkitBorderRadius', '');\n    $setPropertyImpl(this$static.focus_0.style, 'borderRadius', '');\n  }\n  $setupCutOutPosition(this$static.focus_0, this$static.targetElement, this$static.cutOutPadding, this$static.circle);\n  !!this$static.resizeHandler && $removeHandler(this$static.resizeHandler.real);\n  !!this$static.scrollHandler && $removeHandler(this$static.scrollHandler.real);\n  this$static.resizeHandler = addResizeHandler(new MaterialCutOut$2(this$static));\n  this$static.scrollHandler = addWindowScrollHandler(new MaterialCutOut$3(this$static));\n  ($clinit_DOM() , this$static.element).style['display'] = '';\n  if (!this$static.parent_1) {\n    this$static.autoAddedToDocument = true;\n    $add_3(($clinit_RootPanel() , get_1(null)), this$static);\n  }\n}\n\nfunction $setTarget(this$static, targetElement){\n  this$static.targetElement = targetElement;\n}\n\nfunction $setupCutOutPosition(cutOut, relativeTo, padding, circle){\n  var rect = relativeTo.getBoundingClientRect();\n  var top_0 = rect.top;\n  var left = rect.left;\n  var width_0 = rect.right - rect.left;\n  var height = rect.bottom - rect.top;\n  if (circle) {\n    if (width_0 != height) {\n      var dif = width_0 - height;\n      if (width_0 > height) {\n        height += dif;\n        top_0 -= dif / 2;\n      }\n       else {\n        dif = -dif;\n        width_0 += dif;\n        left -= dif / 2;\n      }\n    }\n  }\n  top_0 -= padding;\n  left -= padding;\n  width_0 += padding * 2;\n  height += padding * 2;\n  cutOut.style.top = top_0 + 'px';\n  cutOut.style.left = left + 'px';\n  cutOut.style.width = width_0 + 'px';\n  cutOut.style.height = height + 'px';\n}\n\nfunction $setupTransition(this$static){\n  if (this$static.animated) {\n    this$static.focus_0.style['WebkitTransition'] = 'box-shadow ' + this$static.animationDuration + ' ' + this$static.animationTimingFunction;\n    this$static.focus_0.style['transition'] = 'box-shadow ' + this$static.animationDuration + ' ' + this$static.animationTimingFunction;\n  }\n   else {\n    $setPropertyImpl(this$static.focus_0.style, 'WebkitTransition', '');\n    $setPropertyImpl(this$static.focus_0.style, 'transition', '');\n  }\n}\n\nfunction MaterialCutOut(){\n  var style;\n  MaterialWidget_0.call(this, $doc.createElement('div'));\n  this.backgroundColor = 'blue';\n  this.opacity_0 = 0.8;\n  this.animated = true;\n  this.animationDuration = '0.5s';\n  this.animationTimingFunction = 'ease';\n  this.backgroundSize = '100rem';\n  this.cutOutPadding = 10;\n  this.circle = false;\n  this.autoAddedToDocument = false;\n  this.focus_0 = $doc.createElement('div');\n  $appendChild(($clinit_DOM() , this.element), this.focus_0);\n  $setClassName(this.element, 'material-cutout');\n  style = this.element.style;\n  $setPropertyImpl(style, 'width', ($clinit_Style$Unit() , '100.0%'));\n  $setPropertyImpl(style, 'height', '100.0%');\n  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'fixed'));\n  $setPropertyImpl(style, 'top', '0.0px');\n  $setPropertyImpl(style, 'left', '0.0px');\n  $setPropertyImpl(style, 'overflow', ($clinit_Style$Overflow() , 'hidden'));\n  $setPropertyImpl(style, 'zIndex', '10000');\n  $setPropertyImpl(style, 'display', ($clinit_Style$Display() , 'none'));\n  $setClassName(this.focus_0, 'material-cutout-focus');\n  style = this.focus_0.style;\n  $setPropertyImpl(style, 'content', \"''\");\n  $setPropertyImpl(style, 'position', 'absolute');\n  $setPropertyImpl(style, 'zIndex', '-1');\n}\n\ndefineClass(1380, 24, $intern_61, MaterialCutOut);\n_.setBackgroundColor = function setBackgroundColor_0(bgColor){\n  this.backgroundColor = bgColor;\n  this.computedBackgroundColor = null;\n}\n;\n_.animated = false;\n_.autoAddedToDocument = false;\n_.circle = false;\n_.cutOutPadding = 0;\n_.opacity_0 = 0;\nvar Lgwt_material_design_addins_client_ui_MaterialCutOut_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialCutOut', 1380);\nfunction MaterialCutOut$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1381, 1, {}, MaterialCutOut$1);\n_.execute_1 = function execute_35(){\n  this.this$01.focus_0.style['boxShadow'] = '0px 0px 0px ' + this.this$01.backgroundSize + ' ' + this.this$01.computedBackgroundColor;\n}\n;\nvar Lgwt_material_design_addins_client_ui_MaterialCutOut$1_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialCutOut/1', 1381);\nfunction MaterialCutOut$2(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1382, 1, $intern_42, MaterialCutOut$2);\n_.onResize = function onResize_11(event_0){\n  $setupCutOutPosition(this.this$01.focus_0, this.this$01.targetElement, this.this$01.cutOutPadding, this.this$01.circle);\n}\n;\nvar Lgwt_material_design_addins_client_ui_MaterialCutOut$2_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialCutOut/2', 1382);\nfunction MaterialCutOut$3(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1383, 1, {19:1, 1786:1}, MaterialCutOut$3);\nvar Lgwt_material_design_addins_client_ui_MaterialCutOut$3_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialCutOut/3', 1383);\nfunction CutOutsPresenter(eventBus, view, proxy){\n  $clinit_CutOutsPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(643, 56, $intern_54, CutOutsPresenter);\n_.onReveal = function onReveal_5(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('CutOuts', 'The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsPresenter', 643);\nfunction $onCutOut(this$static){\n  $setTarget(this$static.cutout, $getElement(this$static.btnCutOut));\n  $openCutOut(this$static.cutout);\n}\n\nfunction CutOutsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1(new CutOutsView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(830, 59, $intern_55, CutOutsView);\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsView', 830);\nfunction CutOutsView_BinderImpl(){\n}\n\ndefineClass(1081, 1, {}, CutOutsView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsView_BinderImpl', 1081);\nfunction $build_f_MaterialPanel1(this$static){\n  var f_MaterialPanel1, f_MaterialTitle2, f_PrettyPre3, f_MaterialTitle4, btnCutOut, cutout, f_MaterialTitle5, btnCutOutClose, f_PrettyPre6, f_PrettyPre7, sb, sb_0, sb_1;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Addins Usage') , $setText_9(f_MaterialTitle2.paragraph, 'In every gwt-material-addins components you may require to add the following namespace to the <ui:UIBinder> element') , f_MaterialTitle2));\n  $add_13(f_MaterialPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML(f_PrettyPre3, (sb = new StringBuilder , sb.string += \"xmlns:m.addins='urn:import:gwt.material.design.addins.client.ui'\" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(($clinit_DOM() , f_PrettyPre3.element), 'lang-xml', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), 'Material Cut Out') , $setText_9(f_MaterialTitle4.paragraph, 'Click the icon below to show a material cutout.') , f_MaterialTitle4));\n  $add_13(f_MaterialPanel1, (btnCutOut = new MaterialIcon , $setIconType_3(btnCutOut, ($clinit_IconType() , POLYMER)) , $addDomHandler(btnCutOut, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , this$static.owner.btnCutOut = btnCutOut , btnCutOut));\n  $add_13(f_MaterialPanel1, (cutout = new MaterialCutOut , $add_13(cutout, (f_MaterialTitle5 = new MaterialTitle , $setTextColor_0((!f_MaterialTitle5.colorsMixin_0 && (f_MaterialTitle5.colorsMixin_0 = new ColorsMixin(f_MaterialTitle5)) , f_MaterialTitle5.colorsMixin_0), 'white') , $setInnerHTML($getElement(f_MaterialTitle5.header), 'New Feature') , $setText_9(f_MaterialTitle5.paragraph, 'Description of your new Feature') , f_MaterialTitle5)) , $add_13(cutout, (btnCutOutClose = new MaterialButton , btnCutOutClose.span_1.setText('Close') , $add_13(btnCutOutClose, btnCutOutClose.span_1) , $setTextColor_0((!btnCutOutClose.colorsMixin_0 && (btnCutOutClose.colorsMixin_0 = new ColorsMixin(btnCutOutClose)) , btnCutOutClose.colorsMixin_0), 'blue') , $setBackgroundColor_0((!btnCutOutClose.colorsMixin_0 && (btnCutOutClose.colorsMixin_0 = new ColorsMixin(btnCutOutClose)) , btnCutOutClose.colorsMixin_0), 'white') , $addDomHandler(btnCutOutClose, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnCutOutClose)) , cutout.backgroundColor = 'blue' , cutout.computedBackgroundColor = null , cutout.opacity_0 = 0.8 , cutout.computedBackgroundColor = null , $setTextAlign(cutout, ($clinit_TextAlign() , CENTER_4)) , cutout.circle = true , this$static.owner.cutout = cutout , cutout));\n  $add_13(f_MaterialPanel1, (f_PrettyPre6 = new PrettyPre , $setHTML(f_PrettyPre6, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt; -- Target Element --&gt; &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;m:MaterialCutOut ui:field=\"cutout\" backgroundColor=\"blue\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"white\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"blue\" backgroundColor=\"white\"/&gt;<br> &lt;/m:MaterialCutOut&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre6.element, 'lang-xml', true) , setStyleName(f_PrettyPre6.element, 'z-depth-1', true) , f_PrettyPre6));\n  $add_13(f_MaterialPanel1, (f_PrettyPre7 = new PrettyPre , $setHTML(f_PrettyPre7, (sb_1 = new StringBuilder , sb_1.string += '\\u2003@UiField MaterialCutOut cutout;<br><br> &lt;-- Target Element --&gt;<br>  @UiField MaterialIcon btnCutOut; <br><br> @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.openCutOut();<br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre7.element, 'lang-xml', true) , setStyleName(f_PrettyPre7.element, 'z-depth-1', true) , f_PrettyPre7));\n  return f_MaterialPanel1;\n}\n\nfunction CutOutsView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new CutOutsView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new CutOutsView_BinderImpl$Widgets$2(this);\n  this.owner = owner;\n}\n\ndefineClass(1082, 1, {}, CutOutsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsView_BinderImpl/Widgets', 1082);\nfunction CutOutsView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1083, 1, $intern_63, CutOutsView_BinderImpl$Widgets$1);\n_.onClick = function onClick_26(event_0){\n  $onCutOut(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsView_BinderImpl/Widgets/1', 1083);\nfunction CutOutsView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1084, 1, $intern_63, CutOutsView_BinderImpl$Widgets$2);\n_.onClick = function onClick_27(event_0){\n  $closeCutOut(this.this$11.owner.cutout);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsView_BinderImpl/Widgets/2', 1084);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$_annotation$$none$$) {\n    result = new CutOutsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsView$_annotation$$none$$) {\n    result = new CutOutsView(new CutOutsView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsView$_annotation$$none$$;\n}\n\ndefineClass(546, 1, $intern_79);\n_.onSuccess_0 = function onSuccess_1(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(2);\n\n//# sourceURL=gwtmaterialdemo-2.js\n")
