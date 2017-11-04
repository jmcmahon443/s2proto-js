/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.SC2APIProtocol.RequestReplayInfo');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


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
proto.SC2APIProtocol.RequestReplayInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_);
};
goog.inherits(proto.SC2APIProtocol.RequestReplayInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestReplayInfo.displayName = 'proto.SC2APIProtocol.RequestReplayInfo';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.SC2APIProtocol.RequestReplayInfo.ReplayCase = {
  REPLAY_NOT_SET: 0,
  REPLAY_PATH: 1,
  REPLAY_DATA: 2
};

/**
 * @return {proto.SC2APIProtocol.RequestReplayInfo.ReplayCase}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getReplayCase = function() {
  return /** @type {proto.SC2APIProtocol.RequestReplayInfo.ReplayCase} */(jspb.Message.computeOneofCase(this, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_[0]));
};



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
proto.SC2APIProtocol.RequestReplayInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestReplayInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestReplayInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestReplayInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    replayPath: jspb.Message.getField(msg, 1),
    replayData: msg.getReplayData_asB64(),
    downloadData: jspb.Message.getField(msg, 3)
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
 * @return {!proto.SC2APIProtocol.RequestReplayInfo}
 */
proto.SC2APIProtocol.RequestReplayInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestReplayInfo;
  return proto.SC2APIProtocol.RequestReplayInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestReplayInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestReplayInfo}
 */
proto.SC2APIProtocol.RequestReplayInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplayPath(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReplayData(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDownloadData(value);
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
proto.SC2APIProtocol.RequestReplayInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestReplayInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestReplayInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestReplayInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string replay_path = 1;
 * @return {string}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getReplayPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.RequestReplayInfo.prototype.setReplayPath = function(value) {
  jspb.Message.setOneofField(this, 1, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestReplayInfo.prototype.clearReplayPath = function() {
  jspb.Message.setOneofField(this, 1, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.hasReplayPath = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes replay_data = 2;
 * @return {string}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getReplayData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes replay_data = 2;
 * This is a type-conversion wrapper around `getReplayData()`
 * @return {string}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getReplayData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReplayData()));
};


/**
 * optional bytes replay_data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReplayData()`
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getReplayData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReplayData()));
};


/** @param {!(string|Uint8Array)} value */
proto.SC2APIProtocol.RequestReplayInfo.prototype.setReplayData = function(value) {
  jspb.Message.setOneofField(this, 2, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestReplayInfo.prototype.clearReplayData = function() {
  jspb.Message.setOneofField(this, 2, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.hasReplayData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool download_data = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getDownloadData = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestReplayInfo.prototype.setDownloadData = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SC2APIProtocol.RequestReplayInfo.prototype.clearDownloadData = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.hasDownloadData = function() {
  return jspb.Message.getField(this, 3) != null;
};


