var client_id =58;
/*    */
var type_of_work_coef = {
	'58_1': 1.00,'58_2': 0.60,'58_3': 1.00
}

var bundles_coef = {
	'58_1': 0.58,'58_2': 14.99,'58_3': 14.99,'58_4': 9.99,'58_5': 19.99,'58_6': 29.99,'58_7': 0.50,'58_8': 9.99,'58_10': 4.99,'58_12': 3.99,'58_24': 29.99,'58_31': 4.99
}

if((typeof(ab_sys_prices)!='undefined' && ab_sys_prices=='2') || (typeof(ab_sys_prices_357)!='undefined' && ab_sys_prices_357=='2')){ 
    var ac_level_deadline_coef = {
            '5801_5801': 26.00,'5801_5802': 25.00,'5801_5803': 22.00,'5801_5804': 20.00,'5801_5805': 18.00,'5801_5806': 17.00,'5801_5807': 0.00,'5801_5808': 15.00,'5801_5809': 0.00,'5801_5810': 0.00,'5801_5811': 14.00,'5801_5812': 0.00,'5801_5813': 0.00,'5801_5814': 0.00,'5801_5815': 13.00,'5801_5833': 13.00,'5801_5834': 13.00,'5801_5835': 37.00,'5801_5836': 34.00,'5801_5837': 30.00,'5801_5838': 52.00,'5801_5839': 13.00,'5802_5801': 0.00,'5802_5802': 25.00,'5802_5803': 22.00,'5802_5804': 20.00,'5802_5805': 18.00,'5802_5806': 17.00,'5802_5807': 0.00,'5802_5808': 15.00,'5802_5809': 0.00,'5802_5810': 0.00,'5802_5811': 14.00,'5802_5812': 0.00,'5802_5813': 0.00,'5802_5814': 0.00,'5802_5815': 13.00,'5802_5833': 11.00,'5802_5834': 11.00,'5802_5835': 37.00,'5802_5836': 34.00,'5802_5837': 30.00,'5802_5838': 52.00,'5802_5839': 11.00,'5803_5801': 0.00,'5803_5802': 30.00,'5803_5803': 25.00,'5803_5804': 23.00,'5803_5805': 21.00,'5803_5806': 20.00,'5803_5807': 0.00,'5803_5808': 19.00,'5803_5809': 0.00,'5803_5810': 0.00,'5803_5811': 18.00,'5803_5812': 0.00,'5803_5813': 0.00,'5803_5814': 0.00,'5803_5815': 17.00,'5803_5833': 17.00,'5803_5834': 17.00,'5803_5835': 42.00,'5803_5836': 39.00,'5803_5837': 34.00,'5803_5838': 59.00,'5803_5839': 17.00,'5804_5801': 0.00,'5804_5802': 0.00,'5804_5803': 0.00,'5804_5804': 0.00,'5804_5805': 0.00,'5804_5806': 0.00,'5804_5807': 0.00,'5804_5808': 0.00,'5804_5809': 0.00,'5804_5810': 0.00,'5804_5811': 0.00,'5804_5812': 0.00,'5804_5813': 0.00,'5804_5814': 0.00,'5804_5815': 0.00,'5804_5833': 0.00,'5804_5834': 0.00,'5804_5835': 0.00,'5804_5836': 0.00,'5804_5837': 0.00,'5804_5838': 0.00,'5804_5839': 0.00,'5805_5801': 0.00,'5805_5802': 49.33,'5805_5803': 42.00,'5805_5804': 38.00,'5805_5805': 35.33,'5805_5806': 33.33,'5805_5807': 0.00,'5805_5808': 30.00,'5805_5809': 0.00,'5805_5810': 0.00,'5805_5811': 28.00,'5805_5812': 0.00,'5805_5813': 0.00,'5805_5814': 0.00,'5805_5815': 26.00,'5805_5833': 26.00,'5805_5834': 26.00,'5805_5835': 103.33,'5805_5836': 85.33,'5805_5837': 66.00,'5805_5838': 132.66,'5805_5839': 26.00,'5806_5801': 0.00,'5806_5802': 22.00,'5806_5803': 19.00,'5806_5804': 17.00,'5806_5805': 14.00,'5806_5806': 13.00,'5806_5807': 0.00,'5806_5808': 12.00,'5806_5809': 0.00,'5806_5810': 0.00,'5806_5811': 11.00,'5806_5812': 0.00,'5806_5813': 0.00,'5806_5814': 0.00,'5806_5815': 9.00,'5806_5833': 9.00,'5806_5834': 9.00,'5806_5835': 34.00,'5806_5836': 31.00,'5806_5837': 26.00,'5806_5838': 48.00,'5806_5839': 9.00,'5807_5801': 0.00,'5807_5802': 33.00,'5807_5803': 28.00,'5807_5804': 25.00,'5807_5805': 23.00,'5807_5806': 22.00,'5807_5807': 0.00,'5807_5808': 21.00,'5807_5809': 0.00,'5807_5810': 0.00,'5807_5811': 20.00,'5807_5812': 0.00,'5807_5813': 0.00,'5807_5814': 0.00,'5807_5815': 19.00,'5807_5833': 19.00,'5807_5834': 19.00,'5807_5835': 44.00,'5807_5836': 41.00,'5807_5837': 36.00,'5807_5838': 62.00,'5807_5839': 19.00,'5808_5801': 0.00,'5808_5802': 0.00,'5808_5803': 0.00,'5808_5804': 0.00,'5808_5805': 0.00,'5808_5806': 0.00,'5808_5807': 0.00,'5808_5808': 0.00,'5808_5809': 0.00,'5808_5810': 0.00,'5808_5811': 0.00,'5808_5812': 0.00,'5808_5813': 0.00,'5808_5814': 0.00,'5808_5815': 0.00,'5808_5833': 0.00,'5808_5834': 0.00,'5808_5835': 0.00,'5808_5836': 0.00,'5808_5837': 0.00,'5808_5838': 0.00,'5808_5839': 0.00,'5809_5801': 0.00,'5809_5802': 36.00,'5809_5803': 31.00,'5809_5804': 29.00,'5809_5805': 26.00,'5809_5806': 25.00,'5809_5807': 0.00,'5809_5808': 24.00,'5809_5809': 0.00,'5809_5810': 0.00,'5809_5811': 23.00,'5809_5812': 0.00,'5809_5813': 0.00,'5809_5814': 0.00,'5809_5815': 21.00,'5809_5833': 21.00,'5809_5834': 21.00,'5809_5835': 47.00,'5809_5836': 44.00,'5809_5837': 40.00,'5809_5838': 66.00,'5809_5839': 21.00,'5810_5801': 0.00,'5810_5802': 30.00,'5810_5803': 25.00,'5810_5804': 23.00,'5810_5805': 21.00,'5810_5806': 20.00,'5810_5807': 0.00,'5810_5808': 19.00,'5810_5809': 0.00,'5810_5810': 0.00,'5810_5811': 18.00,'5810_5812': 0.00,'5810_5813': 0.00,'5810_5814': 0.00,'5810_5815': 17.00,'5810_5833': 17.00,'5810_5834': 17.00,'5810_5835': 42.00,'5810_5836': 39.00,'5810_5837': 34.00,'5810_5838': 59.00,'5810_5839': 17.00
    }     
}else{
    var ac_level_deadline_coef = {
            '5801_5801': 26.00,'5801_5802': 26.00,'5801_5803': 23.00,'5801_5804': 21.00,'5801_5805': 19.00,'5801_5806': 18.00,'5801_5807': 12.00,'5801_5808': 16.00,'5801_5809': 8.00,'5801_5810': 8.00,'5801_5811': 15.00,'5801_5812': 6.00,'5801_5813': 6.00,'5801_5814': 6.00,'5801_5815': 13.00,'5801_5833': 13.00,'5801_5834': 13.00,'5801_5835': 38.00,'5801_5836': 35.00,'5801_5837': 31.00,'5801_5838': 52.00,'5801_5839': 13.00,'5802_5801': 31.00,'5802_5802': 25.00,'5802_5803': 22.00,'5802_5804': 20.00,'5802_5805': 18.00,'5802_5806': 17.00,'5802_5807': 12.00,'5802_5808': 15.00,'5802_5809': 8.00,'5802_5810': 8.00,'5802_5811': 14.00,'5802_5812': 6.00,'5802_5813': 6.00,'5802_5814': 6.00,'5802_5815': 13.00,'5802_5833': 13.00,'5802_5834': 13.00,'5802_5835': 37.00,'5802_5836': 34.00,'5802_5837': 30.00,'5802_5838': 52.00,'5802_5839': 13.00,'5803_5801': 29.00,'5803_5802': 31.00,'5803_5803': 26.00,'5803_5804': 24.00,'5803_5805': 22.00,'5803_5806': 21.00,'5803_5807': 14.00,'5803_5808': 20.00,'5803_5809': 9.00,'5803_5810': 9.00,'5803_5811': 19.00,'5803_5812': 8.00,'5803_5813': 8.00,'5803_5814': 8.00,'5803_5815': 17.00,'5803_5833': 17.00,'5803_5834': 17.00,'5803_5835': 43.00,'5803_5836': 40.00,'5803_5837': 35.00,'5803_5838': 59.00,'5803_5839': 17.00,'5804_5801': 39.00,'5804_5802': 25.00,'5804_5803': 22.00,'5804_5804': 20.00,'5804_5805': 14.00,'5804_5806': 12.00,'5804_5807': 17.00,'5804_5808': 11.00,'5804_5809': 11.00,'5804_5810': 11.00,'5804_5811': 15.00,'5804_5812': 10.00,'5804_5813': 10.00,'5804_5814': 10.00,'5804_5815': 14.00,'5804_5833': 14.00,'5804_5834': 14.00,'5804_5835': 39.00,'5804_5836': 32.00,'5804_5837': 28.00,'5804_5838': 39.00,'5804_5839': 14.00,'5805_5801': 85.00,'5805_5802': 49.33,'5805_5803': 42.00,'5805_5804': 38.00,'5805_5805': 35.33,'5805_5806': 33.33,'5805_5807': 22.67,'5805_5808': 30.00,'5805_5809': 17.33,'5805_5810': 17.33,'5805_5811': 28.00,'5805_5812': 15.33,'5805_5813': 15.33,'5805_5814': 15.33,'5805_5815': 26.00,'5805_5833': 26.00,'5805_5834': 26.00,'5805_5835': 103.33,'5805_5836': 85.33,'5805_5837': 66.00,'5805_5838': 132.66,'5805_5839': 26.00,'5806_5801': 0.00,'5806_5802': 23.00,'5806_5803': 20.00,'5806_5804': 18.00,'5806_5805': 15.00,'5806_5806': 14.00,'5806_5807': 0.00,'5806_5808': 13.00,'5806_5809': 0.00,'5806_5810': 0.00,'5806_5811': 12.00,'5806_5812': 0.00,'5806_5813': 0.00,'5806_5814': 0.00,'5806_5815': 9.00,'5806_5833': 9.00,'5806_5834': 9.00,'5806_5835': 35.00,'5806_5836': 32.00,'5806_5837': 27.00,'5806_5838': 48.00,'5806_5839': 9.00,'5807_5801': 0.00,'5807_5802': 34.00,'5807_5803': 29.00,'5807_5804': 26.00,'5807_5805': 24.00,'5807_5806': 23.00,'5807_5807': 0.00,'5807_5808': 22.00,'5807_5809': 0.00,'5807_5810': 0.00,'5807_5811': 21.00,'5807_5812': 0.00,'5807_5813': 0.00,'5807_5814': 0.00,'5807_5815': 20.00,'5807_5833': 19.00,'5807_5834': 19.00,'5807_5835': 45.00,'5807_5836': 42.00,'5807_5837': 37.00,'5807_5838': 62.00,'5807_5839': 19.00,'5808_5801': 0.00,'5808_5802': 0.00,'5808_5803': 0.00,'5808_5804': 0.00,'5808_5805': 0.00,'5808_5806': 0.00,'5808_5807': 0.00,'5808_5808': 0.00,'5808_5809': 0.00,'5808_5810': 0.00,'5808_5811': 0.00,'5808_5812': 0.00,'5808_5813': 0.00,'5808_5814': 0.00,'5808_5815': 0.00,'5808_5833': 0.00,'5808_5834': 0.00,'5808_5835': 0.00,'5808_5836': 0.00,'5808_5837': 0.00,'5808_5838': 0.00,'5808_5839': 0.00,'5809_5801': 0.00,'5809_5802': 37.00,'5809_5803': 32.00,'5809_5804': 30.00,'5809_5805': 27.00,'5809_5806': 26.00,'5809_5807': 0.00,'5809_5808': 25.00,'5809_5809': 0.00,'5809_5810': 0.00,'5809_5811': 24.00,'5809_5812': 0.00,'5809_5813': 0.00,'5809_5814': 0.00,'5809_5815': 22.00,'5809_5833': 21.00,'5809_5834': 21.00,'5809_5835': 48.00,'5809_5836': 45.00,'5809_5837': 41.00,'5809_5838': 66.00,'5809_5839': 21.00,'5810_5801': 0.00,'5810_5802': 30.00,'5810_5803': 25.00,'5810_5804': 23.00,'5810_5805': 21.00,'5810_5806': 20.00,'5810_5807': 0.00,'5810_5808': 19.00,'5810_5809': 0.00,'5810_5810': 0.00,'5810_5811': 18.00,'5810_5812': 0.00,'5810_5813': 0.00,'5810_5814': 0.00,'5810_5815': 17.00,'5810_5833': 17.00,'5810_5834': 17.00,'5810_5835': 42.00,'5810_5836': 39.00,'5810_5837': 34.00,'5810_5838': 59.00,'5810_5839': 17.00
    }    
}

