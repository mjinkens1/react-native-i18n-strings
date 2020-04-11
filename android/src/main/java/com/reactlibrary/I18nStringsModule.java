package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.util.ArrayList;
import java.util.Locale;

public class I18nStringsModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private static final String E_LAYOUT_ERROR = "E_LAYOUT_ERROR";

    I18nStringsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "I18nStrings";
    }

    @ReactMethod
    public void getAllLocales(Promise promise) {
        try {
            Locale[] locales = Locale.getAvailableLocales();
            ArrayList<String> localCountries = new ArrayList<>();
            for(Locale locale:locales)
            {
                localCountries.add(locale.getDisplayLanguage());
            }

            String[] languages = localCountries.toArray(new String[localCountries.size()]);

            promise.resolve(languages);
        } catch(IllegalViewOperationException error) {
            promise.reject(E_LAYOUT_ERROR, error);
        }
    }
}
