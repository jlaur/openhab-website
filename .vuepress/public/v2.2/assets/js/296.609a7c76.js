(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{274:function(t,e,r){t.exports=r.p+"3db8d418c6e38d06601e7c0ff1cabe64.png"},690:function(t,e,r){"use strict";r.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"z-way-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#z-way-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Z-Way Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Z-Way comes in three parts [cf. "),e("a",{attrs:{href:"%5BZ-Wave.Me%5D(https://www.z-wave.me/index.php?id=1)"}},[this._v("Z-Wave.Me")]),this._v("]:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("a firmware that runs on the Z-Wave transceiver chip")]),this._v(" "),e("li",[this._v("the communication stack that runs on different host Operating Systems")]),this._v(" "),e("li",[this._v("an automation engine and optionally a web server to implement a User Interface")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Please note the "),e("strong",[this._v("known issues")]),this._v(" below.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"approach"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#approach","aria-hidden":"true"}},[this._v("#")]),this._v(" Approach")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The Z-Way Binding provides different thing types. The core component is the bridge which represents the Z-Way server. For the integration of devices, two thing types are available. In Z-Way there are devices which represent physical devices and (virtual) devices which are defined in Apps. The difference is that physical devices usually have several functions.\nZ-Way server constructs (virtual) devices for each function, such as motion sensors or door contacts. In openHAB, these functions are bundled into physical devices and represented as things with channels for each function. This type of thing is a "),e("em",[this._v("Z-Wave Device")]),this._v(". On the other hand all virtual devices are mapped to "),e("em",[this._v("Z-Way Virtual Devices")]),this._v(" with exactly one channel.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("em",[t._v("Z-Way Server")]),t._v(" (Bridge) represents a bridge with general settings and communication tasks.")]),t._v(" "),r("li",[r("em",[t._v("Z-Way Virtual Device")]),t._v(" represents one (virtual) device with the corresponding channel. A bridge is necessary as an intermediary between openHAB thing and Z-Way device.")]),t._v(" "),r("li",[r("em",[t._v("Z-Wave Device")]),t._v(" represents a device of real world. Each device function will be mapped to a separate channel. The bridge is necessary as an intermediary between openHAB thing and Z-Way device.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A discovery service for Z-Way servers scans local network and must always be started manually. Z-Way doesn't support any discovery protocol like UPnP for this purpose. That's why first all IP addresses in local network are checked on port 8083. If the server answers, a ZAutomation request ("),e("em",[this._v("/ZAutomation/api/v1/status")]),this._v(") is performed to ensure, the found server runs Z-Way.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"z-way-server-bridge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#z-way-server-bridge","aria-hidden":"true"}},[this._v("#")]),this._v(" Z-Way Server (Bridge)")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Configuration Name")]),t._v(" "),r("th",[t._v("Mandatory")]),t._v(" "),r("th",[t._v("Default")]),t._v(" "),r("th",[t._v("Desciption")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("openHABAlias")]),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td",[t._v("By default, the alias is generated during initialization or configuration update of thing handler.")])]),t._v(" "),r("tr",[r("td",[t._v("openHABIpAddress")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("localhost")]),t._v(" "),r("td",[t._v("The IP address or hostname of the openHAB server. If Z-Way and openHAB are running on the same machine, the default value can be used.")])]),t._v(" "),r("tr",[r("td",[t._v("openHABPort")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("8080")]),t._v(" "),r("td",[t._v("The port of the openHAB server (0 to 65335)")])]),t._v(" "),r("tr",[r("td",[t._v("openHABProtocol")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("http")]),t._v(" "),r("td",[t._v("Protocol to connect to the openHAB server (http or https)")])]),t._v(" "),r("tr",[r("td",[t._v("zwayServerIpAddress")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("localhost")]),t._v(" "),r("td",[t._v("The IP address or hostname of the Z-Way server. If Z-Way and openHAB are running on the same machine, the default value can be used.")])]),t._v(" "),r("tr",[r("td",[t._v("zwayServerPort")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("8083")]),t._v(" "),r("td",[t._v("The port of the Z-Way server (0 to 65335)")])]),t._v(" "),r("tr",[r("td",[t._v("zwayServerProtocol")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("http")]),t._v(" "),r("td",[t._v("Protocol to connect to the Z-Way server (http or https)")])]),t._v(" "),r("tr",[r("td",[t._v("zwayServerUsername")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("admin")]),t._v(" "),r("td",[t._v("Username to access the Z-Way server.")])]),t._v(" "),r("tr",[r("td",[t._v("zwayServerPassword")]),t._v(" "),r("td",[t._v("X")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Password to access the Z-Way server.")])]),t._v(" "),r("tr",[r("td",[t._v("pollingInterval")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("3600")]),t._v(" "),r("td",[t._v("Refresh device states and registration from Z-Way server in seconds (at least 60).")])]),t._v(" "),r("tr",[r("td",[t._v("observerMechanismEnabled")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("true")]),t._v(" "),r("td",[t._v("The observer functionality is responsible for the item registration as observer in Z-Way. Attention: if disable this option, you have to setup an other synchronization mechanism like MQTT.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Only the Z-Way server can be configured textual (Attention! "),e("em",[this._v("openHABAlias")]),this._v(" has to be set because the bridge configuration can not be changed at runtime):")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dsl"}},[r("code",[r("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),r("span",{attrs:{class:"token class-name"}},[t._v("zway"),r("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("zwayServer"),r("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("192_168_2_42")]),t._v(" "),r("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" openHABAlias"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token string"}},[t._v('"development"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" openHABIpAddress"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token string"}},[t._v('"localhost"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" openHABPort"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token number"}},[t._v("8080")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" openHABProtocol"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token string"}},[t._v('"http"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zwayServerIpAddress"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token string"}},[t._v('"localhost"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zwayServerPort"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token number"}},[t._v("8083")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zwayServerProtocol"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token string"}},[t._v('"http"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zwayServerUsername"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token string"}},[t._v('"admin"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zwayServerPassword"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token string"}},[t._v('"admin"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pollingInterval"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token number"}},[t._v("3600")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" observerMechanismEnabled"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),r("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{attrs:{class:"token comment"}},[t._v("// associated things have to be created with the Paper UI")]),t._v("\n"),r("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"z-way-virtual-device"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#z-way-virtual-device","aria-hidden":"true"}},[this._v("#")]),this._v(" Z-Way Virtual Device")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Configuration Name")]),t._v(" "),r("th",[t._v("Mandatory")]),t._v(" "),r("th",[t._v("Default")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("deviceId")]),t._v(" "),r("td",[t._v("X")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Device ID of virtual device")])]),t._v(" "),r("tr",[r("td",[t._v("bridge reference")]),t._v(" "),r("td",[t._v("X")]),t._v(" "),r("td"),t._v(" "),r("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"z-wave-device"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#z-wave-device","aria-hidden":"true"}},[this._v("#")]),this._v(" Z-Wave Device")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Configuration Name")]),t._v(" "),r("th",[t._v("Mandatory")]),t._v(" "),r("th",[t._v("Default")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("nodeId")]),t._v(" "),r("td",[t._v("X")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Node ID of the Z-Wave device")])]),t._v(" "),r("tr",[r("td",[t._v("bridge reference")]),t._v(" "),r("td",[t._v("X")]),t._v(" "),r("td"),t._v(" "),r("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"channels-with-detailed-information-for-the-devices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels-with-detailed-information-for-the-devices","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels with detailed information for the devices")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Channel Type ID")]),t._v(" "),r("th",[t._v("Item Type")]),t._v(" "),r("th",[t._v("Category")]),t._v(" "),r("th",[t._v("Asssigned for Z-Way device type and probe type")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("sensorTemperature")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Temperature")]),t._v(" "),r("td",[t._v("SensorMultilevel - temperature")])]),t._v(" "),r("tr",[r("td",[t._v("sensorLuminosity")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Light")]),t._v(" "),r("td",[t._v("SensorMultilevel - luminosity")])]),t._v(" "),r("tr",[r("td",[t._v("sensorHumidity")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Humidity")]),t._v(" "),r("td",[t._v("SensorMultilevel - humidity")])]),t._v(" "),r("tr",[r("td",[t._v("sensorBarometer")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Pressure")]),t._v(" "),r("td",[t._v("SensorMultilevel - barometer")])]),t._v(" "),r("tr",[r("td",[t._v("sensorUltraviolet")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Light")]),t._v(" "),r("td",[t._v("SensorMultilevel - ultraviolet")])]),t._v(" "),r("tr",[r("td",[t._v("sensorCO2")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("CarbonDioxide")]),t._v(" "),r("td",[t._v("SensorMultilevel - "),r("em",[t._v("Special case:")]),t._v(" no probe type for carbon dioxide sensors available - probe title "),r("em",[t._v("CO2 Level")]),t._v(" acts as selection criterion")])]),t._v(" "),r("tr",[r("td",[t._v("sensorEnergy")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Energy")]),t._v(" "),r("td",[t._v("SensorMultilevel - energy")])]),t._v(" "),r("tr",[r("td",[t._v("sensorMeterKWh")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Energy")]),t._v(" "),r("td",[t._v("SensorMultilevel - meterElectric_kilowatt_per_hour")])]),t._v(" "),r("tr",[r("td",[t._v("sensorMeterW")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Energy")]),t._v(" "),r("td",[t._v("SensorMultilevel - meterElectric_watt")])]),t._v(" "),r("tr",[r("td",[t._v("sensorSmoke")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Smoke")]),t._v(" "),r("td",[t._v("SensorBinary - smoke")])]),t._v(" "),r("tr",[r("td",[t._v("sensorCo")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Gas")]),t._v(" "),r("td",[t._v("SensorBinary - co")])]),t._v(" "),r("tr",[r("td",[t._v("sensorFlood")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Water")]),t._v(" "),r("td",[t._v("SensorBinary - flood")])]),t._v(" "),r("tr",[r("td",[t._v("sensorTamper")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Alarm")]),t._v(" "),r("td",[t._v("SensorBinary - tamper")])]),t._v(" "),r("tr",[r("td",[t._v("sensorDoorWindow")]),t._v(" "),r("td",[t._v("Contact")]),t._v(" "),r("td",[t._v("Contact")]),t._v(" "),r("td",[t._v("SensorBinary - door-window")])]),t._v(" "),r("tr",[r("td",[t._v("sensorMotion")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Motion")]),t._v(" "),r("td",[t._v("SensorBinary - general_purpose, motion")])]),t._v(" "),r("tr",[r("td",[t._v("switchPowerOutlet")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("PowerOutlet")]),t._v(" "),r("td",[t._v("SwitchBinary - "),r("em",[t._v("Special case:")]),t._v(" no probe type for power outlet available - icon "),r("em",[t._v("switch")]),t._v(" acts as selection criterion")])]),t._v(" "),r("tr",[r("td",[t._v("switchColorTemperature")]),t._v(" "),r("td",[t._v("Dimmer")]),t._v(" "),r("td",[t._v("ColorLight")]),t._v(" "),r("td",[t._v("SwitchMultilevel - switchColor_soft_white, switchColor_cold_white")])]),t._v(" "),r("tr",[r("td",[t._v("thermostatMode")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Temperature")]),t._v(" "),r("td",[t._v("SwitchBinary - thermostat_mode")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("SensorBinary: cooling, all alarm types (resulting from Z-Wave command class AlarmSensor(deprecated) and Alarm)")]),this._v(" "),e("li",[this._v("SensorMultilevel: meterElectric_pulse_count, meterElectric_voltage, meterElectric_ampere, meterElectric_power_factor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"universial-channels-for-the-devices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#universial-channels-for-the-devices","aria-hidden":"true"}},[this._v("#")]),this._v(" Universial channels for the devices")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Channel Type ID")]),t._v(" "),r("th",[t._v("Item Type")]),t._v(" "),r("th",[t._v("Category")]),t._v(" "),r("th",[t._v("Assigned for Z-Way device type")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("battery")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Battery")]),t._v(" "),r("td",[t._v("Battery")])]),t._v(" "),r("tr",[r("td",[t._v("doorlock")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Door")]),t._v(" "),r("td",[t._v("Doorlock")])]),t._v(" "),r("tr",[r("td",[t._v("sensorBinary")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("SensorBinary")])]),t._v(" "),r("tr",[r("td",[t._v("sensorMultilevel")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("SensorMultilevel")])]),t._v(" "),r("tr",[r("td",[t._v("switchBinary")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("SwitchBinary")])]),t._v(" "),r("tr",[r("td",[t._v("switchMultilevel")]),t._v(" "),r("td",[t._v("Dimmer")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("SwitchMultilevel")])]),t._v(" "),r("tr",[r("td",[t._v("switchColor")]),t._v(" "),r("td",[t._v("Color")]),t._v(" "),r("td",[t._v("ColorLight")]),t._v(" "),r("td",[t._v("SwitchRGBW")])]),t._v(" "),r("tr",[r("td",[t._v("switchControl")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("SwitchControl, ToggleButton, SwitchToggle")])]),t._v(" "),r("tr",[r("td",[t._v("thermostat")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Temperature")]),t._v(" "),r("td",[t._v("Thermostat")])]),t._v(" "),r("tr",[r("td",[t._v("sensorDiscrete")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("SensorDiscrete")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"channels-for-the-z-way-server-bridge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels-for-the-z-way-server-bridge","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels for the Z-Way Server (Bridge)")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Channel Type ID")]),t._v(" "),r("th",[t._v("Item Type")]),t._v(" "),r("th",[t._v("Category")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("actions")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("It is currently possible to update all devices.")])]),t._v(" "),r("tr",[r("td",[t._v("secureInclusion")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Change inclusion type for further inclusions.")])]),t._v(" "),r("tr",[r("td",[t._v("inclusion")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Start inclusion mode (after a timeout the inclusion will be automatically finished).")])]),t._v(" "),r("tr",[r("td",[t._v("exclusion")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Start exclusion mode (after a timeout the exclusion will be automatically finished).")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"locations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#locations","aria-hidden":"true"}},[this._v("#")]),this._v(" Locations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"developer-stuff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#developer-stuff","aria-hidden":"true"}},[this._v("#")]),this._v(" Developer stuff")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"known-issues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Known issues")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The Z-Way Binding only works, when simple mode of item linking is enabled during thing creation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"structure-of-z-way-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#structure-of-z-way-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Structure of Z-Way Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(274),alt:"Z-Way Binding"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Discovery of the Z-Way server and devices")]),this._v(" "),e("li",[this._v("Control of the Z-Wave devices in openHAB")]),this._v(" "),e("li",[this._v("Receive updates of sensor data and actuator states in openHAB")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"restrictions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restrictions","aria-hidden":"true"}},[this._v("#")]),this._v(" Restrictions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Z-Way device types (especially the probe types) supported by openHAB channels with detailed information (scale types and so on) are not complete.")]),this._v(" "),e("li",[this._v("Configuration of the Z-Wave network by the binding is currently not possible (physical device configuration)")]),this._v(" "),e("li",[this._v('Z-Way App "openHAB Connector" is required. Further versions will contain other mechanisms under usage of the WebSocket implementation of Z-Way or MQTT.')])])}],s=r(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("Z-Way is a software to configure and control a Z-Wave network. The software comes with a full stack from Z-Wave transceiver with certified firmware to a REST API on high level.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("All parts together represents a smart home controller for Z-Wave.")]),t._v(" "),r("p",[t._v("The entire infrastructure is maintained and developed by "),r("a",{attrs:{href:"https://www.z-wave.me/index.php?id=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Z-Wave.Me"),r("OutboundLink")],1),t._v(" with the help of a large community.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("The idea behind is the integration of Z-Wave through a bridge (Z-Way controller). The existing, certified Z-Way stack can be used to build, configure and control the Z-Wave network. By using the REST API all devices are loaded from Z-Way and represented as openHAB elements. The sensor data and actuator states are constantly updated and commands are passed to the Z-Way system.")]),t._v(" "),r("p",[t._v("The Binding uses the Z-Way library for Java ("),r("a",{attrs:{href:"https://github.com/pathec/ZWay-library-for-Java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),r("OutboundLink")],1),t._v(").")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("Another discovery service provides available devices (a configured bridge is necessary). The device discovery service is performed at a specified interval, but can also be started manually.")]),t._v(" "),r("p",[t._v("Note: In the Z-Way server device can be disabled or made invisible. Only for active and visible Z-Way devices channels will created.")]),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("No configuration is necessary.")]),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("The textual configuration (via *.thing files) isn't useful because the resulting elements are read-only. But the configuration and properties of things are changed at runtime and channels are dynamically added and removed.")]),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("The information about accessing openHAB are needed so that the Observer mechanism works. Besides the username and password all required Z-Way information are found during discovery.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),r("p",[t._v("The following channels are currently supported.")]),t._v(" "),t._m(22),t._v(" "),r("p",[t._v("Currently unsupported Z-Way probe types:")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),r("p",[t._v("The following channels represent universial channels if no further device information are available, only depending on the Z-Way device types (for available device types see "),r("a",{attrs:{href:"http://docs.zwayhomeautomation.apiary.io/#reference/devices/device",target:"_blank",rel:"noopener noreferrer"}},[t._v("Z-Way Documentation"),r("OutboundLink")],1),t._v(").")]),t._v(" "),t._m(25),t._v(" "),r("p",[t._v("Unsupported Z-Way device types: Camera, SensorMultiline, Text. The integration of these types isn't planned.")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),r("p",[t._v("The locations of the Z-Way devices are loaded during the discovery. Based on the location ID of Z-Way device, the name of the Z-Way room is then allocated to the location property of the thing.")]),t._v(" "),t._m(29),t._v(" "),r("p",[t._v("Because textual configuration isn't useful, follow the instructions in the "),r("router-link",{attrs:{to:"./doc/GETTING_STARTED.html"}},[t._v("Getting Started")]),t._v(" document.")],1),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:"doc/BMWi_4C_Gef_en.jpg",width:"200"}}),t._v(" "),r("DocPreviousVersions"),t._v(" "),r("EditPageLink")],1)},a,!1,null,null,null);n.options.__file="readme.md";e.default=n.exports}}]);