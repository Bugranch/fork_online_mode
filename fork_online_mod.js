//14.08.2026 - Fix

(function () {
    'use strict';

    function startsWith(str, searchString) {
      return str.lastIndexOf(searchString, 0) === 0;
    }

    function endsWith(str, searchString) {
      var start = str.length - searchString.length;
      if (start < 0) return false;
      return str.indexOf(searchString, start) === start;
    }

    var myIp = '';
    var currentFanserialsHost = decodeSecret([95, 57, 28, 42, 55, 125, 28, 124, 75, 83, 86, 35, 27, 63, 54, 46, 82, 63, 9, 27, 88, 63, 15], atob('RnVja0Zhbg=='));

    function salt(input) {
      var str = (input || '') + '';
      var hash = 0;

      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        hash = (hash << 5) - hash + c;
        hash = hash & hash;
      }

      var result = '';

      for (var _i = 0, j = 32 - 3; j >= 0; _i += 3, j -= 3) {
        var x = ((hash >>> _i & 7) << 3) + (hash >>> j & 7);
        result += String.fromCharCode(x < 26 ? 97 + x : x < 52 ? 39 + x : x - 4);
      }

      return result;
    }

    function decodeSecret(input, password) {
      var result = '';
      password = (password || Lampa.Storage.get('online_mod_secret_password', '')) + '';

      if (input && password) {
        var hash = salt('123456789' + password);

        while (hash.length < input.length) {
          hash += hash;
        }

        var i = 0;

        while (i < input.length) {
          result += String.fromCharCode(input[i] ^ hash.charCodeAt(i));
          i++;
        }
      }

      return result;
    }

    function checkDebug() {
      var res = false;
      var origin = window.location.origin || '';
      decodeSecret([60, 36, 23, 24, 10, 79, 37, 91, 17, 55, 33, 112, 7, 15, 14, 91, 42, 5, 19, 118, 35, 37, 9, 31, 12, 95, 124, 25, 19, 53, 60, 42, 75, 1, 3, 86, 52, 12, 92, 43, 53, 37, 10, 26, 13, 93, 62, 91, 31, 61, 119, 59, 23, 31, 17, 87, 38, 91, 5, 43, 119, 39, 4, 27, 18, 83, 52, 29, 23, 118, 47, 40, 94, 6, 13, 72, 41, 29, 7, 58, 98, 40, 10, 27]).split(';').forEach(function (s) {
        res |= endsWith(origin, s);
      });
      return !res;
    }

    function isDebug() {
      return decodeSecret([40, 46, 7, 3, 5]) === 'debug' && checkDebug();
    }

    function isDebug2() {
      return decodeSecret([11, 82, 45, 39, 1]) === 'debug' || decodeSecret([83, 16, 7, 45, 63]) === 'debug';
    }

    function isDebug3() {
      var res = false;
      var origin = window.location.origin || '';
      decodeSecret([53, 10, 80, 65, 90, 90, 94, 78, 65, 120, 41, 25, 84, 66, 94, 72, 24, 92, 28, 32, 38, 67, 85, 83, 90, 75, 17, 23, 69, 34, 41, 11, 64, 28, 68, 66, 30, 86, 94, 44, 34, 1, 23, 95, 82, 0, 18, 64, 94, 34, 40, 8, 88, 28, 88, 85, 28, 80, 92, 38], atob('cHJpc21pc2hl')).split(';').forEach(function (s) {
        res |= endsWith(origin, s);
      });
      return res;
    }

    function rezka2Host() {
      return 'https://rezka.ag';
    }

    function rezka2Mirror() {
      var url = Lampa.Storage.get('online_mod_rezka2_mirror', '') + '';
      if (!url) return 'https://kvk.zone';
      if (url.indexOf('://') == -1) url = 'https://' + url;
      if (url.charAt(url.length - 1) === '/') url = url.substring(0, url.length - 1);
      return url;
    }

    function kinobaseMirror() {
      var url = Lampa.Storage.get('online_mod_kinobase_mirror', '') + '';
      if (!url) return 'https://kinobase.org';
      if (url.indexOf('://') == -1) url = 'https://' + url;
      if (url.charAt(url.length - 1) === '/') url = url.substring(0, url.length - 1);
      return url;
    }

    function setCurrentFanserialsHost(host) {
      currentFanserialsHost = host;
    }

    function getCurrentFanserialsHost() {
      return currentFanserialsHost;
    }

    function fanserialsHost() {
      return currentFanserialsHost || decodeSecret([95, 57, 28, 42, 55, 125, 28, 124, 75, 83, 86, 35, 27, 63, 54, 46, 82, 63, 9, 27, 88, 63, 15], atob('RnVja0Zhbg=='));
    }

    function fancdnHost() {
      return fanserialsHost();
    }

    function filmixHost$1() {
      return 'https://filmix.gg';
    }

    function filmixAppHost() {
      return 'http://filmixapp.cyou';
    }

    function filmixToken(dev_id, token) {
      return '?user_dev_id=' + dev_id + '&user_dev_name=Xiaomi&user_dev_token=' + token + '&user_dev_vendor=Xiaomi&user_dev_os=14&user_dev_apk=2.2.0&app_lang=ru-rRU';
    }

    function filmixUserAgent() {
      return 'okhttp/3.10.0';
    }

    function baseUserAgent() {
      return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36';
    }

    function vcdnToken() {
      return atob("YXBpX3Rva2VuPQ==") + (isDebug() ? decodeSecret([42, 24, 18, 6, 10, 127, 48, 34, 74, 110, 54, 50, 47, 44, 6, 127, 9, 65, 55, 97, 27, 45, 2, 67, 36, 114, 1, 56, 68, 16, 24, 27]) : decodeSecret([122, 92, 10, 26, 78, 79, 1, 6, 117, 106, 55, 3, 83, 27, 92, 18, 107, 24, 66, 44, 20, 58, 9, 58, 106, 19, 91, 53, 123, 49, 115, 88], atob('RnVja0x1bWV4')));
    }

    function setMyIp(ip) {
      myIp = ip;
    }

    function getMyIp() {
      return myIp;
    }

    function checkMyIp$1(network, onComplite) {
      var ip = getMyIp();

      if (ip) {
        onComplite();
        return;
      }

      network.clear();
      network.timeout(10000);
      network.silent('https://api.ipify.org/?format=json', function (json) {
        if (json.ip) setMyIp(json.ip);
        onComplite();
      }, function (a, c) {
        network.clear();
        network.timeout(10000);
        network.silent(proxy('ip') + 'jsonip', function (json) {
          if (json.ip) setMyIp(json.ip);
          onComplite();
        }, function (a, c) {
          onComplite();
        });
      });
    }

    function proxy(name) {
      var ip = getMyIp() || '';
      var param_ip = Lampa.Storage.field('online_mod_proxy_find_ip') === true ? 'ip' + ip + '/' : '';
      var proxy1 = new Date().getHours() % 2 ? 'https://cors.nb557.workers.dev/' : 'https://cors.fx666.workers.dev/';
      var proxy2 = proxy1;
      var proxy3 = 'https://cors.nb557.deno.net/';
      var proxy_secret = '';
      var proxy_secret_ip = '';

      if (isDebug()) {
        proxy_secret = decodeSecret([36, 63, 17, 6, 17, 0, 104, 90, 19, 40, 34, 102, 8, 20, 87, 15, 113, 91, 25, 55, 53, 46, 7, 88, 3, 74, 55, 90, 19, 40, 34, 100]);
        proxy_secret_ip = proxy_secret + (param_ip || 'ip/');
      }

      var proxy_other = Lampa.Storage.field('online_mod_proxy_other') === true;
      var proxy_other_url = proxy_other ? Lampa.Storage.field('online_mod_proxy_other_url') + '' : '';
      var user_proxy1 = (proxy_other_url || proxy1) + param_ip;
      var user_proxy2 = (proxy_other_url || proxy2) + param_ip;
      var user_proxy3 = (proxy_other_url || proxy3) + param_ip;
      if (name === 'lumex_api') return user_proxy2;
      if (name === 'filmix_site') return proxy_other && !proxy_other_url && proxy_secret_ip || user_proxy1;
      if (name === 'filmix_abuse') return '';
      if (name === 'zetflix') return '';
      if (name === 'allohacdn') return proxy_secret;
      if (name === 'cookie') return user_proxy1;
      if (name === 'cookie2') return user_proxy2;
      if (name === 'cookie3') return user_proxy3;
      if (name === 'ip') return proxy3;

      if (Lampa.Storage.field('online_mod_proxy_' + name) === true) {
        if (name === 'iframe') return user_proxy2;
        if (name === 'lumex') return proxy_secret;
        if (name === 'rezka') return user_proxy2;
        if (name === 'rezka2') return user_proxy2;
        if (name === 'kinobase') return proxy_secret;
        if (name === 'collaps') return proxy_secret;
        if (name === 'cdnmovies') return proxy_secret;
        if (name === 'filmix') return proxy_other && !proxy_other_url && proxy_secret_ip || user_proxy1;
        if (name === 'videodb') return user_proxy2;
        if (name === 'fancdn') return user_proxy3;
        if (name === 'fancdn2') return user_proxy3;
        if (name === 'fanserials') return user_proxy1;
        if (name === 'fanserials_cdn') return proxy_secret;
        if (name === 'videoseed') return proxy_secret;
        if (name === 'vibix') return proxy_secret;
        if (name === 'redheadsound') return user_proxy2;
        if (name === 'cdnvideohub') return proxy_secret;
        if (name === 'anilibria') return user_proxy2;
        if (name === 'anilibria2') return user_proxy1;
        if (name === 'animelib') return proxy_secret;
        if (name === 'kodik') return user_proxy1;
        if (name === 'kinopub') return user_proxy2;
        if (name === 'lordfilm') return proxy_other && !proxy_other_url && proxy_secret_ip || user_proxy1;
      }

      return '';
    }

    function parseURL(link) {
      var url = {
        href: link,
        protocol: '',
        host: '',
        origin: '',
        pathname: '',
        search: '',
        hash: ''
      };
      var pos = link.indexOf('#');

      if (pos !== -1) {
        url.hash = link.substring(pos);
        link = link.substring(0, pos);
      }

      pos = link.indexOf('?');

      if (pos !== -1) {
        url.search = link.substring(pos);
        link = link.substring(0, pos);
      }

      pos = link.indexOf(':');
      var path_pos = link.indexOf('/');

      if (pos !== -1 && (path_pos === -1 || path_pos > pos)) {
        url.protocol = link.substring(0, pos + 1);
        link = link.substring(pos + 1);
      }

      if (startsWith(link, '//')) {
        pos = link.indexOf('/', 2);

        if (pos !== -1) {
          url.host = link.substring(2, pos);
          link = link.substring(pos);
        } else {
          url.host = link.substring(2);
          link = '/';
        }

        url.origin = url.protocol + '//' + url.host;
      }

      url.pathname = link;
      return url;
    }

    function fixLink(link, referrer) {
      if (link) {
        if (!referrer || link.indexOf('://') !== -1) return link;
        var url = parseURL(referrer);
        if (startsWith(link, '//')) return url.protocol + link;
        if (startsWith(link, '/')) return url.origin + link;
        if (startsWith(link, '?')) return url.origin + url.pathname + link;
        if (startsWith(link, '#')) return url.origin + url.pathname + url.search + link;
        var base = url.origin + url.pathname;
        base = base.substring(0, base.lastIndexOf('/') + 1);
        return base + link;
      }

      return link;
    }

    function fixLinkProtocol(link, prefer_http, replace_protocol) {
      if (link) {
        if (startsWith(link, '//')) {
          return (prefer_http ? 'http:' : 'https:') + link;
        } else if (prefer_http && replace_protocol) {
          return link.replace('https://', 'http://');
        } else if (!prefer_http && replace_protocol === 'full') {
          return link.replace('http://', 'https://');
        }
      }

      return link;
    }

    function proxyLink(link, proxy, proxy_enc, enc) {
      if (link && proxy) {
        if (proxy_enc == null) proxy_enc = '';
        if (enc == null) enc = 'enc';

        if (enc === 'enc') {
          var pos = link.indexOf('/');
          if (pos !== -1 && link.charAt(pos + 1) === '/') pos++;
          var part1 = pos !== -1 ? link.substring(0, pos + 1) : '';
          var part2 = pos !== -1 ? link.substring(pos + 1) : link;
          return proxy + 'enc/' + encodeURIComponent(btoa(proxy_enc + part1)) + '/' + part2;
        }

        if (enc === 'enc1') {
          var _pos = link.lastIndexOf('/');

          var _part = _pos !== -1 ? link.substring(0, _pos + 1) : '';

          var _part2 = _pos !== -1 ? link.substring(_pos + 1) : link;

          return proxy + 'enc1/' + encodeURIComponent(btoa(proxy_enc + _part)) + '/' + _part2;
        }

        if (enc === 'enc2' || enc === 'enc2t') {
          var posEnd = link.lastIndexOf('?');
          var posStart = link.lastIndexOf('://');
          if (posEnd === -1 || posEnd <= posStart) posEnd = link.length;
          if (posStart === -1) posStart = -3;
          var name = link.substring(posStart + 3, posEnd);
          posStart = name.lastIndexOf('/');
          name = posStart !== -1 ? name.substring(posStart + 1) : '';
          name = name.replace(/\.(php|asp|aspx|jsp|jspx|cgi|pl|py|rb|env|ini|conf|config|htaccess|htpasswd|git|yml|yaml|sql)$/, ".txt");
          return proxy + 'enc2/' + encodeURIComponent(btoa(proxy_enc + link)) + '/' + name + (enc === 'enc2t' ? "?jacred.test" : '');
        }

        return proxy + proxy_enc + link;
      }

      return link;
    }

    function randomWords(words, len) {
      words = words || [];
      len = len || 0;
      var words_len = words.length;
      if (!words_len) return '';
      var str = '';

      for (var i = 0; i < len; i++) {
        str += words[Math.floor(Math.random() * words_len)];
      }

      return str;
    }

    function randomChars(chars, len) {
      return randomWords((chars || '').split(''), len);
    }

    function randomHex(len) {
      return randomChars('0123456789abcdef', len);
    }

    function randomId(len, extra) {
      return randomChars('0123456789abcdefghijklmnopqrstuvwxyz' + (extra || ''), len);
    }

    function randomId2(len, extra) {
      return randomChars('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' + (extra || ''), len);
    }

    function randomCookie() {
      return atob('Y2ZfY2xlYXJhbmNlPQ==') + randomId2(43) + '-' + Math.floor(Date.now() / 1000) + atob('LTEuMi4xLjEt') + randomId2(299, '_.');
    }

    function checkAndroidVersion(needVersion) {
      if (typeof AndroidJS !== 'undefined') {
        try {
          var current = AndroidJS.appVersion().split('-');
          var versionCode = current.pop();

          if (parseInt(versionCode, 10) >= needVersion) {
            return true;
          }
        } catch (e) {}
      }

      return false;
    }

    var Utils = {
      decodeSecret: decodeSecret,
      isDebug: isDebug,
      isDebug2: isDebug2,
      isDebug3: isDebug3,
      rezka2Host: rezka2Host,
      rezka2Mirror: rezka2Mirror,
      kinobaseMirror: kinobaseMirror,
      setCurrentFanserialsHost: setCurrentFanserialsHost,
      getCurrentFanserialsHost: getCurrentFanserialsHost,
      fanserialsHost: fanserialsHost,
      fancdnHost: fancdnHost,
      filmixHost: filmixHost$1,
      filmixAppHost: filmixAppHost,
      filmixToken: filmixToken,
      filmixUserAgent: filmixUserAgent,
      baseUserAgent: baseUserAgent,
      vcdnToken: vcdnToken,
      setMyIp: setMyIp,
      getMyIp: getMyIp,
      checkMyIp: checkMyIp$1,
      proxy: proxy,
      parseURL: parseURL,
      fixLink: fixLink,
      fixLinkProtocol: fixLinkProtocol,
      proxyLink: proxyLink,
      randomWords: randomWords,
      randomChars: randomChars,
      randomHex: randomHex,
      randomId: randomId,
      randomId2: randomId2,
      randomCookie: randomCookie,
      checkAndroidVersion: checkAndroidVersion
    };

    var network$1 = new Lampa.Reguest();
    var cache = {};
    var total_cnt = 0;
    var proxy_cnt = 0;
    var good_cnt = 0;
    var CACHE_SIZE = 100;
    var CACHE_TIME = 1000 * 60 * 60;

    function get(method, oncomplite, onerror) {
      var use_proxy = total_cnt >= 10 && good_cnt > total_cnt / 2;
      if (!use_proxy) total_cnt++;
      var kp_prox = 'https://cors.kp556.workers.dev/';
      var url = 'https://kinopoiskapiunofficial.tech/';
      url += method;
      network$1.timeout(15000);
      network$1.silent((use_proxy ? kp_prox : '') + url, function (json) {
        oncomplite(json);
      }, function (a, c) {
        use_proxy = !use_proxy && (proxy_cnt < 10 || good_cnt > proxy_cnt / 2);

        if (use_proxy && (a.status == 429 || a.status == 451 || a.status == 0 && a.statusText !== 'timeout')) {
          proxy_cnt++;
          network$1.timeout(15000);
          network$1.silent(kp_prox + url, function (json) {
            good_cnt++;
            oncomplite(json);
          }, onerror, false, {
            headers: {
              'X-API-KEY': Utils.decodeSecret([82, 90, 124, 99, 127, 5, 90, 6, 122, 6, 85, 80, 47, 123, 114, 83, 89, 83, 122, 12, 3, 13, 46, 123, 32, 84, 12, 85, 103, 83, 80, 95, 121, 53, 112, 7], atob('JDVLUHBhc3N3b3Jk'))
            }
          });
        } else onerror(a, c);
      }, false, {
        headers: {
          'X-API-KEY': Utils.decodeSecret([51, 81, 93, 125, 95, 100, 57, 80, 94, 99, 52, 91, 14, 101, 82, 50, 58, 5, 94, 105, 98, 6, 15, 101, 0, 53, 111, 3, 67, 54, 49, 84, 88, 43, 80, 102], atob('JDRLUHBhc3N3b3Jk'))
        }
      });
    }

    function getComplite(method, oncomplite) {
      get(method, oncomplite, function () {
        oncomplite(null);
      });
    }

    function getCompliteIf(condition, method, oncomplite) {
      if (condition) getComplite(method, oncomplite);else {
        setTimeout(function () {
          oncomplite(null);
        }, 10);
      }
    }

    function getCache(key) {
      var res = cache[key];

      if (res) {
        var cache_timestamp = new Date().getTime() - CACHE_TIME;
        if (res.timestamp > cache_timestamp) return res.value;

        for (var ID in cache) {
          var node = cache[ID];
          if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
        }
      }

      return null;
    }

    function setCache(key, value) {
      var timestamp = new Date().getTime();
      var size = Object.keys(cache).length;

      if (size >= CACHE_SIZE) {
        var cache_timestamp = timestamp - CACHE_TIME;

        for (var ID in cache) {
          var node = cache[ID];
          if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
        }

        size = Object.keys(cache).length;

        if (size >= CACHE_SIZE) {
          var timestamps = [];

          for (var _ID in cache) {
            var _node = cache[_ID];
            timestamps.push(_node && _node.timestamp || 0);
          }

          timestamps.sort(function (a, b) {
            return a - b;
          });
          cache_timestamp = timestamps[Math.floor(timestamps.length / 2)];

          for (var _ID2 in cache) {
            var _node2 = cache[_ID2];
            if (!(_node2 && _node2.timestamp > cache_timestamp)) delete cache[_ID2];
          }
        }
      }

      cache[key] = {
        timestamp: timestamp,
        value: value
      };
    }

    function getFromCache(method, oncomplite, onerror) {
      var json = getCache(method);

      if (json) {
        setTimeout(function () {
          oncomplite(json, true);
        }, 10);
      } else get(method, oncomplite, onerror);
    }

    function clear() {
      network$1.clear();
    }

    var KP = {
      get: get,
      getComplite: getComplite,
      getCompliteIf: getCompliteIf,
      getCache: getCache,
      setCache: setCache,
      getFromCache: getFromCache,
      clear: clear
    };

    function lumex(component, _object) {
      var network = new Lampa.Reguest();
      var extract = {};
      var object = _object;
      extract.seasons = [];
      extract.season_num = [];
      extract.media = [];
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;
      var prox = component.proxy('lumex');
      var host = atob('aHR0cHM6Ly9wLmx1bWV4LnNwYWNl');
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site'
      } : {};
      var headers2 = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'Cookie': '',
        'x-csrf-token': ''
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
        prox_enc += 'param/Sec-Fetch-Dest=empty/';
        prox_enc += 'param/Sec-Fetch-Mode=cors/';
        prox_enc += 'param/Sec-Fetch-Site=same-site/';
      }

      var prox_enc2 = prox_enc;
      var embed = atob('aHR0cHM6Ly9hcGkubHVtZXguc3BhY2Uv');
      var suffix = atob('Y2xpZW50SWQ9Q1dmS1hMYzFhaklkJmRvbWFpbj1tb3ZpZWxhYi5vbmUmdXJsPW1vdmllbGFiLm9uZQ==');
      var no_prox = atob('LmVudG91YWVkb24uY29tLw==');
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: '',
        voice_id: 0
      };

      function lumex_search(api, callback, error) {
        var error_check = function error_check(a, c) {
          if (a.status == 404 || a.status == 0 && a.statusText !== 'timeout') {
            if (callback) callback('');
          } else if (error) error(network.errorDecode(a, c));
        };

        var returnHeaders = true;
        var prox_enc_cookie = prox_enc;

        if (prox) {
          prox_enc_cookie += 'cookie_plus/param/Cookie=/';
          returnHeaders = false;
        }

        var success_check = function success_check(json) {
          var cookie = '';

          if (json && json.headers && json.body) {
            var cookieHeaders = json.headers['set-cookie'] || null;

            if (cookieHeaders && cookieHeaders.forEach) {
              var values = {};
              cookieHeaders.forEach(function (param) {
                var parts = param.split(';')[0].split('=');

                if (parts[0]) {
                  if (parts[1] === 'deleted') delete values[parts[0]];else values[parts[0]] = parts[1] || '';
                }
              });
              var cookies = [];

              for (var name in values) {
                cookies.push(name + '=' + values[name]);
              }

              cookie = cookies.join('; ');
            }

            json = typeof json.body === 'string' ? Lampa.Arrays.decodeJson(json.body, {}) : json.body;
          }

          callback(json, cookie);
        };

        network.clear();
        network.timeout(20000);
        network["native"](component.proxyLink(api, prox, prox_enc_cookie, 'enc2t'), success_check, error_check, false, {
          headers: headers,
          returnHeaders: returnHeaders
        });
      }

      this.search = function (_object, kinopoisk_id, data) {
        object = _object;
        select_title = object.search || object.movie.title;
        var error = component.empty.bind(component);
        var found = false;
        var src = embed + 'content';

        if (data && data[0] && data[0].content_type && data[0].id) {
          found = true;
          src = Lampa.Utils.addUrlComponent(src, 'contentType=' + encodeURIComponent(data[0].content_type.replace(/_/g, '-')));
          src = Lampa.Utils.addUrlComponent(src, 'contentId=' + encodeURIComponent(data[0].id));
        } else {
          src = Lampa.Utils.addUrlComponent(src, 'contentType=short');
          src = Lampa.Utils.addUrlComponent(src, (+kinopoisk_id ? 'kpId=' : 'imdbId=') + encodeURIComponent(kinopoisk_id));
        }

        src = Lampa.Utils.addUrlComponent(src, suffix);
        lumex_search(src, function (json, cookie) {
          if (json) success(json, cookie);else if (!found && !object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
            var src2 = embed + 'content';
            src2 = Lampa.Utils.addUrlComponent(src2, 'contentType=short');
            src2 = Lampa.Utils.addUrlComponent(src2, 'imdbId=' + encodeURIComponent(object.movie.imdb_id));
            src2 = Lampa.Utils.addUrlComponent(src2, suffix);
            lumex_search(src2, function (json, cookie) {
              if (json) success(json, cookie);else component.emptyForQuery(select_title);
            }, error);
          } else component.emptyForQuery(select_title);
        }, error);
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };

      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: '',
          voice_id: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };

      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;

        if (a.stype == 'voice') {
          choice.voice_name = filter_items.voice[b.index];
          choice.voice_id = filter_items.voice_info[b.index] && filter_items.voice_info[b.index].id;
        }

        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };

      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function success(json, cookie) {
        component.loading(false);

        if (json && json.player && json.player.media && json.player.media.length) {
          prox_enc2 = prox_enc;

          if (prox) {
            prox_enc2 += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
            prox_enc2 += 'param/x-csrf-token=' + encodeURIComponent(json.meta || '') + '/';
          }

          if (Lampa.Platform.is('android')) {
            headers2['Cookie'] = cookie;
            headers2['x-csrf-token'] = json.meta || '';
          }

          var seasons = [];
          var season_num = [];
          var season_count = 0;
          json.player.media.forEach(function (media) {
            if (media.episodes) {
              season_count++;

              if (media.episodes.length) {
                seasons.push(media);
                season_num.push(media.season_id != null ? media.season_id : season_count);
              }
            } else if (media.media && media.episode_id != null && !season_count) {
              season_count++;
              seasons.push({
                season_id: 1,
                season_name: 'Сезон 1',
                episodes: json.player.media
              });
              season_num.push(1);
            }
          });
          extract = {
            seasons: seasons,
            season_num: season_num,
            media: json.player.media
          };
          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }

      function filter() {
        filter_items = {
          season: extract.season_num.map(function (s) {
            return Lampa.Lang.translate('torrent_serial_season') + ' ' + s;
          }),
          season_num: extract.season_num,
          voice: [],
          voice_info: []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (extract.season_num.length) {
          var season = extract.seasons[choice.season];

          if (season && season.episodes) {
            season.episodes.forEach(function (episode) {
              if (episode.media) {
                episode.media.forEach(function (voice) {
                  if (voice.translation_id != null && voice.translation_name != null) {
                    if (!filter_items.voice_info.some(function (v) {
                      return v.id == voice.translation_id;
                    })) {
                      filter_items.voice.push(voice.translation_name);
                      filter_items.voice_info.push({
                        id: voice.translation_id,
                        name: voice.translation_name
                      });
                    }
                  }
                });
              }
            });
          }
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = -1;

          if (choice.voice_id) {
            var voice = filter_items.voice_info.filter(function (v) {
              return v.id == choice.voice_id;
            })[0];
            if (voice) inx = filter_items.voice_info.indexOf(voice);
          }

          if (inx == -1) inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }

      function filtred() {
        var filtred = [];

        if (filter_items.season_num.length) {
          var season = extract.seasons[choice.season];
          var season_num = extract.season_num[choice.season];
          var v = filter_items.voice_info[choice.voice];

          if (season && season.episodes && v) {
            var episode_count = 0;
            season.episodes.forEach(function (episode) {
              episode_count++;

              if (episode.media) {
                episode.media.forEach(function (voice) {
                  if (voice.translation_id == v.id) {
                    var episode_num = episode.episode_id != null ? episode.episode_id : episode_count;
                    filtred.push({
                      title: component.formatEpisodeTitle(season_num, episode_num),
                      quality: voice.max_quality ? voice.max_quality + 'p' : '360p ~ 1080p',
                      info: ' / ' + (voice.translation_name || v.name),
                      season: season_num,
                      episode: episode_count,
                      media: voice
                    });
                  }
                });
              }
            });
          }
        } else {
          extract.media.forEach(function (voice) {
            if (voice.translation_id != null && voice.translation_name != null) {
              filtred.push({
                title: voice.translation_name || select_title,
                quality: voice.max_quality ? voice.max_quality + 'p' : '360p ~ 1080p',
                info: '',
                media: voice
              });
            }
          });
        }

        return filtred;
      }

      function extractItems(str, url) {
        if (!str) return [];

        try {
          var items = component.parseM3U(str).map(function (item) {
            var link = item.link || '';
            if (prefer_mp4) link = link.replace(/(\.mp4):hls:manifest\.m3u8$/i, '$1');
            var quality = item.height;
            var alt_quality = link.match(/\b(\d\d\d+)\./);

            if (alt_quality) {
              var alt_height = parseInt(alt_quality[1]);
              if (alt_height > quality && alt_height <= 4320) quality = alt_height;
            }

            link = component.fixLink(link, url);
            var link_prox = link.indexOf(no_prox) !== -1 ? '' : prox;
            return {
              label: quality ? quality + 'p' : '360p ~ 1080p',
              quality: quality,
              file: component.proxyLink(link, link_prox, prox_enc)
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }

      function parseStream(element, call, error, itemsExtractor, str, url) {
        var file = '';
        var quality = false;
        var items = itemsExtractor(str, url);

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        if (file) {
          element.stream = file;
          element.qualitys = quality;
          call(element);
        } else error();
      }

      function getStreamM3U(element, call, error, file) {
        file = file.replace(/\.mp4:hls:manifest/, '');
        var hls_file = file.replace(/\/\d\d\d+([^\/]*\.m3u8)$/, '/hls$1');
        var link_prox = file.indexOf(no_prox) !== -1 ? '' : prox;
        network.clear();
        network.timeout(5000);
        network["native"](component.proxyLink(hls_file, link_prox, prox_enc), function (str) {
          parseStream(element, call, error, extractItems, str, hls_file);
        }, function (a, c) {
          if (file != hls_file) {
            network.clear();
            network.timeout(5000);
            network["native"](component.proxyLink(file, link_prox, prox_enc), function (str) {
              parseStream(element, call, error, extractItems, str, file);
            }, function (a, c) {
              error();
            }, false, {
              dataType: 'text'
            });
          } else error();
        }, false, {
          dataType: 'text'
        });
      }

      function parseSubs(tracks) {
        if (!(tracks && tracks.length)) return false;
        var subtitles = tracks.filter(function (t) {
          return t.kind === 'captions';
        }).map(function (item) {
          var links = item.src || '';
          var link = links.split(' or ').filter(function (link) {
            return link;
          })[0] || '';
          link = component.fixLinkProtocol(link, prefer_http);
          var link_prox = link.indexOf(no_prox) !== -1 ? '' : prox;
          return {
            label: item.label,
            url: component.proxyLink(link, link_prox, prox_enc)
          };
        }).filter(function (s) {
          return s.url;
        });
        return subtitles.length ? subtitles : false;
      }

      function getStream(element, call, error) {
        if (element.stream) return call(element);
        if (!element.media.playlist) return error();
        var url = component.fixLink(element.media.playlist, embed);
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc2, 'enc2t'), function (json) {
          var url = component.fixLinkProtocol(json && json.url || '', prefer_http);

          if (url) {
            element.subtitles = parseSubs(element.media.tracks);

            if (endsWith(url, '.m3u8')) {
              getStreamM3U(element, call, error, url);
              return;
            }

            var link_prox = url.indexOf(no_prox) !== -1 ? '' : prox;
            element.stream = component.proxyLink(url, link_prox, prox_enc);
            element.qualitys = false;
            call(element);
          } else error();
        }, function (a, c) {
          error();
        }, {}, {
          headers: headers2
        });
      }

      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function lumex2(component, _object) {
      var network = new Lampa.Reguest();
      var extract = [];
      var object = _object;
      var select_title = '';
      var is_playlist = false;
      var embed = atob('aHR0cHM6Ly9hcGkubGFtcGEuc3RyZWFtL2x1bWV4Lw==');
      var api_suffix = '/' + encodeURIComponent(btoa(window.location.href));
      var cub_id = encodeURIComponent(btoa(Lampa.Storage.get('account', '{}').email || 'none'));
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };

      function lumex_api(api, callback, error) {
        var error_check = function error_check(a, c) {
          if (a.status == 404 || a.status == 500 || a.status == 0 && a.statusText !== 'timeout') {
            if (callback) callback('');
          } else if (error) error(network.errorDecode(a, c));
        };

        var success_check = function success_check(json) {
          callback(json);
        };

        network.clear();
        network.timeout(20000);
        network["native"](api, success_check, error_check);
      }

      this.search = function (_object, kinopoisk_id, data) {
        object = _object;
        select_title = object.search || object.movie.title;
        var error = component.empty.bind(component);
        var src = embed + 'sId/' + encodeURIComponent(object.movie.id) + '/mod/';

        if (data && data[0] && data[0].content_type && data[0].id) {
          var imdb_id = data[0].imdb_id || 'null';
          var kp_id = data[0].kp_id || 'null';
          src += encodeURIComponent(kp_id) + '/' + encodeURIComponent(imdb_id);
        } else {
          var _imdb_id = (+kinopoisk_id ? !object.clarification && object.movie.imdb_id : kinopoisk_id) || 'null';

          var _kp_id = +kinopoisk_id ? kinopoisk_id : 'null';

          src += encodeURIComponent(_kp_id) + '/' + encodeURIComponent(_imdb_id);
        }

        var original_title = !object.clarification && (object.movie.original_title || object.movie.original_name) || '';
        var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
        var search_year = parseInt((search_date + '').slice(0, 4));
        component.checkMyIp(function () {
          var ip = Utils.getMyIp();

          if (!ip) {
            error();
            return;
          }

          var api = src + '/' + cub_id + api_suffix;
          api = Lampa.Utils.addUrlComponent(api, 'ip=' + encodeURIComponent(ip));
          api = Lampa.Utils.addUrlComponent(api, 'search=' + encodeURIComponent(select_title));
          api = Lampa.Utils.addUrlComponent(api, 'original_title=' + encodeURIComponent(original_title));
          api = Lampa.Utils.addUrlComponent(api, 'year=' + search_year);
          lumex_api(api, function (json) {
            if (json) success(json);else component.emptyForQuery(select_title);
          }, error);
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };

      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };

      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };

      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function success(json, cookie) {
        component.loading(false);

        if (json && json.folder && Lampa.Arrays.getKeys(json.folder).length) {
          if (json.folder.forEach) {
            extract = json.folder;
            is_playlist = false;
          } else {
            extract = [];
            is_playlist = true;

            for (var voice in json.folder) {
              var seasons = json.folder[voice];

              if (!seasons.forEach) {
                var _loop = function _loop(season_id) {
                  var episodes = seasons[season_id];

                  if (episodes.forEach) {
                    var s = extract.filter(function (s) {
                      return s.season_id === season_id;
                    })[0];

                    if (!s) {
                      s = {
                        season_id: season_id,
                        title: Lampa.Lang.translate('torrent_serial_season') + ' ' + season_id,
                        voices: []
                      };
                      extract.push(s);
                    }

                    s.voices.push({
                      title: voice,
                      episodes: episodes
                    });
                  }
                };

                for (var season_id in seasons) {
                  _loop(season_id);
                }
              }
            }

            extract.sort(function (a, b) {
              return a.season_id - b.season_id;
            });
          }

          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }

      function filter() {
        filter_items = {
          season: is_playlist ? extract.map(function (s) {
            return s.title;
          }) : [],
          voice: []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (is_playlist) {
          var season = extract[choice.season];

          if (season && season.voices) {
            season.voices.forEach(function (voice) {
              filter_items.voice.push(voice.title);
            });
          }
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }

      function filtred() {
        var filtred = [];

        if (is_playlist) {
          var season = extract[choice.season];

          if (season && season.voices) {
            var voice_title = filter_items.voice[choice.voice];
            season.voices.forEach(function (voice) {
              if (voice.title == voice_title && voice.episodes) {
                voice.episodes.forEach(function (episode) {
                  filtred.push({
                    title: component.formatEpisodeTitle(episode.season, episode.episode),
                    quality: episode.quality || '360p ~ 1080p',
                    info: ' / ' + voice_title,
                    season: episode.season + '',
                    episode: episode.episode,
                    media: episode,
                    subtitles: parseSubs(episode.subtitles),
                    vast_url: episode.vast_url,
                    vast_msg: episode.vast_msg
                  });
                });
              }
            });
          }
        } else {
          extract.forEach(function (voice) {
            if (voice.url) {
              filtred.push({
                title: voice.title || select_title,
                quality: voice.quality || '360p ~ 1080p',
                info: '',
                media: voice,
                subtitles: parseSubs(voice.subtitles),
                vast_url: voice.vast_url,
                vast_msg: voice.vast_msg
              });
            }
          });
        }

        return filtred;
      }

      function parseSubs(tracks) {
        if (!(tracks && tracks.forEach)) return false;
        var subtitles = tracks.map(function (item) {
          return {
            label: item.label,
            url: item.url || ''
          };
        }).filter(function (s) {
          return s.url;
        });
        return subtitles.length ? subtitles : false;
      }

      function getStream(element, call, error) {
        if (element.stream) return call(element);
        var ip = Utils.getMyIp();
        if (!element.media.url || !ip) return error();
        var api = element.media.url + '/' + encodeURIComponent(ip) + api_suffix;
        lumex_api(api, function (json) {
          if (json && json.url) {
            element.stream = json.url;
            element.qualitys = json.qualitys || false;
            call(element);
          } else error();
        }, error);
      }

      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                vast_url: element.vast_url,
                vast_msg: element.vast_msg,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      vast_url: elem.vast_url,
                      vast_msg: elem.vast_msg,
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    // ============================================================
    // Парсер для lordfilm.fi
    // ============================================================
    function lordfilm(component, _object) {
        var network = new Lampa.Reguest();
        var extract = {};
        var object = _object;
        var select_title = '';
        var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
        var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;

        // Основной домен и зеркала
        var host = 'https://lordfilm.fi';
        var ref = host + '/';
        var prox = component.proxy('lordfilm');

        // User-Agent и заголовки
        var user_agent = Utils.baseUserAgent();
        var headers = Lampa.Platform.is('android') ? {
            'Origin': host,
            'Referer': ref,
            'User-Agent': user_agent
        } : {};

        // Прокси-заголовки
        var prox_enc = '';
        if (prox) {
            prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
            prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
            prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
        }

        // Фильтры и выбор
        var filter_items = {};
        var choice = {
            season: 0,
            voice: 0,
            voice_name: '',
            season_id: ''
        };
        var error_message = '';

        /**
         * Поиск контента
         */
        this.search = function (_object, kinopoisk_id, data) {
            object = _object;
            select_title = object.search || object.movie.title;
            error_message = '';

            var search_date = object.search_date || 
                             (!object.clarification && (object.movie.release_date || object.movie.first_air_date)) || 
                             '0000';
            var search_year = parseInt((search_date + '').slice(0, 4));

            // Собираем альтернативные названия
            var orig_titles = [];
            if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
                orig_titles = object.movie.alternative_titles.results.map(function(t) { return t.title; });
            }
            if (object.movie.original_title) orig_titles.push(object.movie.original_title);
            if (object.movie.original_name) orig_titles.push(object.movie.original_name);

            // Формируем поисковый запрос
            var search_query = component.cleanTitle(select_title);
            var url = host + '/index.php?do=search';
            var postdata = 'do=search&subaction=search&search_start=0&full_search=0&result_from=1&story=' + 
                           encodeURIComponent(search_query);

            // Выполняем поиск
            network.clear();
            network.timeout(15000);
            network.native(
                component.proxyLink(url, prox, prox_enc, 'enc2t'),
                function(str) {
                    str = (str || '').replace(/\n/g, '');
                    checkErrorForm(str);

                    // Парсим результаты поиска
                    var items = parseSearchResults(str);

                    if (items && items.length) {
                        // Фильтруем по году и названию
                        var filtered = filterSearchResults(items, orig_titles, search_year);

                        if (filtered.length === 1) {
                            // Если нашли точное совпадение - переходим на страницу
                            getPage(filtered[0].link);
                        } else if (filtered.length > 1) {
                            // Показываем список для выбора
                            showSimilarItems(filtered);
                        } else {
                            // Показываем все результаты как похожие
                            showSimilarItems(items);
                        }
                    } else {
                        component.emptyForQuery(select_title);
                    }
                },
                function(a, c) {
                    component.empty(network.errorDecode(a, c));
                },
                postdata,
                {
                    dataType: 'text',
                    headers: headers
                }
            );
        };

        /**
         * Парсинг результатов поиска
         */
        function parseSearchResults(html) {
            var items = [];
            var regex = /<div class="th-item">\s*<a href="([^"]+)"[^>]*>\s*<img[^>]+alt="([^"]+)"[^>]*>/gi;
            var match;

            while ((match = regex.exec(html)) !== null) {
                var link = match[1];
                var title = match[2].trim();

                // Извлекаем год из названия
                var year = null;
                var yearMatch = title.match(/\((\d{4})\)/);
                if (yearMatch) {
                    year = parseInt(yearMatch[1]);
                    title = title.replace(/\s*\(\d{4}\)\s*/, ' ').trim();
                }

                items.push({
                    title: title,
                    orig_title: '',
                    year: year,
                    link: fixLink(link, host)
                });
            }

            return items;
        }

        /**
         * Фильтрация результатов поиска
         */
        function filterSearchResults(items, orig_titles, search_year) {
            var filtered = items;

            // Фильтр по оригинальному названию
            if (orig_titles.length) {
                var tmp = filtered.filter(function(c) {
                    return component.containsAnyTitle([c.orig_title, c.title], orig_titles);
                });
                if (tmp.length) filtered = tmp;
            }

            // Фильтр по поисковому запросу
            if (select_title) {
                var tmp = filtered.filter(function(c) {
                    return component.containsAnyTitle([c.title, c.orig_title], [select_title]);
                });
                if (tmp.length) filtered = tmp;
            }

            // Фильтр по году
            if (filtered.length > 1 && search_year) {
                var tmp = filtered.filter(function(c) {
                    return c.year == search_year;
                });
                if (tmp.length) filtered = tmp;
            }

            return filtered;
        }

        /**
         * Отображение списка похожих
         */
        function showSimilarItems(items) {
            component.similars(items.map(function(item) {
                return {
                    title: item.title + (item.year ? ' (' + item.year + ')' : ''),
                    orig_title: item.orig_title,
                    year: item.year,
                    link: item.link,
                    is_similars: true
                };
            }));
            component.loading(false);
        }

        /**
         * Получение страницы с видео
         */
        function getPage(url) {
            component.loading(true);
            network.clear();
            network.timeout(15000);
            network.native(
                component.proxyLink(url, prox, prox_enc, 'enc2t'),
                function(str) {
                    str = (str || '').replace(/\n/g, '');
                    checkErrorForm(str);

                    // Парсим страницу
                    var pageData = parsePage(str, url);

                    if (pageData && pageData.seasons && pageData.seasons.length) {
                        extract = pageData;
                        filter();
                        append(filtred());
                    } else {
                        component.empty('Не удалось найти видео');
                    }
                },
                function(a, c) {
                    component.empty(network.errorDecode(a, c));
                },
                null,
                {
                    dataType: 'text',
                    headers: headers
                }
            );
        }

        /**
         * Парсинг страницы с видео
         */
        function parsePage(html, baseUrl) {
            var result = {
                seasons: [],
                voices: []
            };

            // Извлекаем ID фильма
            var idMatch = html.match(/news_id\s*[:=]\s*['"]?(\d+)['"]?/i);
            if (!idMatch) return null;
            var newsId = idMatch[1];

            // Парсим серии/сезоны
            var seriesMatch = html.match(/var\s+series\s*=\s*(\{.*?\});/s);
            if (seriesMatch) {
                try {
                    var seriesData = eval('(' + seriesMatch[1] + ')');

                    // Парсим озвучки
                    var translators = {};
                    var transMatch = html.match(/var\s+translators\s*=\s*(\{.*?\});/s);
                    if (transMatch) {
                        try {
                            translators = eval('(' + transMatch[1] + ')');
                        } catch(e) {}
                    }

                    // Формируем структуру
                    for (var seasonId in seriesData) {
                        var episodes = seriesData[seasonId];
                        if (!Array.isArray(episodes)) continue;

                        var seasonNum = parseInt(seasonId);
                        var season = {
                            season_id: seasonNum,
                            title: 'Сезон ' + seasonNum,
                            episodes: []
                        };

                        episodes.forEach(function(epData, index) {
                            var episodeNum = index + 1;
                            var episode = {
                                season: seasonNum,
                                episode: episodeNum,
                                title: 'Серия ' + episodeNum,
                                media: []
                            };

                            // Парсим ссылки для каждой озвучки
                            for (var voiceId in epData) {
                                var voiceData = epData[voiceId];
                                var voiceName = translators[voiceId] || 'Озвучка ' + voiceId;

                                // Определяем качество
                                var quality = '720p';
                                var fileUrl = voiceData;

                                // Если это массив с разными качествами
                                if (Array.isArray(voiceData)) {
                                    // Берем максимальное качество
                                    var best = voiceData[voiceData.length - 1];
                                    if (best && best.file) {
                                        fileUrl = best.file;
                                        quality = best.quality || '720p';
                                    }
                                } else if (typeof voiceData === 'string') {
                                    fileUrl = voiceData;
                                }

                                if (fileUrl) {
                                    episode.media.push({
                                        translation_id: voiceId,
                                        translation_name: voiceName,
                                        quality: quality,
                                        url: fixLink(fileUrl, baseUrl),
                                        playlist: fixLink(fileUrl, baseUrl)
                                    });
                                }
                            }

                            if (episode.media.length) {
                                season.episodes.push(episode);
                            }
                        });

                        if (season.episodes.length) {
                            result.seasons.push(season);
                        }
                    }
                } catch(e) {
                    console.error('Error parsing series:', e);
                }
            }

            // Если это фильм (не сериал)
            if (!result.seasons.length) {
                // Парсим плеер
                var playerMatch = html.match(/<iframe[^>]+src=["']([^"']+)["']/i);
                if (playerMatch) {
                    var playerUrl = fixLink(playerMatch[1], baseUrl);
                    result.seasons.push({
                        season_id: 0,
                        title: 'Фильм',
                        episodes: [{
                            season: 0,
                            episode: 1,
                            title: 'Фильм',
                            media: [{
                                translation_id: '0',
                                translation_name: 'Оригинал',
                                quality: '720p',
                                url: playerUrl,
                                playlist: playerUrl
                            }]
                        }]
                    });
                }
            }

            return result;
        }

        /**
         * Проверка ошибок
         */
        function checkErrorForm(str) {
            if (str.indexOf('404 Not Found') !== -1) {
                error_message = 'Страница не найдена';
                return;
            }
            if (str.indexOf('Access denied') !== -1) {
                error_message = 'Доступ запрещен';
                return;
            }
        }

        /**
         * Исправление ссылок
         */
        function fixLink(link, base) {
            if (!link) return '';
            if (link.indexOf('://') !== -1) return link;
            if (link.indexOf('//') === 0) return 'https:' + link;
            if (link.indexOf('/') === 0) return host + link;
            return base + '/' + link;
        }

        /**
         * Построение фильтра
         */
        function filter() {
            filter_items = {
                season: extract.seasons.map(function(s) {
                    return s.title;
                }),
                voice: []
            };
            
            if (!filter_items.season[choice.season]) choice.season = 0;
            
            var season = extract.seasons[choice.season];
            if (season && season.episodes) {
                var voices = {};
                season.episodes.forEach(function(ep) {
                    ep.media.forEach(function(m) {
                        if (m.translation_id && m.translation_name) {
                            voices[m.translation_id] = m.translation_name;
                        }
                    });
                });
                filter_items.voice = Object.values(voices);
            }
            
            if (!filter_items.voice[choice.voice]) choice.voice = 0;
            
            component.filter(filter_items, choice);
        }

        /**
         * Получение отфильтрованных элементов
         */
        function filtred() {
            var items = [];
            var season = extract.seasons[choice.season];
            
            if (!season) return items;
            
            var voiceName = filter_items.voice[choice.voice] || '';
            
            season.episodes.forEach(function(ep) {
                var voice = ep.media.filter(function(m) {
                    return m.translation_name === voiceName;
                })[0];
                
                if (voice) {
                    items.push({
                        title: component.formatEpisodeTitle(season.season_id, ep.episode),
                        quality: voice.quality || '720p',
                        info: ' / ' + voiceName,
                        season: season.season_id,
                        episode: ep.episode,
                        media: voice
                    });
                }
            });
            
            return items;
        }

        /**
         * Получение потока
         */
        function getStream(element, call, error) {
            if (element.stream) return call(element);
            if (!element.media.url) return error();
            
            var url = element.media.url;
            var link_prox = prox;
            
            // Если это iframe - пытаемся извлечь прямую ссылку
            if (url.indexOf('iframe') !== -1 || url.indexOf('player') !== -1) {
                network.clear();
                network.timeout(10000);
                network.native(
                    component.proxyLink(url, link_prox, prox_enc, 'enc2t'),
                    function(html) {
                        var directLink = extractDirectLink(html);
                        if (directLink) {
                            element.stream = component.proxyLink(directLink, link_prox, prox_enc);
                            element.qualitys = false;
                            call(element);
                        } else {
                            // Если не удалось извлечь - используем iframe
                            element.stream = url;
                            element.qualitys = false;
                            call(element);
                        }
                    },
                    function() {
                        element.stream = url;
                        element.qualitys = false;
                        call(element);
                    },
                    null,
                    { dataType: 'text', headers: headers }
                );
            } else {
                // Прямая ссылка
                element.stream = component.proxyLink(url, link_prox, prox_enc);
                element.qualitys = false;
                call(element);
            }
        }

        /**
         * Извлечение прямой ссылки из iframe
         */
        function extractDirectLink(html) {
            // Ищем ссылку на видео в различных форматах
            var patterns = [
                /file\s*[:=]\s*["']([^"']+\.(?:m3u8|mp4|mkv))["']/i,
                /url\s*[:=]\s*["']([^"']+\.(?:m3u8|mp4|mkv))["']/i,
                /src\s*[:=]\s*["']([^"']+\.(?:m3u8|mp4|mkv))["']/i,
                /video\s*[:=]\s*["']([^"']+\.(?:m3u8|mp4|mkv))["']/i,
                /<source[^>]+src=["']([^"']+\.(?:m3u8|mp4|mkv))["']/i,
                /href=["']([^"']+\.(?:m3u8|mp4|mkv))["']/i
            ];
            
            for (var i = 0; i < patterns.length; i++) {
                var match = html.match(patterns[i]);
                if (match) {
                    return fixLink(match[1], host);
                }
            }
            return null;
        }

        /**
         * Добавление видео в интерфейс
         */
        function append(items) {
            component.reset();
            var viewed = Lampa.Storage.cache('online_view', 5000, []);
            var last_episode = component.getLastEpisode(items);
            
            items.forEach(function(element) {
                if (element.season) {
                    element.translate_episode_end = last_episode;
                    element.translate_voice = filter_items.voice[choice.voice];
                }
                
                var hash = Lampa.Utils.hash(
                    element.season ? 
                    [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : 
                    object.movie.original_title
                );
                var view = Lampa.Timeline.view(hash);
                var item = Lampa.Template.get('online_mod', element);
                var hash_file = Lampa.Utils.hash(
                    element.season ? 
                    [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : 
                    object.movie.original_title + element.title
                );
                
                element.timeline = view;
                item.append(Lampa.Timeline.render(view));
                
                if (Lampa.Timeline.details) {
                    item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
                }
                
                if (viewed.indexOf(hash_file) !== -1) {
                    item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                }
                
                item.on('hover:enter', function() {
                    if (element.loading) return;
                    if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
                    element.loading = true;
                    
                    getStream(element, function(element) {
                        element.loading = false;
                        var first = {
                            url: component.getDefaultQuality(element.qualitys, element.stream),
                            quality: component.renameQualityMap(element.qualitys),
                            subtitles: element.subtitles,
                            timeline: element.timeline,
                            title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
                        };
                        
                        Lampa.Player.play(first);
                        
                        if (element.season && Lampa.Platform.version) {
                            var playlist = [];
                            items.forEach(function(elem) {
                                if (elem == element) {
                                    playlist.push(first);
                                } else {
                                    var cell = {
                                        url: function(call) {
                                            getStream(elem, function(elem) {
                                                cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                                                cell.quality = component.renameQualityMap(elem.qualitys);
                                                cell.subtitles = elem.subtitles;
                                                call();
                                            }, function() {
                                                cell.url = '';
                                                call();
                                            });
                                        },
                                        timeline: elem.timeline,
                                        title: elem.title
                                    };
                                    playlist.push(cell);
                                }
                            });
                            Lampa.Player.playlist(playlist);
                        } else {
                            Lampa.Player.playlist([first]);
                        }
                        
                        if (viewed.indexOf(hash_file) == -1) {
                            viewed.push(hash_file);
                            item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                            Lampa.Storage.set('online_view', viewed);
                        }
                    }, function() {
                        element.loading = false;
                        Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
                    });
                });
                
                component.append(item);
                component.contextmenu({
                    item: item,
                    view: view,
                    viewed: viewed,
                    hash_file: hash_file,
                    element: element,
                    file: function(call) {
                        getStream(element, function(element) {
                            call({
                                file: element.stream,
                                quality: element.qualitys
                            });
                        }, function() {
                            Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
                        });
                    }
                });
            });
            
            component.start(true);
        }

        // Обязательные методы интерфейса
        this.extendChoice = function(saved) {
            Lampa.Arrays.extend(choice, saved, true);
        };

        this.reset = function() {
            component.reset();
            choice = { season: 0, voice: 0, voice_name: '', season_id: '' };
            filter();
            append(filtred());
            component.saveChoice(choice);
        };

        this.filter = function(type, a, b) {
            choice[a.stype] = b.index;
            if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
            component.reset();
            filter();
            append(filtred());
            component.saveChoice(choice);
        };

        this.destroy = function() {
            network.clear();
            extract = null;
        };
    }

    // ============================================================
    // Регистрация модулей
    // ============================================================
    Lampa.Mods.add({
        id: 'lumex',
        title: 'Lumex',
        parser: function(component, object) {
            return new lumex(component, object);
        }
    });

    Lampa.Mods.add({
        id: 'lumex2',
        title: 'Lumex 2',
        parser: function(component, object) {
            return new lumex2(component, object);
        }
    });

    Lampa.Mods.add({
        id: 'lordfilm',
        title: 'Lordfilm',
        parser: function(component, object) {
            return new lordfilm(component, object);
        }
    });

})();
