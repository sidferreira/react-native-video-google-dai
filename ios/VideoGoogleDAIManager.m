#import "VideoGoogleDAIManager.h"
#import "VideoGoogleDAI.h"
#import <React/RCTBridge.h>
#import <React/RCTUIManager.h>
#import <AVFoundation/AVFoundation.h>

@implementation RCTVideoGoogleDAIManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [[RCTVideoGoogleDAI alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

- (dispatch_queue_t)methodQueue
{
    return self.bridge.uiManager.methodQueue;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

@end
