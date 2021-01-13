//
//  OpenTokPlugin.h
//
//  Copyright (c) 2012 TokBox. All rights reserved.
//  Please see the LICENSE included with this distribution for details.
//

#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>
#import <UIKit/UIKit.h>
#import <OpenTok/OpenTok.h>
#import "UIView+Category.h"

@interface OpenTokPlugin : CDVPlugin <OTSessionDelegate, OTPublisherDelegate, OTPublisherKitAudioLevelDelegate, OTPublisherKitNetworkStatsDelegate, OTSubscriberKitDelegate, OTSubscriberKitAudioLevelDelegate, OTSubscriberKitNetworkStatsDelegate>
@property(nonatomic, copy) NSString* exceptionId;

// OpenTok Logging
- (void)logOT:(NSString*)connectionId;

// Helpers
- (NSString*)getBase64PNGFromUIView:(UIView *)view;

// Tokbox Library Functions
- (void)addEvent:(CDVInvokedUrlCommand*)command;

// TB
- (void)initPublisher:(CDVInvokedUrlCommand*)command;
- (void)initSession:(CDVInvokedUrlCommand*)command;
- (void)exceptionHandler:(CDVInvokedUrlCommand*)command;
- (void)updateView:(CDVInvokedUrlCommand*)command;

// Publisher
- (void)publishAudio:(CDVInvokedUrlCommand*)command;
- (void)publishVideo:(CDVInvokedUrlCommand*)command;
- (void)setCameraPosition:(CDVInvokedUrlCommand*)command;
- (void)destroyPublisher:(CDVInvokedUrlCommand*)command;
- (void)getImgData:(CDVInvokedUrlCommand*)command;

// Session
- (void)connect:(CDVInvokedUrlCommand*)command;
- (void)disconnect:(CDVInvokedUrlCommand*)command;
- (void)publish:(CDVInvokedUrlCommand*)command;
- (void)unpublish:(CDVInvokedUrlCommand*)command;
- (void)subscribe:(CDVInvokedUrlCommand*)command;
- (void)unsubscribe:(CDVInvokedUrlCommand*)command;
- (void)signal:(CDVInvokedUrlCommand*)command;

// Delegates

// Subscriber delegates
- (void)subscriberDidConnectToStream:(OTSubscriberKit*)sub;
- (void)subscriberDidDisconnectFromStream:(OTSubscriberKit*)sub;
- (void)subscriber:(OTSubscriber*)sub didFailWithError:(OTError*)error;
- (void)subscriberVideoDataReceived:(OTSubscriber*)sub;
- (void)subscriberVideoDisabled:(OTSubscriberKit*)sub reason:(OTSubscriberVideoEventReason)reason;
- (void)subscriberVideoDisableWarning:(OTSubscriberKit*)sub;
- (void)subscriberVideoDisableWarningLifted:(OTSubscriberKit*)sub;
- (void)subscriberVideoEnabled:(OTSubscriberKit*)sub reason:(OTSubscriberVideoEventReason)reason;

- (NSString*)validateReason:(OTSubscriberVideoEventReason)reason;

// HouseKeeping



- (void)TBTesting:(CDVInvokedUrlCommand*)command;

@end
