$wnd.gwtmaterialdemo.runAsyncCallback11("function $getText(this$static){\n  return $getPropertyString(($clinit_DOM() , this$static.element), 'value');\n}\n\nfunction $addItem_0(this$static, item_0){\n  $add_16(instanceOf(this$static.uiObject, 63)?dynamicCast(this$static.uiObject, 63):null, item_0);\n  $expand((instanceOf(this$static.uiObject, 63)?dynamicCast(this$static.uiObject, 63):null).treeItemMixin);\n  $initTree((instanceOf(this$static.uiObject, 63)?dynamicCast(this$static.uiObject, 63):null).treeItemMixin.tree, instanceOf(this$static.uiObject, 63)?dynamicCast(this$static.uiObject, 63):null);\n}\n\nfunction $collapse(this$static){\n  var item_0, item$iterator;\n  for (item$iterator = new AbstractList$IteratorImpl(this$static.treeItems); item$iterator.i < item$iterator.this$01_0.size_1();) {\n    item_0 = (checkCriticalElement(item$iterator.i < item$iterator.this$01_0.size_1()) , dynamicCast(item$iterator.this$01_0.get_1(item$iterator.last = item$iterator.i++), 63));\n    setVisible(($clinit_DOM() , item_0.element), false);\n  }\n}\n\nfunction $expand(this$static){\n  var item_0, item$iterator;\n  for (item$iterator = new AbstractList$IteratorImpl(this$static.treeItems); item$iterator.i < item$iterator.this$01_0.size_1();) {\n    item_0 = (checkCriticalElement(item$iterator.i < item$iterator.this$01_0.size_1()) , dynamicCast(item$iterator.this$01_0.get_1(item$iterator.last = item$iterator.i++), 63));\n    setVisible(($clinit_DOM() , item_0.element), true);\n  }\n}\n\nfunction $initTreeItem(this$static){\n  var item_0, treeItem, treeItem$iterator;\n  item_0 = dynamicCast(this$static.uiObject, 63);\n  fire_4(this$static.tree, item_0);\n  if (this$static.treeItems.array.length != 0) {\n    for (treeItem$iterator = new AbstractList$IteratorImpl(this$static.treeItems); treeItem$iterator.i < treeItem$iterator.this$01_0.size_1();) {\n      treeItem = (checkCriticalElement(treeItem$iterator.i < treeItem$iterator.this$01_0.size_1()) , dynamicCast(treeItem$iterator.this$01_0.get_1(treeItem$iterator.last = treeItem$iterator.i++), 63));\n      this$static.hide?setVisible(($clinit_DOM() , treeItem.element), false):setVisible(($clinit_DOM() , treeItem.element), true);\n    }\n    if (this$static.hide) {\n      fire_1(this$static.tree, item_0);\n      this$static.hide = false;\n    }\n     else {\n      fire_2(this$static.tree, item_0);\n      this$static.hide = true;\n    }\n  }\n}\n\nfunction $removeFromTree(this$static){\n  $removeFromParent_0(instanceOf(this$static.uiObject, 63)?dynamicCast(this$static.uiObject, 63):null);\n  $initTree((instanceOf(this$static.uiObject, 63)?dynamicCast(this$static.uiObject, 63):null).treeItemMixin.tree, instanceOf(this$static.uiObject, 63)?dynamicCast(this$static.uiObject, 63):null);\n}\n\nfunction $setHide(this$static, hide){\n  this$static.hide = hide;\n}\n\nfunction $setTree(this$static, tree){\n  this$static.tree = tree;\n}\n\nfunction TreeItemMixin(widget){\n  AbstractMixin.call(this, widget);\n  this.treeItems = new ArrayList;\n}\n\ndefineClass(1605, 470, {}, TreeItemMixin);\n_.hide = true;\nvar Lgwt_material_design_addins_client_base_mixin_TreeItemMixin_2_classLit = createForClass('gwt.material.design.addins.client.base.mixin', 'TreeItemMixin', 1605);\nfunction $add_15(this$static, child){\n  instanceOf(child, 63)?$add_1(this$static, child, ($clinit_DOM() , this$static.element)):undefined;\n}\n\nfunction $clearItemSelectedStyles(this$static, item_0){\n  var treeItem, treeItem$iterator;\n  setStyleName(($clinit_DOM() , item_0.element), 'selected', false);\n  for (treeItem$iterator = new AbstractList$IteratorImpl(item_0.treeItemMixin.treeItems); treeItem$iterator.i < treeItem$iterator.this$01_0.size_1();) {\n    treeItem = (checkCriticalElement(treeItem$iterator.i < treeItem$iterator.this$01_0.size_1()) , dynamicCast(treeItem$iterator.this$01_0.get_1(treeItem$iterator.last = treeItem$iterator.i++), 63));\n    $clearItemSelectedStyles(this$static, treeItem);\n  }\n}\n\nfunction $collapse_0(this$static){\n  var w, w$iterator;\n  for (w$iterator = new WidgetCollection$WidgetIterator(this$static.children_0); w$iterator.index_0 < w$iterator.this$01.size_0;) {\n    w = $next_3(w$iterator);\n    instanceOf(w, 63) && $collapseItems(this$static, dynamicCast(w, 63));\n  }\n}\n\nfunction $collapseItems(this$static, item_0){\n  var t, t$iterator;\n  $collapse(item_0.treeItemMixin);\n  $setHide(item_0.treeItemMixin, false);\n  for (t$iterator = new AbstractList$IteratorImpl(item_0.treeItemMixin.treeItems); t$iterator.i < t$iterator.this$01_0.size_1();) {\n    t = (checkCriticalElement(t$iterator.i < t$iterator.this$01_0.size_1()) , dynamicCast(t$iterator.this$01_0.get_1(t$iterator.last = t$iterator.i++), 63));\n    $collapseItems(this$static, t);\n  }\n}\n\nfunction $expand_0(this$static){\n  var w, w$iterator;\n  for (w$iterator = new WidgetCollection$WidgetIterator(this$static.children_0); w$iterator.index_0 < w$iterator.this$01.size_0;) {\n    w = $next_3(w$iterator);\n    instanceOf(w, 63) && $expandItems(this$static, dynamicCast(w, 63));\n  }\n}\n\nfunction $expandItems(this$static, item_0){\n  var t, t$iterator;\n  $expand(item_0.treeItemMixin);\n  $setHide(item_0.treeItemMixin, true);\n  for (t$iterator = new AbstractList$IteratorImpl(item_0.treeItemMixin.treeItems); t$iterator.i < t$iterator.this$01_0.size_1();) {\n    t = (checkCriticalElement(t$iterator.i < t$iterator.this$01_0.size_1()) , dynamicCast(t$iterator.this$01_0.get_1(t$iterator.last = t$iterator.i++), 63));\n    $expandItems(this$static, t);\n  }\n}\n\nfunction $initTree(this$static, item_0){\n  var treeItem, treeItem$iterator;\n  $setTree(item_0.treeItemMixin, this$static);\n  for (treeItem$iterator = new AbstractList$IteratorImpl(item_0.treeItemMixin.treeItems); treeItem$iterator.i < treeItem$iterator.this$01_0.size_1();) {\n    treeItem = (checkCriticalElement(treeItem$iterator.i < treeItem$iterator.this$01_0.size_1()) , dynamicCast(treeItem$iterator.this$01_0.get_1(treeItem$iterator.last = treeItem$iterator.i++), 63));\n    $initTree(this$static, treeItem);\n  }\n  $addHandler_0(this$static, new MaterialTree$1(this$static), (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18));\n}\n\nfunction $setSelectedTree(this$static, selectedTree){\n  this$static.selectedTree = selectedTree;\n}\n\nfunction MaterialTree(){\n  MaterialWidget_0.call(this, $doc.createElement('div'));\n  $setClassName(($clinit_DOM() , this.element), 'tree');\n}\n\ndefineClass(1291, 24, $intern_62, MaterialTree);\n_.add_0 = function add_16(child){\n  $add_15(this, child);\n}\n;\n_.onLoad = function onLoad_16(){\n  var w, w$iterator;\n  for (w$iterator = new WidgetCollection$WidgetIterator(this.children_0); w$iterator.index_0 < w$iterator.this$01.size_0;) {\n    w = $next_3(w$iterator);\n    instanceOf(w, 63) && $initTree(this, dynamicCast(w, 63));\n  }\n}\n;\nvar Lgwt_material_design_addins_client_ui_MaterialTree_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialTree', 1291);\nfunction MaterialTree$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1292, 1, $intern_65, MaterialTree$1);\n_.onSelection = function onSelection_0(event_0){\n  var item_0, item$iterator, treeItem;\n  for (item$iterator = new WidgetCollection$WidgetIterator(this.this$01.children_0); item$iterator.index_0 < item$iterator.this$01.size_0;) {\n    item_0 = $next_3(item$iterator);\n    instanceOf(item_0, 63) && $clearItemSelectedStyles(this.this$01, dynamicCast(item_0, 63));\n  }\n  treeItem = dynamicCast(event_0.selectedItem, 63);\n  setStyleName(($clinit_DOM() , treeItem.element), 'selected', true);\n  $setSelectedTree(this.this$01, treeItem);\n}\n;\nvar Lgwt_material_design_addins_client_ui_MaterialTree$1_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialTree/1', 1292);\nfunction $add_16(this$static, child){\n  $add_1(this$static, child, ($clinit_DOM() , this$static.element));\n  instanceOf(child, 63) && $add_35(this$static.treeItemMixin.treeItems, dynamicCast(child, 63));\n}\n\nfunction $addItem_2(this$static, item_0){\n  $addItem_0(this$static.treeItemMixin, item_0);\n}\n\nfunction $setResource_0(this$static, resource){\n  this$static.image = new MaterialImage;\n  $setResource_1(this$static.image, resource);\n  $add_16(this$static, this$static.image);\n}\n\nfunction $setText_4(this$static, text_0){\n  this$static.span_0 = new Span;\n  this$static.span_0.setText(text_0);\n}\n\nfunction MaterialTreeItem(){\n  AbstractIconButton.call(this);\n  this.divHeader = new MaterialWidget_0($doc.createElement('div'));\n  this.treeItemMixin = new TreeItemMixin(this);\n  $setClassName(($clinit_DOM() , this.element), 'tree-item');\n  $setStyleName(this.divHeader, 'tree-header');\n  $add_16(this, this.divHeader);\n}\n\ndefineClass(63, 181, $intern_91, MaterialTreeItem);\n_.add_0 = function add_17(child){\n  $add_16(this, child);\n}\n;\n_.createElement_0 = function createElement_0(){\n  return $doc.createElement('div');\n}\n;\n_.onLoad = function onLoad_17(){\n  !!this.image && this.divHeader.add_0(this.image);\n  this.divHeader.add_0(this.icon_0);\n  this.divHeader.add_0(this.span_0);\n  $addDomHandler(this.divHeader, new MaterialTreeItem$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));\n}\n;\nvar Lgwt_material_design_addins_client_ui_MaterialTreeItem_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialTreeItem', 63);\nfunction MaterialTreeItem$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1342, 1, $intern_64, MaterialTreeItem$1);\n_.onClick = function onClick_7(event_0){\n  $initTreeItem(this.this$01.treeItemMixin);\n}\n;\nvar Lgwt_material_design_addins_client_ui_MaterialTreeItem$1_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialTreeItem/1', 1342);\nfunction $setTooltip(this$static, tooltip){\n  !this$static.tooltip_0 && (this$static.tooltip_0 = new MaterialTooltip_0(this$static.uiObject));\n  $setText_8(this$static.tooltip_0, tooltip);\n}\n\nfunction TooltipMixin(uiObject){\n  AbstractMixin_0.call(this, uiObject);\n}\n\ndefineClass(294, 108, {}, TooltipMixin);\nvar Lgwt_material_design_client_base_mixin_TooltipMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'TooltipMixin', 294);\nfunction $setText_8(this$static, text_0){\n  this$static.text_0 = text_0;\n  $setAttribute($getElement(this$static.widget), 'data-tooltip', text_0);\n}\n\nfunction MaterialTooltip_0(w){\n  $$init_2(this);\n  $setWidget_4(this, w);\n}\n\ndefineClass(144, 1, $intern_77, MaterialTooltip_0);\nfunction $onAddModal(this$static){\n  animate(($clinit_DOM() , this$static.btnAdd.element), this$static.addOverlay.element);\n}\n\nfunction $onCancelModal(this$static){\n  reverseAnimate(($clinit_DOM() , this$static.btnAdd.element), this$static.addOverlay.element);\n}\n\nfunction $onDeleteModal(this$static){\n  $removeFromTree(this$static.docTree.selectedTree.treeItemMixin);\n  reverseAnimate(($clinit_DOM() , this$static.btnAdd.element), this$static.addOverlay.element);\n}\n\nfunction $onFinishModal(this$static){\n  var item_0;\n  item_0 = new MaterialTreeItem;\n  $setText_4(item_0, $getText(this$static.txtName.valueBoxBase));\n  $setIconType(item_0, ($clinit_IconType() , FOLDER));\n  $setIconColor(item_0.icon_0, 'blue');\n  $addItem_2(this$static.docTree.selectedTree, item_0);\n  reverseAnimate(($clinit_DOM() , this$static.btnAdd.element), this$static.addOverlay.element);\n}\n\nfunction TreeView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_5(new TreeView_BinderImpl$Widgets(this)));\n  $addHandler_0(this.docTree, new TreeView$1, TYPE_15?TYPE_15:(TYPE_15 = new GwtEvent$Type));\n  $addHandler_0(this.docTree, new TreeView$2, (!TYPE_16 && (TYPE_16 = new GwtEvent$Type) , TYPE_16));\n  $addHandler_0(this.docTree, new TreeView$3(this), (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18));\n}\n\ndefineClass(854, 59, $intern_56, TreeView);\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView', 854);\nfunction TreeView$1(){\n}\n\ndefineClass(855, 1, $intern_48, TreeView$1);\n_.onClose = function onClose_3(event_0){\n  fireToast('Closed : ' + dynamicCast(event_0.target_0, 63).span_0.getText());\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView/1', 855);\nfunction TreeView$2(){\n}\n\ndefineClass(856, 1, $intern_81, TreeView$2);\n_.onOpen = function onOpen_1(event_0){\n  fireToast('Opened : ' + dynamicCast(event_0.target_0, 63).span_0.getText());\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView/2', 856);\nfunction TreeView$3(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(857, 1, $intern_65, TreeView$3);\n_.onSelection = function onSelection_3(event_0){\n  $setVisible_0(this.this$01.btnAdd, true);\n  $setVisible_0(this.this$01.btnDelete, true);\n  fireToast('Selected : ' + dynamicCast(event_0.selectedItem, 63).span_0.getText());\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView/3', 857);\nfunction TreeViewPresenter(eventBus, view, proxy){\n  $clinit_TreeViewPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(654, 56, $intern_55, TreeViewPresenter);\n_.onReveal = function onReveal_16(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Material Tree', 'MaterialTree is a component that wraps all the tree items that provide lists of event handlers like open/close and selection event.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeViewPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeViewPresenter', 654);\nfunction TreeView_BinderImpl(){\n}\n\ndefineClass(1141, 1, {}, TreeView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView_BinderImpl', 1141);\nfunction $build_f_MaterialPanel1_5(this$static){\n  var f_MaterialPanel1, f_MaterialTitle2, f_MaterialRow3, addOverlay, txtName, f_MaterialRow21, f_MaterialTitle22, f_PrettyPre23, f_MaterialTitle24, f_PrettyPre25, f_MaterialTitle26, f_PrettyPre27, f_MaterialTitle28, f_PrettyPre29, f_MaterialColumn4, f_MaterialPanel5, f_MaterialLabel6, btnCollapse, btnExpand, btnDelete, btnAdd, docTree, f_MaterialTreeItem7, f_MaterialTreeItem8, f_MaterialTreeItem9, f_MaterialTreeItem10, f_MaterialTreeItem11, f_MaterialTreeItem12, f_MaterialTreeItem13, f_MaterialTreeItem17, f_MaterialTreeItem18, f_MaterialTreeItem19, f_MaterialTreeItem20, btnFinish, btnCancel, sb, sb_0, sb_1, sb_2, f_MaterialTreeItem14, f_MaterialTreeItem15, f_MaterialTreeItem16;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Introduction') , $setText_9(f_MaterialTitle2.paragraph, 'Tree View component requires MaterialTree and MaterialTreeItem to build the component.') , f_MaterialTitle2));\n  $add_13(f_MaterialPanel1, (f_MaterialRow3 = new MaterialRow , $add_13(f_MaterialRow3, (f_MaterialColumn4 = new MaterialColumn , $add_13(f_MaterialColumn4, (f_MaterialPanel5 = new MaterialPanel , $add_13(f_MaterialPanel5, (f_MaterialLabel6 = new MaterialLabel , $setFontWeight(f_MaterialLabel6, ($clinit_Style$FontWeight() , BOLD)) , $setInnerHTML(($clinit_DOM() , f_MaterialLabel6.element), 'FOLDERS') , $setTextColor_0(f_MaterialLabel6.colorsMixin, 'white') , $setFloat(f_MaterialLabel6, ($clinit_Style$Float() , LEFT)) , f_MaterialLabel6)) , $add_13(f_MaterialPanel5, (btnCollapse = new MaterialIcon , $setWaves(btnCollapse, ($clinit_WavesType() , DEFAULT_7)) , $setTextColor_0(btnCollapse.colorsMixin, 'white') , $setOn((!btnCollapse.circleMixin && (btnCollapse.circleMixin = new ToggleStyleMixin(btnCollapse, 'circle')) , btnCollapse.circleMixin), true) , $setFloat(btnCollapse, RIGHT) , $setIconType_3(btnCollapse, ($clinit_IconType() , VERTICAL_ALIGN_CENTER)) , $setTooltip((!btnCollapse.tooltipMixin && (btnCollapse.tooltipMixin = new TooltipMixin(btnCollapse)) , btnCollapse.tooltipMixin), 'Collapse') , $addDomHandler(btnCollapse, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , btnCollapse)) , $add_13(f_MaterialPanel5, (btnExpand = new MaterialIcon , $setWaves(btnExpand, DEFAULT_7) , $setTextColor_0(btnExpand.colorsMixin, 'white') , $setOn((!btnExpand.circleMixin && (btnExpand.circleMixin = new ToggleStyleMixin(btnExpand, 'circle')) , btnExpand.circleMixin), true) , $setFloat(btnExpand, RIGHT) , $setIconType_3(btnExpand, ZOOM_OUT_MAP) , $setTooltip((!btnExpand.tooltipMixin && (btnExpand.tooltipMixin = new TooltipMixin(btnExpand)) , btnExpand.tooltipMixin), 'Expand') , $addDomHandler(btnExpand, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnExpand)) , $add_13(f_MaterialPanel5, (btnDelete = new MaterialIcon , setVisible(btnDelete.element, false) , $setWaves(btnDelete, DEFAULT_7) , $setTextColor_0(btnDelete.colorsMixin, 'white') , $setOn((!btnDelete.circleMixin && (btnDelete.circleMixin = new ToggleStyleMixin(btnDelete, 'circle')) , btnDelete.circleMixin), true) , $setFloat(btnDelete, RIGHT) , $setIconType_3(btnDelete, DELETE) , $setTooltip((!btnDelete.tooltipMixin && (btnDelete.tooltipMixin = new TooltipMixin(btnDelete)) , btnDelete.tooltipMixin), 'Delete') , $addDomHandler(btnDelete, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_1)) , this$static.owner.btnDelete = btnDelete , btnDelete)) , $add_13(f_MaterialPanel5, (btnAdd = new MaterialIcon , setVisible(btnAdd.element, false) , $setWaves(btnAdd, DEFAULT_7) , $setTextColor_0(btnAdd.colorsMixin, 'white') , $setOn((!btnAdd.circleMixin && (btnAdd.circleMixin = new ToggleStyleMixin(btnAdd, 'circle')) , btnAdd.circleMixin), true) , $setFloat(btnAdd, RIGHT) , $setIconType_3(btnAdd, ADD) , $setTooltip((!btnAdd.tooltipMixin && (btnAdd.tooltipMixin = new TooltipMixin(btnAdd)) , btnAdd.tooltipMixin), 'Add') , $addDomHandler(btnAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , this$static.owner.btnAdd = btnAdd , btnAdd)) , f_MaterialPanel5.setHeight_0('40px') , $setBackgroundColor_0((!f_MaterialPanel5.colorsMixin_0 && (f_MaterialPanel5.colorsMixin_0 = new ColorsMixin(f_MaterialPanel5)) , f_MaterialPanel5.colorsMixin_0), 'blue') , f_MaterialPanel5.element.style['padding'] = ($clinit_Style$Unit() , '8.0px') , f_MaterialPanel5)) , $add_13(f_MaterialColumn4, (docTree = new MaterialTree , $add_15(docTree, (f_MaterialTreeItem7 = new MaterialTreeItem , $add_16(f_MaterialTreeItem7, (f_MaterialTreeItem8 = new MaterialTreeItem , $add_16(f_MaterialTreeItem8, (f_MaterialTreeItem9 = new MaterialTreeItem , f_MaterialTreeItem9.span_0 = new Span , f_MaterialTreeItem9.span_0.setText('flash.jpg') , $setResource_0(f_MaterialTreeItem9, ($clinit_MaterialResources_default_InlineClientBundleGenerator$flashInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator_0() , flash)) , $setIconColor(f_MaterialTreeItem9.icon_0, 'blue') , f_MaterialTreeItem9)) , $add_16(f_MaterialTreeItem8, (f_MaterialTreeItem10 = new MaterialTreeItem , f_MaterialTreeItem10.span_0 = new Span , f_MaterialTreeItem10.span_0.setText('superman.jpg') , $setResource_0(f_MaterialTreeItem10, ($clinit_MaterialResources_default_InlineClientBundleGenerator$supermanInitializer() , superman)) , $setIconColor(f_MaterialTreeItem10.icon_0, 'blue') , f_MaterialTreeItem10)) , $add_16(f_MaterialTreeItem8, (f_MaterialTreeItem11 = new MaterialTreeItem , f_MaterialTreeItem11.span_0 = new Span , f_MaterialTreeItem11.span_0.setText('batman.jpg') , $setResource_0(f_MaterialTreeItem11, ($clinit_MaterialResources_default_InlineClientBundleGenerator$batmanInitializer() , batman)) , $setIconColor(f_MaterialTreeItem11.icon_0, 'blue') , f_MaterialTreeItem11)) , f_MaterialTreeItem8.span_0 = new Span , f_MaterialTreeItem8.span_0.setText('Images') , $setIconColor(f_MaterialTreeItem8.icon_0, 'blue') , $setIconType(f_MaterialTreeItem8, IMAGE) , f_MaterialTreeItem8)) , $add_16(f_MaterialTreeItem7, (f_MaterialTreeItem12 = new MaterialTreeItem , $add_16(f_MaterialTreeItem12, (f_MaterialTreeItem13 = new MaterialTreeItem , $add_16(f_MaterialTreeItem13, (f_MaterialTreeItem14 = new MaterialTreeItem , f_MaterialTreeItem14.span_0 = new Span , f_MaterialTreeItem14.span_0.setText('video_1.png') , $setIconColor(f_MaterialTreeItem14.icon_0, 'red') , $setIconType(f_MaterialTreeItem14, VIDEOCAM) , f_MaterialTreeItem14)) , $add_16(f_MaterialTreeItem13, (f_MaterialTreeItem15 = new MaterialTreeItem , f_MaterialTreeItem15.span_0 = new Span , f_MaterialTreeItem15.span_0.setText('video_2.png') , $setIconColor(f_MaterialTreeItem15.icon_0, 'red') , $setIconType(f_MaterialTreeItem15, VIDEOCAM) , f_MaterialTreeItem15)) , $add_16(f_MaterialTreeItem13, (f_MaterialTreeItem16 = new MaterialTreeItem , f_MaterialTreeItem16.span_0 = new Span , f_MaterialTreeItem16.span_0.setText('video_3.png') , $setIconColor(f_MaterialTreeItem16.icon_0, 'red') , $setIconType(f_MaterialTreeItem16, VIDEOCAM) , f_MaterialTreeItem16)) , f_MaterialTreeItem13.span_0 = new Span , f_MaterialTreeItem13.span_0.setText('Animations') , $setIconColor(f_MaterialTreeItem13.icon_0, 'blue') , $setIconType(f_MaterialTreeItem13, MUSIC_VIDEO) , f_MaterialTreeItem13)) , $add_16(f_MaterialTreeItem12, (f_MaterialTreeItem17 = new MaterialTreeItem , f_MaterialTreeItem17.span_0 = new Span , f_MaterialTreeItem17.span_0.setText('Tutorials') , $setIconColor(f_MaterialTreeItem17.icon_0, 'blue') , $setIconType(f_MaterialTreeItem17, MUSIC_VIDEO) , f_MaterialTreeItem17)) , $add_16(f_MaterialTreeItem12, (f_MaterialTreeItem18 = new MaterialTreeItem , f_MaterialTreeItem18.span_0 = new Span , f_MaterialTreeItem18.span_0.setText('Funny') , $setIconColor(f_MaterialTreeItem18.icon_0, 'blue') , $setIconType(f_MaterialTreeItem18, MUSIC_VIDEO) , f_MaterialTreeItem18)) , f_MaterialTreeItem12.span_0 = new Span , f_MaterialTreeItem12.span_0.setText('Videos') , $setIconColor(f_MaterialTreeItem12.icon_0, 'blue') , $setIconType(f_MaterialTreeItem12, VIDEO_COLLECTION) , f_MaterialTreeItem12)) , f_MaterialTreeItem7.span_0 = new Span , f_MaterialTreeItem7.span_0.setText('Documents') , $setIconColor(f_MaterialTreeItem7.icon_0, 'blue') , $setIconType(f_MaterialTreeItem7, FOLDER) , f_MaterialTreeItem7)) , $add_15(docTree, (f_MaterialTreeItem19 = new MaterialTreeItem , f_MaterialTreeItem19.span_0 = new Span , f_MaterialTreeItem19.span_0.setText('Shared Document') , $setIconColor(f_MaterialTreeItem19.icon_0, 'blue') , $setIconType(f_MaterialTreeItem19, FOLDER_SHARED) , f_MaterialTreeItem19)) , $add_15(docTree, (f_MaterialTreeItem20 = new MaterialTreeItem , f_MaterialTreeItem20.span_0 = new Span , f_MaterialTreeItem20.span_0.setText('Trash') , $setIconColor(f_MaterialTreeItem20.icon_0, 'blue') , $setIconType(f_MaterialTreeItem20, FOLDER) , f_MaterialTreeItem20)) , this$static.owner.docTree = docTree , docTree)) , f_MaterialColumn4.element.style['height'] = '500px' , $setShadow((!f_MaterialColumn4.shadowMixin && (f_MaterialColumn4.shadowMixin = new ShadowMixin(f_MaterialColumn4)) , f_MaterialColumn4.shadowMixin), 1) , $setOverflow(f_MaterialColumn4, ($clinit_Style$Overflow() , AUTO_0)) , $setGrid((!f_MaterialColumn4.gridMixin_0 && (f_MaterialColumn4.gridMixin_0 = new GridMixin(f_MaterialColumn4)) , f_MaterialColumn4.gridMixin_0), 'l4 m6 s12') , f_MaterialColumn4.element.style['padding'] = '0.0px' , f_MaterialColumn4)) , f_MaterialRow3));\n  $add_13(f_MaterialPanel1, (addOverlay = new MaterialOverlay , $add_13(addOverlay, (txtName = new MaterialTextBox , txtName.type_0 != ($clinit_InputType() , SEARCH_1)?$setText_7(txtName.lblName, 'Folder Name'):$setAttribute($getElement(txtName.valueBoxBase), 'placeholder', 'Folder Name') , this$static.owner.txtName = txtName , txtName)) , $add_13(addOverlay, (f_MaterialRow21 = new MaterialRow , $add_13(f_MaterialRow21, (btnFinish = new MaterialButton , btnFinish.span_1.setText('Add') , $add_13(btnFinish, btnFinish.span_1) , $setTextColor_0((!btnFinish.colorsMixin_0 && (btnFinish.colorsMixin_0 = new ColorsMixin(btnFinish)) , btnFinish.colorsMixin_0), 'blue') , $setType_0(btnFinish, ($clinit_ButtonType() , FLAT)) , $setFloat(btnFinish, RIGHT) , $addDomHandler(btnFinish, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, (null , TYPE_1)) , btnFinish)) , $add_13(f_MaterialRow21, (btnCancel = new MaterialButton , btnCancel.span_1.setText('Cancel') , $add_13(btnCancel, btnCancel.span_1) , $setType_0(btnCancel, FLAT) , $setFloat(btnCancel, RIGHT) , $addDomHandler(btnCancel, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, (null , TYPE_1)) , btnCancel)) , f_MaterialRow21)) , $setStyleName_0(addOverlay, ($build_style() , 'BFFVW2C-m-a'), true) , addOverlay.element.style['height'] = '150px' , $setBackgroundColor_0((!addOverlay.colorsMixin_0 && (addOverlay.colorsMixin_0 = new ColorsMixin(addOverlay)) , addOverlay.colorsMixin_0), 'white') , $setVisibility(addOverlay, ($clinit_Style$Visibility() , HIDDEN_1)) , $setShadow((!addOverlay.shadowMixin && (addOverlay.shadowMixin = new ShadowMixin(addOverlay)) , addOverlay.shadowMixin), 2) , addOverlay.element.style['width'] = '400px' , $cssSetOpacity(addOverlay.element.style, 0) , addOverlay.element.style['padding'] = '20.0px' , this$static.owner.addOverlay = addOverlay , addOverlay));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle22 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle22.header), 'Markup') , $setText_9(f_MaterialTitle22.paragraph, 'MaterialTree must have only MaterialTreeItem children to create the tree view component.') , f_MaterialTitle22));\n  $add_13(f_MaterialPanel1, (f_PrettyPre23 = new PrettyPre , $setHTML(f_PrettyPre23, (sb = new StringBuilder , sb.string += '\\u2003&lt;m.addins:MaterialTree ui:field=\"docTree\"&gt;<br> \\u2003&lt;m.addins:MaterialTreeItem iconType=\"FOLDER\" iconColor=\"blue\" text=\"Documents\"&gt;<br> \\u2003\\u2003&lt;m.addins:MaterialTreeItem iconType=\"IMAGE\" iconColor=\"blue\" text=\"Images\"&gt;<br> \\u2003\\u2003\\u2003&lt;m.addins:MaterialTreeItem resource=\"{res.flash}\" iconColor=\"blue\" text=\"flash.jpg\" /&gt;<br> \\u2003\\u2003\\u2003&lt;m.addins:MaterialTreeItem resource=\"{res.superman}\" iconColor=\"blue\" text=\"superman.jpg\" /&gt;<br> \\u2003\\u2003\\u2003&lt;m.addins:MaterialTreeItem resource=\"{res.batman}\" iconColor=\"blue\" text=\"batman.jpg\" /&gt;<br> \\u2003\\u2003&lt;/m.addins:MaterialTreeItem&gt;<br> \\u2003\\u2003&lt;m.addins:MaterialTreeItem iconType=\"VIDEO_COLLECTION\" iconColor=\"blue\" text=\"Videos\"&gt;<br> \\u2003\\u2003\\u2003&lt;m.addins:MaterialTreeItem iconType=\"MUSIC_VIDEO\" iconColor=\"blue\" text=\"Animations\"&gt;<br> \\u2003\\u2003\\u2003\\u2003&lt;m.addins:MaterialTreeItem iconType=\"VIDEOCAM\" iconColor=\"red\" text=\"video_1.png\"/&gt;<br> \\u2003\\u2003\\u2003\\u2003&lt;m.addins:MaterialTreeItem iconType=\"VIDEOCAM\" iconColor=\"red\" text=\"video_2.png\"/&gt;<br> \\u2003\\u2003\\u2003\\u2003&lt;m.addins:MaterialTreeItem iconType=\"VIDEOCAM\" iconColor=\"red\" text=\"video_3.png\"/&gt;<br> \\u2003\\u2003\\u2003&lt;/m.addins:MaterialTreeItem&gt;<br> \\u2003\\u2003\\u2003&lt;m.addins:MaterialTreeItem iconType=\"MUSIC_VIDEO\" iconColor=\"blue\" text=\"Tutorials\" /&gt;<br> \\u2003\\u2003\\u2003&lt;m.addins:MaterialTreeItem iconType=\"MUSIC_VIDEO\" iconColor=\"blue\" text=\"Funny\" /&gt;<br> \\u2003\\u2003&lt;/m.addins:MaterialTreeItem&gt;<br> \\u2003&lt;/m.addins:MaterialTreeItem&gt;<br> \\u2003&lt;m.addins:MaterialTreeItem iconType=\"FOLDER_SHARED\" iconColor=\"blue\" text=\"Shared Document\" /&gt;<br> \\u2003&lt;m.addins:MaterialTreeItem iconType=\"FOLDER\" iconColor=\"blue\" text=\"Trash\" /&gt;<br> &lt;/m.addins:MaterialTree&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre23.element, 'lang-xml', true) , setStyleName(f_PrettyPre23.element, 'z-depth-1', true) , f_PrettyPre23));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle24 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle24.header), 'Open / Close Handlers') , f_MaterialTitle24));\n  $add_13(f_MaterialPanel1, (f_PrettyPre25 = new PrettyPre , $setHTML(f_PrettyPre25, (sb_0 = new StringBuilder , sb_0.string += '\\u2003docTree.addCloseHandler(new CloseHandler&lt;MaterialTreeItem&gt;() {<br> \\u2003@Override<br> \\u2003\\u2003public void onClose(CloseEvent&lt;MaterialTreeItem&gt; event) {<br> \\u2003\\u2003// event.getTraget() returns MaterialTreeItem<br> \\u2003\\u2003MaterialToast.fireToast(\"Closed : \" + event.getTarget().getText());<br> \\u2003}<br> });<br><br>  docTree.addOpenHandler(new OpenHandler&lt;MaterialTreeItem&gt;() {<br> \\u2003@Override<br> \\u2003\\u2003public void onOpen(OpenEvent&lt;MaterialTreeItem&gt; event) {<br> \\u2003\\u2003// event.getTraget() returns MaterialTreeItem<br> \\u2003\\u2003MaterialToast.fireToast(\"Opened : \" + event.getTarget().getText());<br> \\u2003}<br> });' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre25.element, 'lang-java', true) , setStyleName(f_PrettyPre25.element, 'z-depth-1', true) , f_PrettyPre25));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle26 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle26.header), 'Collapse / Expand Handlers') , f_MaterialTitle26));\n  $add_13(f_MaterialPanel1, (f_PrettyPre27 = new PrettyPre , $setHTML(f_PrettyPre27, (sb_1 = new StringBuilder , sb_1.string += '\\u2003@UiHandler(\"btnCollapse\")<br> void onCollapseTree(ClickEvent e) {<br> \\u2003docTree.collapse();<br> }<br><br> @UiHandler(\"btnExpand\")<br> void onExpandTree(ClickEvent e) {<br> \\u2003docTree.expand();<br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre27.element, 'lang-java', true) , setStyleName(f_PrettyPre27.element, 'z-depth-1', true) , f_PrettyPre27));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle28 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle28.header), 'Add/Remove/Insert methods') , f_MaterialTitle28));\n  $add_13(f_MaterialPanel1, (f_PrettyPre29 = new PrettyPre , $setHTML(f_PrettyPre29, (sb_2 = new StringBuilder , sb_2.string += '// For adding an item<br> docTree.getSelectedTree().addItem(item);<br><br> // For removing an item<br>  docTree.getSelectedTree().removeItem(item);<br><br> // For inserting an item<br> docTree.getSelectedTree().insertItem(item, 3);<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre29.element, 'lang-java', true) , setStyleName(f_PrettyPre29.element, 'z-depth-1', true) , f_PrettyPre29));\n  return f_MaterialPanel1;\n}\n\nfunction $build_style(){\n  var style;\n  style = (new TreeView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_TreeView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_6);\n  $ensureInjected_11(style);\n  return style;\n}\n\nfunction TreeView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new TreeView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new TreeView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new TreeView_BinderImpl$Widgets$3(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new TreeView_BinderImpl$Widgets$4(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new TreeView_BinderImpl$Widgets$5(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new TreeView_BinderImpl$Widgets$6(this);\n  this.owner = owner;\n  $build_style();\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n}\n\ndefineClass(1142, 1, {}, TreeView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView_BinderImpl/Widgets', 1142);\nfunction TreeView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1143, 1, $intern_64, TreeView_BinderImpl$Widgets$1);\n_.onClick = function onClick_69(event_0){\n  $collapse_0(this.this$11.owner.docTree);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView_BinderImpl/Widgets/1', 1143);\nfunction TreeView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1144, 1, $intern_64, TreeView_BinderImpl$Widgets$2);\n_.onClick = function onClick_70(event_0){\n  $expand_0(this.this$11.owner.docTree);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView_BinderImpl/Widgets/2', 1144);\nfunction TreeView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1145, 1, $intern_64, TreeView_BinderImpl$Widgets$3);\n_.onClick = function onClick_71(event_0){\n  $onAddModal(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView_BinderImpl/Widgets/3', 1145);\nfunction TreeView_BinderImpl$Widgets$4(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1146, 1, $intern_64, TreeView_BinderImpl$Widgets$4);\n_.onClick = function onClick_72(event_0){\n  $onDeleteModal(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView_BinderImpl/Widgets/4', 1146);\nfunction TreeView_BinderImpl$Widgets$5(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1147, 1, $intern_64, TreeView_BinderImpl$Widgets$5);\n_.onClick = function onClick_73(event_0){\n  $onFinishModal(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView_1BinderImpl$Widgets$5_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView_BinderImpl/Widgets/5', 1147);\nfunction TreeView_BinderImpl$Widgets$6(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1148, 1, $intern_64, TreeView_BinderImpl$Widgets$6);\n_.onClick = function onClick_74(event_0){\n  $onCancelModal(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView_1BinderImpl$Widgets$6_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView_BinderImpl/Widgets/6', 1148);\nfunction TreeView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1470, 1, {}, TreeView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_6;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1470);\nfunction $ensureInjected_11(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '.BFFVW2C-m-a{margin:auto}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction TreeView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1471, 1, {}, TreeView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_28(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_addins_treeview_TreeView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.treeview', 'TreeView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1471);\nfunction $clinit_TreeView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_TreeView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_6 = new TreeView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$treeview$TreeView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$treeview$TreeView$_annotation$$none$$) {\n    result = new TreeView(new TreeView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$treeview$TreeView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$treeview$TreeView$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$treeview$TreeViewPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$treeview$TreeViewPresenter$_annotation$$none$$) {\n    result = new TreeViewPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$treeview$TreeView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$treeview$TreeViewPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$treeview$TreeViewPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$treeview$TreeViewPresenter$_annotation$$none$$;\n}\n\ndefineClass(566, 1, $intern_80);\n_.onSuccess_0 = function onSuccess_10(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$treeview$TreeViewPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(11);\n\n//# sourceURL=gwtmaterialdemo-11.js\n")
