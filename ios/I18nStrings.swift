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
    func getAvailableLocales(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
        let locales = NSLocale.availableLocaleIdentifiers
        // Return JavaScript friendly locales
        let formattedLocales = locales.map {
            $0.replacingOccurrences(of: "_", with: "-")
        }
        
        resolve(formattedLocales)
    }
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
      return false
    }
}
