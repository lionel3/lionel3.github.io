var list = ["*.kidsa-z.com","kidsa-z.com","*.raz-plus.com","raz-plus.com","*.raz-kids.com","raz-kids.com","*.learninga-z.com","learninga-z.com","*.headsprout.com","headsprout.com","readinga-z.com","*.readinga-z.com","vocabularya-z.com","*.vocabularya-z.com","writinga-z.com","*.writinga-z.com","sciencea-z.com","*.sciencea-z.com","*.starfall.com","starfall.com"];
var proxy = "PROXY 74.207.254.60:81";
function FindProxyForURL(url, host) {
    for (var i = 0, l = list.length; i < l; i++) {
        if (shExpMatch(host, list[i])) {
            return proxy;
        }
    }

    return "DIRECT";
}
