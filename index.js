/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).



const skillData = [
    {
        cafe: "CAFE",
        suggestion: "I would reccomend Urban Beans, Grand Central Coffee, or Mount Hebron Cafe"
    },
    {
        zoot: "ZOOT",
        suggestion: "I got you bro, hit up my boy Toe"
    },
    {
        state: "ALABAMA",
        suggestion: "My suggestion for Alabama"
    }
];

const skillDataa = [
    
    {
        zoot: "ZOOT",
        suggestion: "hit up my boy Toe for that good zoot"
        
    
}
];


const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', 'Welcome to your Airbnb. I am your personal host, can you say: Hello?');
    },
    'GeneralGreeting': function () {
        this.emit(':tell', 'Thank you for booking your stay. I am here to help and answer any questions. I can recommend great places to eat or plan a fun night out.  ');
    },
  'CafeSuggestion': function() {
      var cafeSlot = this.event.request.intent.slots.cafe.value;
      this.emit(':tell', getSuggestion(skillData, 'cafe', cafeSlot.toUpperCase()).suggestion);
    },
  'ZootSuggestion': function() {
      var zootSlot = this.event.request.intent.slots.zoot.value;
      this.emit(':tell', getSuggestion(skillDataa, 'zoot', zootSlot.toUpperCase()).suggestion);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};

function getSuggestion(data, propName, propValue) {
  for (var i=0; i < data.length; i++) {
    if (data[i][propName] == propValue) {
      return data[i];
    }
  }
}