var type_of_paper_coef = {
	'58_580016': 1.00,'58_580017': 1.00,'58_580033': 1.00,'58_580015': 1.00,'58_580019': 1.00,'58_580040': 1.00,'58_580005': 1.00,'58_580012': 1.00,'58_580034': 1.00,'58_580013': 1.00,'58_580008': 1.00,'58_580001': 1.00,'58_580018': 1.00,'58_580002': 1.00,'58_580024': 1.00,'58_580006': 1.00,'58_581045': 1.00,'58_580078': 1.00,'58_580004': 1.00,'58_580060': 1.00,'58_581044': 1.00,'58_580030': 1.00,'58_580003': 1.00,'58_580009': 1.00,'58_580056': 1.00,'58_580007': 1.00,'58_580011': 1.00,'58_580028': 1.00,'58_581037': 1.00,'58_580010': 1.00,'58_580021': 1.00,'58_580020': 1.00,'58_580027': 1.00,'58_580023': 1.00,'58_580022': 1.00,'58_580025': 1.00,'58_581034': 1.00,'58_580026': 1.00,'58_580066': 1.00,'58_580065': 1.00,'58_580064': 1.00,'58_580067': 1.00,'58_580062': 1.00,'58_580063': 1.00,'58_580061': 1.00,'58_580068': 1.00,'58_581038': 0.10,'58_581039': 1.50,'58_580043': 1.00,'58_580014': 1.50,'58_580029': 1.50,'58_580031': 1.50,'58_580058': 1.50,'58_580032': 1.50,'58_580059': 1.50,'58_581041': 1.00,'58_580999': 1.00
}

