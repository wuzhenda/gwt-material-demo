package gwt.material.design.demo.client.application.polymer;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;

public class PolymerModule extends AbstractPresenterModule {
    @Override
    protected void configure() {
        bindPresenter(PolymerPresenter.class, PolymerPresenter.MyView.class, PolymerView.class, PolymerPresenter.MyProxy.class);
    }
}
