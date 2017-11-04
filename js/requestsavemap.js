/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.SC2APIProtocol.RequestSaveMap');

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
proto.SC2APIProtocol.RequestSaveMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestSaveMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestSaveMap.displayName = 'proto.SC2APIProtocol.RequestSaveMap';
}


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
proto.SC2APIProtocol.RequestSaveMap.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestSaveMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestSaveMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestSaveMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapPath: jspb.Message.getField(msg, 1),
    mapData: msg.getMapData_asB64()
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
 * @return {!proto.SC2APIProtocol.RequestSaveMap}
 */
proto.SC2APIProtocol.RequestSaveMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestSaveMap;
  return proto.SC2APIProtocol.RequestSaveMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestSaveMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestSaveMap}
 */
proto.SC2APIProtocol.RequestSaveMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapPath(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMapData(value);
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
proto.SC2APIProtocol.RequestSaveMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestSaveMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestSaveMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestSaveMap.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string map_path = 1;
 * @return {string}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.getMapPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.RequestSaveMap.prototype.setMapPath = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.RequestSaveMap.prototype.clearMapPath = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.hasMapPath = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes map_data = 2;
 * @return {string}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.getMapData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes map_data = 2;
 * This is a type-conversion wrapper around `getMapData()`
 * @return {string}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.getMapData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMapData()));
};


/**
 * optional bytes map_data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMapData()`
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.getMapData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMapData()));
};


/** @param {!(string|Uint8Array)} value */
proto.SC2APIProtocol.RequestSaveMap.prototype.setMapData = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.RequestSaveMap.prototype.clearMapData = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.hasMapData = function() {
  return jspb.Message.getField(this, 2) != null;
};


