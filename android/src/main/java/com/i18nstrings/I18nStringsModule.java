package com.i18nstrings;

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
  public void getAvailableLocales(Promise promise) {
    try {
      Locale[] availableLocales = Locale.getAvailableLocales();
      ArrayList<String> locales = new ArrayList<>();
      
      for (Locale locale : availableLocales) {
        // Return JavaScript friendly locales
        String formattedLocale = locale.toString().replaceAll("_", "-")
        locales.add(formattedLocale);
      }

      promise.resolve(locales);
    } catch (IllegalViewOperationException error) {
      promise.reject(E_LAYOUT_ERROR, error);
    }
  }
}
