//
//  I18nStrings.swift
//  I18nStrings
//
//  Created by Matthew Jinkens on 4/11/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

@objc(I18nStrings)
class I18nStrings: NSObject {

    @objc
    func getAllLocales(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
        let locales = NSLocale.availableLocaleIdentifiers
        resolve(locales)
    }
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
      return false
    }
}
