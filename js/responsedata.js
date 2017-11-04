/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.SC2APIProtocol.ResponseData');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.SC2APIProtocol.AbilityData');
goog.require('proto.SC2APIProtocol.BuffData');
goog.require('proto.SC2APIProtocol.EffectData');
goog.require('proto.SC2APIProtocol.UnitTypeData');
goog.require('proto.SC2APIProtocol.UpgradeData');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.ResponseData.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseData.displayName = 'proto.SC2APIProtocol.ResponseData';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.ResponseData.repeatedFields_ = [1,2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseData.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseData.toObject = function(includeInstance, msg) {
  var f, obj = {
    abilitiesList: jspb.Message.toObjectList(msg.getAbilitiesList(),
    proto.SC2APIProtocol.AbilityData.toObject, includeInstance),
    unitsList: jspb.Message.toObjectList(msg.getUnitsList(),
    proto.SC2APIProtocol.UnitTypeData.toObject, includeInstance),
    upgradesList: jspb.Message.toObjectList(msg.getUpgradesList(),
    proto.SC2APIProtocol.UpgradeData.toObject, includeInstance),
    buffsList: jspb.Message.toObjectList(msg.getBuffsList(),
    proto.SC2APIProtocol.BuffData.toObject, includeInstance),
    effectsList: jspb.Message.toObjectList(msg.getEffectsList(),
    proto.SC2APIProtocol.EffectData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseData}
 */
proto.SC2APIProtocol.ResponseData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseData;
  return proto.SC2APIProtocol.ResponseData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseData}
 */
proto.SC2APIProtocol.ResponseData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SC2APIProtocol.AbilityData;
      reader.readMessage(value,proto.SC2APIProtocol.AbilityData.deserializeBinaryFromReader);
      msg.addAbilities(value);
      break;
    case 2:
      var value = new proto.SC2APIProtocol.UnitTypeData;
      reader.readMessage(value,proto.SC2APIProtocol.UnitTypeData.deserializeBinaryFromReader);
      msg.addUnits(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.UpgradeData;
      reader.readMessage(value,proto.SC2APIProtocol.UpgradeData.deserializeBinaryFromReader);
      msg.addUpgrades(value);
      break;
    case 4:
      var value = new proto.SC2APIProtocol.BuffData;
      reader.readMessage(value,proto.SC2APIProtocol.BuffData.deserializeBinaryFromReader);
      msg.addBuffs(value);
      break;
    case 5:
      var value = new proto.SC2APIProtocol.EffectData;
      reader.readMessage(value,proto.SC2APIProtocol.EffectData.deserializeBinaryFromReader);
      msg.addEffects(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAbilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.SC2APIProtocol.AbilityData.serializeBinaryToWriter
    );
  }
  f = message.getUnitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.SC2APIProtocol.UnitTypeData.serializeBinaryToWriter
    );
  }
  f = message.getUpgradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.SC2APIProtocol.UpgradeData.serializeBinaryToWriter
    );
  }
  f = message.getBuffsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.SC2APIProtocol.BuffData.serializeBinaryToWriter
    );
  }
  f = message.getEffectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.SC2APIProtocol.EffectData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AbilityData abilities = 1;
 * @return {!Array.<!proto.SC2APIProtocol.AbilityData>}
 */
proto.SC2APIProtocol.ResponseData.prototype.getAbilitiesList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.AbilityData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.AbilityData, 1));
};


/** @param {!Array.<!proto.SC2APIProtocol.AbilityData>} value */
proto.SC2APIProtocol.ResponseData.prototype.setAbilitiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.SC2APIProtocol.AbilityData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.AbilityData}
 */
proto.SC2APIProtocol.ResponseData.prototype.addAbilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.SC2APIProtocol.AbilityData, opt_index);
};


proto.SC2APIProtocol.ResponseData.prototype.clearAbilitiesList = function() {
  this.setAbilitiesList([]);
};


/**
 * repeated UnitTypeData units = 2;
 * @return {!Array.<!proto.SC2APIProtocol.UnitTypeData>}
 */
proto.SC2APIProtocol.ResponseData.prototype.getUnitsList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.UnitTypeData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.UnitTypeData, 2));
};


/** @param {!Array.<!proto.SC2APIProtocol.UnitTypeData>} value */
proto.SC2APIProtocol.ResponseData.prototype.setUnitsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.SC2APIProtocol.UnitTypeData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.UnitTypeData}
 */
proto.SC2APIProtocol.ResponseData.prototype.addUnits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.SC2APIProtocol.UnitTypeData, opt_index);
};


proto.SC2APIProtocol.ResponseData.prototype.clearUnitsList = function() {
  this.setUnitsList([]);
};


/**
 * repeated UpgradeData upgrades = 3;
 * @return {!Array.<!proto.SC2APIProtocol.UpgradeData>}
 */
proto.SC2APIProtocol.ResponseData.prototype.getUpgradesList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.UpgradeData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.UpgradeData, 3));
};


/** @param {!Array.<!proto.SC2APIProtocol.UpgradeData>} value */
proto.SC2APIProtocol.ResponseData.prototype.setUpgradesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.SC2APIProtocol.UpgradeData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.UpgradeData}
 */
proto.SC2APIProtocol.ResponseData.prototype.addUpgrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.SC2APIProtocol.UpgradeData, opt_index);
};


proto.SC2APIProtocol.ResponseData.prototype.clearUpgradesList = function() {
  this.setUpgradesList([]);
};


/**
 * repeated BuffData buffs = 4;
 * @return {!Array.<!proto.SC2APIProtocol.BuffData>}
 */
proto.SC2APIProtocol.ResponseData.prototype.getBuffsList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.BuffData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.BuffData, 4));
};


/** @param {!Array.<!proto.SC2APIProtocol.BuffData>} value */
proto.SC2APIProtocol.ResponseData.prototype.setBuffsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.SC2APIProtocol.BuffData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.BuffData}
 */
proto.SC2APIProtocol.ResponseData.prototype.addBuffs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.SC2APIProtocol.BuffData, opt_index);
};


proto.SC2APIProtocol.ResponseData.prototype.clearBuffsList = function() {
  this.setBuffsList([]);
};


/**
 * repeated EffectData effects = 5;
 * @return {!Array.<!proto.SC2APIProtocol.EffectData>}
 */
proto.SC2APIProtocol.ResponseData.prototype.getEffectsList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.EffectData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.EffectData, 5));
};


/** @param {!Array.<!proto.SC2APIProtocol.EffectData>} value */
proto.SC2APIProtocol.ResponseData.prototype.setEffectsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.SC2APIProtocol.EffectData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.EffectData}
 */
proto.SC2APIProtocol.ResponseData.prototype.addEffects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.SC2APIProtocol.EffectData, opt_index);
};


proto.SC2APIProtocol.ResponseData.prototype.clearEffectsList = function() {
  this.setEffectsList([]);
};