var ser_package_deadline_coef = {
	
}

var quality_deadline_coef = {
	
}

var type_of_paper_ac_level_deadline_coef = {
	
}

var ac_level_deadline_words_grid_coef = {
    
}

var ac_level_deadline_slides_coef = {
    
}

var package_deadline_coef = {
    '1_5835': 21.00,'1_5836': 17.00,'1_5837': 14.00,'1_5802': 13.00,'1_5803': 12.00,'1_5804': 10.00,'1_5807': 9.00,'1_5811': 8.00,'1_5815': 6.00,'2_5835': 33.00,'2_5836': 27.00,'2_5837': 23.00,'2_5802': 21.00,'2_5803': 20.00,'2_5804': 19.00,'2_5807': 17.00,'2_5811': 14.00,'2_5815': 13.00,'3_5835': 44.00,'3_5836': 40.00,'3_5837': 39.00,'3_5802': 37.00,'3_5803': 35.00,'3_5804': 34.00,'3_5807': 32.00,'3_5811': 31.00,'3_5815': 29.00
}

var words_grid = '{"3":{"id":"3","name":"250 words","min":"1","max":"374"},"6":{"id":"6","name":"500 words","min":"375","max":"624"},"9":{"id":"9","name":"750 words","min":"625","max":"874"},"12":{"id":"12","name":"1000 words","min":"875","max":"1124"},"15":{"id":"15","name":"more 1000 words","min":"1125","max":null}}';

