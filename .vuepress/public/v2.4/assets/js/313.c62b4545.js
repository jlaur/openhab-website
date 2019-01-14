(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{862:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("The binding uses the Tankerkönig API "),a("a",{attrs:{href:"https://www.tankerkoenig.de",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.tankerkoenig.de"),a("OutboundLink")],1),t._v(" for collecting gas price data of german gas stations.\nSpecial thanks to the creators of Tankerkönig for providing an easy way to get data from  the [MTS-K] (Markttransparenzstelle für Kraftstoffe).")]),t._v(" "),a("p",[t._v("Tankerkönig is providing this service for free, however they request to prevent overloading of their server by reducing the number of web-requests.\nThis binding handles those requests (minimum Refresh Interval is 10 minutes, a webserver does handle a maximum of 10 stations).\nThe data will be updated for each Station individually after the initialization and after each Refresh Interval for all (open) stations (Note: changing the Webservice will cause the Refresh Interval to restart).\nAdditionally one may select the mode Opening-Times in which only those Stations get polled which are actually open.\nFor a correct usage of opening times the binding needs the information if the actual day is a holiday.")]),t._v(" "),a("p",[t._v('Note:\nWhile using the mode Opening-Times the channel "station_open" will NOT show "close" because during such times no update is being requested from that Station!')]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("In order to use this binding one needs to prepare:")]),t._v(" "),a("p",[t._v("-minimal Java Varsion is 1.8.0_101-b13 (otherwise the https request will not produce a usable return)")]),t._v(" "),a("p",[t._v("-a personal API-Key")]),t._v(" "),a("p",[t._v("Request a free Tankerkönig API key from: "),a("a",{attrs:{href:"https://creativecommons.tankerkoenig.de/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://creativecommons.tankerkoenig.de/"),a("OutboundLink")],1),t._v('  Select the tab "API-Key".')]),t._v(" "),a("p",[t._v("-LocationIDs of the selected gas stations")]),t._v(" "),a("p",[t._v("Search for the gas station IDs here: "),a("a",{attrs:{href:"https://creativecommons.tankerkoenig.de/configurator/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://creativecommons.tankerkoenig.de/configurator/index.html"),a("OutboundLink")],1),t._v('\nDrag the red marker on the map to the rough location of desired gas stations.\nSelect the gas stations and click "Tankstellen übernehmen" on the right.\nThis will download a file holding the location IDs. For example: a7cdd9cf-b467-4aac-8eab-d662f082511e')]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("This binding supports:")]),t._v(" "),a("p",[t._v("-Webservice (bridge)")]),t._v(" "),a("p",[t._v("-Station (thing)")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("The binding provides no discovery.\nThe desired Webservice and Stations must be configured manually or via a things file.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("The binding has no configuration options itself, all configuration is done at 'Bridge' and 'Things' level.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The Webservice (bridge) needs to be configured with the personal API-Key, the desired Refresh Interval (the time interval between price-updates, default 60 minutes, minimum 10 minutes) and the Opening-Times mode selection (in this mode price-updates are only requested from stations that are actually open).\nA single Webservice can handle up to 10 Stations.")]),t._v(" "),a("p",[t._v("Each Station needs to be configured with a LocationID and the Webservice to which it is linked.")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("The binding introduces the channel holiday for the Webservice and the channels e10, e5 ,diesel and station_open for the Stations:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Note: All apikeys and locationids are only examples!")]),t._v(" "),a("p",[t._v("tankerkoenig.things:")]),t._v(" "),t._m(9),a("p",[t._v("tankerkoenig.items:")]),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("-The Webservice stays OFFLINE")]),t._v(" "),a("p",[t._v("If only a Webservice is configured, it will remain OFFLINE until a Station is configured as well.\nEach Station schedules a daily job to update detail-data, on completion of that job the Station and the Webservice will change to ONLINE.\nThe further price-updates for all Stations are scheduled by the Webservice using the Refresh Interval.")]),t._v(" "),a("p",[t._v("-The Station(s) and Webservice stay OFFLINE")]),t._v(" "),a("p",[t._v('Set the logging level for the binding to DEBUG (Karaf-Console command: "log:set DEBUG org.openhab.binding.tankerkoenig".\nCreate a new Station (in order to start the "initialize" routine).\nCheck the openhab.log for entries like:')]),t._v(" "),t._m(12),a("p",[t._v("This indicates a missing certificate of a certification authority (CA) in the certificate-store of the java jdk under which openHAB is running.\nIn most cases, updating to the latest version of jdk solves this because the store of cacerts are maintained and updated in java releases.")]),t._v(" "),a("p",[t._v("Note: You must restart openHAB after a java update.")]),t._v(" "),a("p",[t._v("If you receive the error because you are running an old linux installation which does not have the latest java-versions available in its package-repositories, you may be able to fix the issue using one of the three options below:")]),t._v(" "),a("p",[t._v("1.) Update the linux-system and install the latest java-versions")]),t._v(" "),a("p",[t._v("2.) Download the most recent jdk and install it directly on to your system without using a pre-composed package")]),t._v(" "),a("p",[t._v("On debian based systems one can use: "),a("a",{attrs:{href:"http://www.webupd8.org/2012/09/install-oracle-java-8-in-ubuntu-via-ppa.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.webupd8.org/2012/09/install-oracle-java-8-in-ubuntu-via-ppa.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("3.) Update the cacerts store by importing the missing certificate")]),t._v(" "),a("p",[t._v("Note: Using this version, loaded certificates will expire!\nIf you still want to import the missing certificate, the example below may help:\nCheck which java package you have installed:")]),t._v(" "),t._m(13),a("p",[t._v("Find the ca-store of your jdk")]),t._v(" "),t._m(14),a("p",[t._v("Check which CA has validated the certificate")]),t._v(" "),a("p",[t._v("Navigate to "),a("a",{attrs:{href:"https://creativecommons.tankerkoenig.de/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://creativecommons.tankerkoenig.de/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Check which CA has validated the certificate")]),t._v(" "),a("p",[t._v("Export the certificate of the certificate authority")]),t._v(" "),a("p",[t._v("Import the certificate to the CA-store which you have found")]),t._v(" "),t._m(15),a("p",[t._v('The required password is "changeit".')]),t._v(" "),a("p",[t._v("Restart your server")]),t._v(" "),a("p",[t._v("-The Station(s) and Webservice go to OFFLINE after being ONLINE")]),t._v(" "),a("p",[t._v("Either the web-request to Tankerköng returned a failure or no valid response was received (this could be caused by a banned API-key).\nIn both cases the Webservice and the Station(s) go OFFLINE.\nIf the Tankerkönig return indicates an error a descriptive message (in German) is added next to the OFFLINE which will be displayed on the Webservice and Station(s) pages on PaperUI.\nOn the next receipt of a valid message Webservice and Station(s) will go ONLINE again.\nThe scheduled polling of price-data is canceled in case of no valid response.\nUsers should check the log for any reports to solve the reason for the OFFLINE status.\nIn order to restart the polling a change of the Webservice has to be saved (for example a change in the Refresh Interval).")]),t._v(" "),a("p",[t._v("Note: If the API-key is banned by Tankerkönig, the reason has to be cleared with Tankerkönig!")]),t._v(" "),a("p",[t._v("-How to set the switch item for the channel holiday?")]),t._v(" "),a("p",[t._v("The correct usage of opening times needs the information if the actual day is a holiday.\nThe binding expects a switch item linked to the Webservice channel holiday.\nThis switch can be set either manually (only suggested for testing!), by a rule [openHAB1-addons rules] or by the usage of the CALDAV binding with a calendar.")]),t._v(" "),t._m(16),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://creativecommons.tankerkoenig.de/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://creativecommons.tankerkoenig.de/"),a("OutboundLink")],1),t._v("  (sorry, only available in German)")])]),t._v(" "),a("li",[a("p",[t._v("[MTS-K]: "),a("a",{attrs:{href:"https://www.bundeskartellamt.de/DE/Wirtschaftsbereiche/Mineral%C3%B6l/MTS-Kraftstoffe/Verbraucher/verbraucher_node.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.bundeskartellamt.de/DE/Wirtschaftsbereiche/Mineralöl/MTS-Kraftstoffe/Verbraucher/verbraucher_node.html"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("[openhab1-addons rules]: "),a("a",{attrs:{href:"https://github.com/openhab/openhab1-addons/wiki/Samples-Rules#how-to-calculate-public-holidays",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/openhab/openhab1-addons/wiki/Samples-Rules#how-to-calculate-public-holidays"),a("OutboundLink")],1)])])]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"tankerkonig-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tankerkonig-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Tankerkönig Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"preparation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparation","aria-hidden":"true"}},[this._v("#")]),this._v(" Preparation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel ID")]),t._v(" "),a("th",[t._v("Channel Description")]),t._v(" "),a("th",[t._v("Supported item type")]),t._v(" "),a("th",[t._v("Advanced")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("holiday")]),t._v(" "),a("td",[t._v("ON if today is a holiday")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("e10")]),t._v(" "),a("td",[t._v("price of e10")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("e5")]),t._v(" "),a("td",[t._v("price of e5")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("diesel")]),t._v(" "),a("td",[t._v("price of diesel")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("station_open")]),t._v(" "),a("td",[t._v("reported opening-state of the station")]),t._v(" "),a("td",[t._v("Contact")]),t._v(" "),a("td",[t._v("False")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("tankerkoenig"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("webservice"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("WebserviceName")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"MyWebserviceName"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" apikey"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("refresh")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("60")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" modeOpeningTime "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("station")]),t._v(" StationName1 "),a("span",{attrs:{class:"token string"}},[t._v('"MyStationName1"')]),t._v(" @ "),a("span",{attrs:{class:"token string"}},[t._v('"GasStations"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" locationid "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("station")]),t._v(" StationName2 "),a("span",{attrs:{class:"token string"}},[t._v('"MyStationName2"')]),t._v(" @ "),a("span",{attrs:{class:"token string"}},[t._v('"GasStations"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" locationid "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("E10_1")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"E10 [%.3f €]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"tankerkoenig:station:WebserviceName:StationName1:e10"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("E5_1")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"E5 [%.3f €]"')]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"tankerkoenig:station:WebserviceName:StationName1:e5"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Diesel_1")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Diesel [%.3f €]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"tankerkoenig:station:WebserviceName:StationName1:diesel"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("E10_2")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"E10 [%.3f €]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"tankerkoenig:station:WebserviceName:StationName2:e10"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("E5_2")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"E5 [%.3f €]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"tankerkoenig:station:WebserviceName:StationName2:e5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Diesel_2")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Diesel [%.3f €]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"tankerkoenig:station:WebserviceName:StationName2:diesel"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[this._v("#")]),this._v(" FAQ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(" 2017-06-25 16:02:12.679 [DEBUG] [ig.internal.data.TankerkoenigService] - getTankerkoenigDetailResult IOException:\njava.io.IOException: java.util.concurrent.ExecutionException: javax.net.ssl.SSLHandshakeException: General SSLEngine problem\n......\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" sudo dpkg "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("l "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" grep java\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ii  oracle"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("java8"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("jdk                    "),a("span",{attrs:{class:"token number"}},[t._v("8")]),t._v("u65                             armhf        Java™ Platform"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Standard Edition "),a("span",{attrs:{class:"token number"}},[t._v("8")]),t._v(" Development Kit\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" sudo dpkg "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("L oracle"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("java8"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("jdk "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" grep cacerts\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("jvm"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("jdk"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("oracle"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("arm32"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("vfp"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("hflt"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("jre"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("security"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cacerts\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" cd "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("jvm"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("jdk"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("oracle"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("arm32"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("vfp"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("hflt"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("jre"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("security\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" keytool "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("keystore cacerts "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("alias LetsEncrypt "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("file ca"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("crt\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tankerkonig-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tankerkonig-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Tankerkönig API")])}],!1,null,null,null);n.options.__file="readme.md";e.default=n.exports}}]);