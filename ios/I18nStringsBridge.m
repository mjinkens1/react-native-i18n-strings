#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(I18nStrings, NSObject)
    RCT_EXTERN_METHOD(
        getAvailableLocales: (RCTPromiseResolveBlock)resolve
        rejecter: (RCTPromiseRejectBlock)reject
    )
@end