function wpc_getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function wpc_setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

if (window.jQuery) {
    $(document).ready(function () {
        try {
            var src = $("#hidden_frame").attr("src");            
            if (src) {
                if (!wpc_getCookie("wpc_pid")) {
                    pid = -1;
                    var match = src.match(/pid=([0-9]+)/);
                    if (match) {
                        pid = match[1];
                    }
                    subid = "";
                    var match = src.match(/sub_id=([^&]+)/);
                    if (match) {
                        subid = match[1];
                    }
                    if (pid != -1) {                        
                        wpc_setCookie("wpc_pid",pid);
                        if (subid != "") {
                            wpc_setCookie("wpc_subid",subid);
                        }
                    }
                    
                }    
            }
            if (wpc_getCookie("wpc_pid")) {
                pid = wpc_getCookie("wpc_pid");
                if (wpc_getCookie("wpc_subid")) {
                    subid = wpc_getCookie("wpc_subid");
                } else {
                    subid = "";
                }
                $("a[href*='writemyessays.net']").each(function() {
                    var href = $(this).attr("href");
                    if(href.indexOf("pid=") == -1) {
                        if(href.indexOf("?") == -1) {
                            href = href + "?";
                        } else {
                            href = href + "&";
                        }
                        href = href + "pid=" + pid;
                        if (subid) {
                            href = href + "&sub_id=" + subid;
                        }
                        $(this).attr("href",href);
                    }
                });
                $("form[action*='writemyessays.net']").each(function() {
                    var href = $(this).attr("action");                    
                    if(href.indexOf("pid=") == -1) {
                        if(href.indexOf("?") == -1) {
                            href = href + "?";
                        } else {
                            href = href + "&";
                        }
                        href = href + "pid=" + pid;
                        if (subid) {
                            href = href + "&sub_id=" + subid;
                        }
                        $(this).attr("action",href);
                    }
                });
            }
        } catch (err) {
        }
    });
}