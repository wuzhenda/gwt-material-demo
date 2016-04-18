package gwt.material.design.demo.client.application.showcase.cards;

/*
 * #%L
 * GwtMaterial
 * %%
 * Copyright (C) 2015 - 2016 GwtMaterialDesign
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */


import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import gwt.material.design.client.ui.MaterialCard;
import gwt.material.design.client.ui.MaterialImage;
import gwt.material.design.client.ui.MaterialLabel;
import gwt.material.design.client.ui.MaterialLink;
import gwt.material.design.demo.client.application.dto.Apps;

public class AppCard extends Composite {

    private static AppCardUiBinder uiBinder = GWT.create(AppCardUiBinder.class);

    interface AppCardUiBinder extends UiBinder<Widget, AppCard> {
    }

    @UiField
    MaterialImage imgApp, imgOwner;

    @UiField
    MaterialLabel lblApp, lblOwner;

    @UiField
    MaterialLink lblLink;

    @UiField
    MaterialCard card;

    public AppCard(Apps app) {
        initWidget(uiBinder.createAndBindUi(this));
        imgApp.setUrl(app.getImage());
        imgOwner.setUrl(app.getOwnerImage());
        lblApp.setText(app.getName());
        lblOwner.setText(app.getOwner());
        lblLink.setHref(app.getLink());
        card.setBackgroundColor(app.getColor());
    }
}
