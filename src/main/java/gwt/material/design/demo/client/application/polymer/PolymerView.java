package gwt.material.design.demo.client.application.polymer;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import com.vaadin.polymer.paper.widget.PaperButton;
import com.vaadin.polymer.paper.widget.PaperDialog;

import javax.inject.Inject;


public class PolymerView extends ViewImpl implements PolymerPresenter.MyView {
    interface Binder extends UiBinder<Widget, PolymerView> {
    }

    @UiField
    PaperDialog animatedDlg;

    @UiField
    PaperButton animatedBtn;


    @Inject
    PolymerView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        animatedBtn.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
                animatedDlg.open();
            }
        });
    }
}
