$wnd.gwtmaterialdemo.runAsyncCallback22("function $clinit_ViewWithUiHandlers(){\n  $clinit_ViewWithUiHandlers = emptyMethod;\n  $ensureNamesAreInitialized(Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit);\n}\n\ndefineClass(725, 56, $intern_41);\nvar Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit = createForClass('com.gwtplatform.mvp.client', 'ViewWithUiHandlers', 725);\nfunction $getFragment_gwt_material_design_demo_client_resources(this$static){\n  !this$static.fieldFragment_gwt$material$design$demo$client$resources && (this$static.fieldFragment_gwt$material$design$demo$client$resources = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_44);\n  return this$static.fieldFragment_gwt$material$design$demo$client$resources;\n}\n\nfunction GettingStartedPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n  dynamicCast(this.view, 1416);\n}\n\ndefineClass(568, 53, $intern_40, GettingStartedPresenter);\n_.onReveal = function onReveal_28(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Getting Started', 'Learn how to easily start using GWT Material Design in your app.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedPresenter', 568);\nfunction GettingStartedView(){\n  $clinit_ViewWithUiHandlers();\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_6(new GettingStartedView_BinderImpl$Widgets));\n}\n\ndefineClass(726, 725, {12:1, 1416:1}, GettingStartedView);\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView', 726);\nfunction GettingStartedView_BinderImpl(){\n}\n\ndefineClass(952, 1, {}, GettingStartedView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl', 952);\nfunction $build_f_MaterialPanel1_6(this$static){\n  var f_MaterialPanel1, f_MaterialPanel2, f_MaterialPanel5, f_MaterialPanel7, f_MaterialTitle12, f_MaterialLink13, f_MaterialTitle14, f_PrettyPre15, f_MaterialTitle16, f_PrettyPre17, f_MaterialPanel18, f_MaterialPanel21, f_MaterialPanel26, f_MaterialTitle3, btnMaven, f_PrettyPre4, sb, f_MaterialTitle6, btnDownloadGWTMaterial, f_MaterialTitle8, f_PrettyPre9, sb_0, f_MaterialTitle10, f_PrettyPre11, sb_1, sb_2, sb_3, f_MaterialTitle19, f_PrettyPre20, sb_4, f_MaterialTitle22, f_PrettyPre23, sb_5, f_MaterialTitle24, f_PrettyPre25, sb_6, f_MaterialRow27, f_MaterialColumn28, f_MaterialTitle29, f_MaterialImage30, btnDemoStarter, btnSourceStarter;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_MaterialPanel2 = new MaterialPanel , $add_13(f_MaterialPanel2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), 'Maven Repository') , $setText_4(f_MaterialTitle3.paragraph, 'We release a maven repository in order to improve the productivity of GWT Material.') , f_MaterialTitle3)) , $add_13(f_MaterialPanel2, (btnMaven = new MaterialLink , $setIconPosition(btnMaven, ($clinit_IconPosition() , LEFT_4)) , btnMaven.span_0.setText('http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material.') , $add_13(btnMaven, btnMaven.span_0) , $setTextColor((!btnMaven.colorsMixin && (btnMaven.colorsMixin = new ColorsMixin(btnMaven)) , btnMaven.colorsMixin), 'blue') , $setIconType(btnMaven, ($clinit_IconType() , LINK_1)) , $addDomHandler(btnMaven, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , btnMaven)) , $add_13(f_MaterialPanel2, (f_PrettyPre4 = new PrettyPre , $setHTML(f_PrettyPre4, (sb = new StringBuilder , sb.string += '\\u2003&lt;dependency&gt;<br> \\u2003&lt;groupId&gt;com.github.gwtmaterialdesign&lt;/groupId&gt;<br> \\u2003&lt;artifactId&gt;gwt-material&lt;/artifactId&gt;<br> \\u2003&lt;version&gt;1.4.0&lt;/version&gt;<br> &lt;/dependency&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(($clinit_DOM() , f_PrettyPre4.element), 'lang-xml', true) , setStyleName(f_PrettyPre4.element, 'z-depth-1', true) , f_PrettyPre4)) , f_MaterialPanel2));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel5 = new MaterialPanel , $add_13(f_MaterialPanel5, (f_MaterialTitle6 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle6.header), 'Download the JAR (Alternative)') , $setText_4(f_MaterialTitle6.paragraph, 'If you are not using maven you can download the latest Jar Release easily and add it in your classpath.') , f_MaterialTitle6)) , $add_13(f_MaterialPanel5, (btnDownloadGWTMaterial = new MaterialButton , $setIconPosition(btnDownloadGWTMaterial, RIGHT_5) , btnDownloadGWTMaterial.span_0.setText('Download 1.4.0') , $add_13(btnDownloadGWTMaterial, btnDownloadGWTMaterial.span_0) , $setBackgroundColor((!btnDownloadGWTMaterial.colorsMixin && (btnDownloadGWTMaterial.colorsMixin = new ColorsMixin(btnDownloadGWTMaterial)) , btnDownloadGWTMaterial.colorsMixin), 'blue') , $setWaves(btnDownloadGWTMaterial, ($clinit_WavesType() , LIGHT)) , $setIconType(btnDownloadGWTMaterial, FILE_DOWNLOAD) , $addDomHandler(btnDownloadGWTMaterial, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_1)) , btnDownloadGWTMaterial)) , f_MaterialPanel5));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel7 = new MaterialPanel , $add_13(f_MaterialPanel7, (f_MaterialTitle8 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle8.header), 'Configuring your module') , $setText_4(f_MaterialTitle8.paragraph, 'You will have to configure your App.gwt.xml file to inherit the Gwt Material Widget widget library. You can do it like this:') , f_MaterialTitle8)) , $add_13(f_MaterialPanel7, (f_PrettyPre9 = new PrettyPre , $setHTML(f_PrettyPre9, (sb_0 = new StringBuilder , sb_0.string += '&lt;inherits name=\"gwt.material.design.GwtMaterialWithJQuery\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre9.element, 'lang-xml', true) , setStyleName(f_PrettyPre9.element, 'z-depth-1', true) , f_PrettyPre9)) , $add_13(f_MaterialPanel7, (f_MaterialTitle10 = new MaterialTitle , $setText_4(f_MaterialTitle10.paragraph, 'Here are the available modules for 1.4 release') , f_MaterialTitle10)) , $add_13(f_MaterialPanel7, (f_PrettyPre11 = new PrettyPre , $setHTML(f_PrettyPre11, (sb_1 = new StringBuilder , sb_1.string += '\\u2003- GwtMaterialDesign # Standard use with all resources (but will not load jQuery for you).<br> - GwtMaterialDesignDebug # Same as above but will load non-minified js and Source URL included for Chrome debugging<br> - GwtMaterialWithJQuery # Standard use with all resources and will also include loading jQuery<br> - GwtMaterialWithJQueryDebug # Same as but will load non-minified js and Source URL included for Chrome debugging<br> - GwtMaterialDesignBasic # Use without materialize.css file (but will not load jQuery for you).<br> - GwtMaterialBasicWithJQuery # Same as above but will also include loading jQuery<br> - GwtMaterialBasicWithJQueryDebug # Same as above but with non-minified js and Source URL included for Chrome debugging.<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre11.element, 'lang-yaml', true) , setStyleName(f_PrettyPre11.element, 'z-depth-1', true) , f_PrettyPre11)) , $setScrollspy((!f_MaterialPanel7.scrollspyMixin && (f_MaterialPanel7.scrollspyMixin = new ScrollspyMixin(f_MaterialPanel7)) , f_MaterialPanel7.scrollspyMixin), 'Configuring Your Module') , f_MaterialPanel7));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle12 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle12.header), 'Theming') , $setText_4(f_MaterialTitle12.paragraph, 'We created another project for gwtmaterial themes .See below the link of the repo.') , f_MaterialTitle12));\n  $add_13(f_MaterialPanel1, (f_MaterialLink13 = new MaterialLink , $setIconPosition(f_MaterialLink13, LEFT_4) , f_MaterialLink13.span_0.setText('Gwt Material Themes Github Repo') , $add_13(f_MaterialLink13, f_MaterialLink13.span_0) , $setTextColor((!f_MaterialLink13.colorsMixin && (f_MaterialLink13.colorsMixin = new ColorsMixin(f_MaterialLink13)) , f_MaterialLink13.colorsMixin), 'blue') , $setAttribute(f_MaterialLink13.element, 'target', '_blank') , $setAttribute(f_MaterialLink13.element, 'href', 'https://github.com/GwtMaterialDesign/gwt-material-themes') , $setIconType(f_MaterialLink13, LINK_1) , f_MaterialLink13));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle14 = new MaterialTitle , $setText_4(f_MaterialTitle14.paragraph, 'First: Make sure you are using GwtMaterialDesignBasic module (This will not load the materialize.css default file allowing you to customize your design.)') , f_MaterialTitle14));\n  $add_13(f_MaterialPanel1, (f_PrettyPre15 = new PrettyPre , $setHTML(f_PrettyPre15, (sb_2 = new StringBuilder , sb_2.string += '&lt;inherits name=\"gwt.material.design.GwtMaterialDesignBasic\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre15.element, 'lang-xml', true) , setStyleName(f_PrettyPre15.element, 'z-depth-1', true) , f_PrettyPre15));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle16 = new MaterialTitle , $setText_4(f_MaterialTitle16.paragraph, 'Second: Checkout the theme project and add it to your build path. And define it on your app.gwt.xml file.') , f_MaterialTitle16));\n  $add_13(f_MaterialPanel1, (f_PrettyPre17 = new PrettyPre , $setHTML(f_PrettyPre17, (sb_3 = new StringBuilder , sb_3.string += '&lt;inherits name=\"gwt.material.design.themes.GwtMaterialThemeBlue\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html) , setStyleName(f_PrettyPre17.element, 'lang-xml', true) , setStyleName(f_PrettyPre17.element, 'z-depth-1', true) , f_PrettyPre17));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel18 = new MaterialPanel , $add_13(f_MaterialPanel18, (f_MaterialTitle19 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle19.header), 'Responsive Design') , $setText_4(f_MaterialTitle19.paragraph, 'Add meta tag for responsive design on Mobile devices in your gwt-app.html') , f_MaterialTitle19)) , $add_13(f_MaterialPanel18, (f_PrettyPre20 = new PrettyPre , $setHTML(f_PrettyPre20, (sb_4 = new StringBuilder , sb_4.string += '&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html) , setStyleName(f_PrettyPre20.element, 'lang-xml', true) , setStyleName(f_PrettyPre20.element, 'z-depth-1', true) , f_PrettyPre20)) , f_MaterialPanel18));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel21 = new MaterialPanel , $add_13(f_MaterialPanel21, (f_MaterialTitle22 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle22.header), 'UiBinder usage') , $setText_4(f_MaterialTitle22.paragraph, \"Assuming that you're using UIBinder, add the following namespace to the <ui:UIBinder> element:\") , f_MaterialTitle22)) , $add_13(f_MaterialPanel21, (f_PrettyPre23 = new PrettyPre , $setHTML(f_PrettyPre23, (sb_5 = new StringBuilder , sb_5.string += 'xmlns:m=\"urn:import:gwt.material.design.client.ui\"' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html) , setStyleName(f_PrettyPre23.element, 'lang-xml', true) , setStyleName(f_PrettyPre23.element, 'z-depth-1', true) , f_PrettyPre23)) , $add_13(f_MaterialPanel21, (f_MaterialTitle24 = new MaterialTitle , $setText_4(f_MaterialTitle24.paragraph, 'Then you can easily use the m namespace in your widget design, like MaterialButton:') , f_MaterialTitle24)) , $add_13(f_MaterialPanel21, (f_PrettyPre25 = new PrettyPre , $setHTML(f_PrettyPre25, (sb_6 = new StringBuilder , sb_6.string += '&lt;m:MaterialButton text=\"Button\" waves=\"DEFAULT\" backgroundColor=\"white\" textColor=\"black\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_6.string)).html) , setStyleName(f_PrettyPre25.element, 'lang-xml', true) , setStyleName(f_PrettyPre25.element, 'z-depth-1', true) , f_PrettyPre25)) , f_MaterialPanel21));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel26 = new MaterialPanel , $add_13(f_MaterialPanel26, (f_MaterialRow27 = new MaterialRow , $add_13(f_MaterialRow27, (f_MaterialColumn28 = new MaterialColumn , $add_13(f_MaterialColumn28, (f_MaterialTitle29 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle29.header), 'Starter Template') , $setText_4(f_MaterialTitle29.paragraph, 'You can copy and paste the UI Binder Code of this starter template into your app to know how GWT Material works with basic Nav Bar, Side Bar, Fixed Footer, and Container works.') , f_MaterialTitle29)) , $add_13(f_MaterialColumn28, (f_MaterialImage30 = new MaterialImage , $setResource(f_MaterialImage30, (new MaterialResources_default_InlineClientBundleGenerator_0 , $clinit_MaterialResources_default_InlineClientBundleGenerator$starterInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator_0() , starter)) , $setType_6(f_MaterialImage30, ($clinit_ImageType() , MATERIALBOXED)) , f_MaterialImage30)) , $add_13(f_MaterialColumn28, (btnDemoStarter = new MaterialButton , $setIconPosition(btnDemoStarter, RIGHT_5) , btnDemoStarter.span_0.setText('Demo') , $add_13(btnDemoStarter, btnDemoStarter.span_0) , $setIconType(btnDemoStarter, SEARCH_0) , $addDomHandler(btnDemoStarter, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnDemoStarter)) , $add_13(f_MaterialColumn28, (btnSourceStarter = new MaterialButton , $setIconPosition(btnSourceStarter, RIGHT_5) , btnSourceStarter.span_0.setText('Source') , $add_13(btnSourceStarter, btnSourceStarter.span_0) , $setIconType(btnSourceStarter, FILE_DOWNLOAD) , $addDomHandler(btnSourceStarter, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , btnSourceStarter)) , $setGrid((!f_MaterialColumn28.gridMixin && (f_MaterialColumn28.gridMixin = new GridMixin(f_MaterialColumn28)) , f_MaterialColumn28.gridMixin), 's12 m6 l6') , f_MaterialColumn28)) , f_MaterialRow27)) , f_MaterialPanel26));\n  return f_MaterialPanel1;\n}\n\nfunction GettingStartedView_BinderImpl$Widgets(){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new GettingStartedView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new GettingStartedView_BinderImpl$Widgets$2;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new GettingStartedView_BinderImpl$Widgets$3;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new GettingStartedView_BinderImpl$Widgets$4;\n}\n\ndefineClass(953, 1, {}, GettingStartedView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets', 953);\nfunction GettingStartedView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(954, 1, $intern_50, GettingStartedView_BinderImpl$Widgets$1);\n_.onClick = function onClick_78(event_0){\n  open_0('http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/1', 954);\nfunction GettingStartedView_BinderImpl$Widgets$2(){\n}\n\ndefineClass(955, 1, $intern_50, GettingStartedView_BinderImpl$Widgets$2);\n_.onClick = function onClick_79(event_0){\n  open_0('http://gwt-material-starter.appspot.com', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/2', 955);\nfunction GettingStartedView_BinderImpl$Widgets$3(){\n}\n\ndefineClass(956, 1, $intern_50, GettingStartedView_BinderImpl$Widgets$3);\n_.onClick = function onClick_80(event_0){\n  open_0('https://github.com/kevzlou7979/GWTMaterialDesign/blob/master/gwt.material.starter/src/gwt/material/starter/client/panel/HomePanel.ui.xml', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/3', 956);\nfunction GettingStartedView_BinderImpl$Widgets$4(){\n}\n\ndefineClass(957, 1, $intern_50, GettingStartedView_BinderImpl$Widgets$4);\n_.onClick = function onClick_81(event_0){\n  open_0('http://central.maven.org/maven2/com/github/gwtmaterialdesign/gwt-material/1.4/gwt-material-1.4.jar', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/4', 957);\nfunction $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$) {\n    result = new GettingStartedPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$) {\n    result = new GettingStartedView((new GettingStartedView_BinderImpl , $get_Key$type$gwt$material$design$demo$client$resources$MaterialConstants$_annotation$$none$$($getFragment_gwt_material_design_demo_client_resources(this$static.injector))));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$;\n}\n\ndefineClass(516, 1, $intern_55);\n_.onSuccess_0 = function onSuccess_21(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction MaterialConstants_(){\n}\n\ndefineClass(958, 1, {}, MaterialConstants_);\nvar Lgwt_material_design_demo_client_resources_MaterialConstants_1_2_classLit = createForClass('gwt.material.design.demo.client.resources', 'MaterialConstants_', 958);\nvar starter;\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$starterInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$starterInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  starter = new ImageResourcePrototype('starter', ($clinit_UriUtils() , new SafeUriString(externalImage11)), 1599, 789);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$resources$MaterialConstants$_annotation$$none$$(){\n  var created;\n  created = new MaterialConstants_;\n  return created;\n}\n\nfunction com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_44(){\n}\n\ndefineClass(582, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_44);\nvar Lgwt_material_design_demo_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('gwt.material.design.demo.client.resources', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 582);\n$entry(onLoad_0)(22);\n\n//# sourceURL=gwtmaterialdemo-22.js\n")
