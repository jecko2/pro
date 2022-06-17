(function () {
    var WIDGET = {
                targetNode: document.getElementById('root'),
                styleElements: [],
        scriptElements: [],
    };

    
    function addStyle(href) {
        if (document.querySelector('link[href="' + href + '"]')) return;
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        if (WIDGET.shadowSupported) {
            WIDGET.targetNode.appendChild(link);
        } else {
            document.head.appendChild(link);
        }
    }

    function addScript(src) {
        if (document.querySelector('script[src="' + src + '"]')) return;
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
        WIDGET.scriptElements.push(script);
    }

        addStyle('/rcapp-assets/components.css');
        addStyle('/assets/customer-dashboard/commons.e8579876.css');
        addStyle('/assets/customer-dashboard/2.ba2b0cf5.css');
        addStyle('/assets/customer-dashboard/1.367fb515.css');
    
        addScript('/rcapp-assets/components.js');
        addScript('/assets/customer-dashboard/commons.f8293950.js');
        addScript('/assets/customer-dashboard/2.77bad908.js');
        addScript('/assets/customer-dashboard/1.13af207d.js');
    

    (function () {

    function init() {
        Array.prototype.slice.call(WIDGET.targetNode.children).forEach(function(child) {
            if (WIDGET.styleElements.indexOf(child) > -1) return;
            child.parentNode.removeChild(child);
        })

        var contentContainer = document.createElement('div');
        WIDGET.targetNode.appendChild(contentContainer);

        try {
          __CWT_CD_main__.default({
                
                                basename: 'dashboard',
                            });
          __CWT_CD_app__.default({
                target: contentContainer,

                                app: 'standalone\u002Dform',
                
                rcappComponents: window.rcappComponents,

                                orderformPurpose: 'newOrder',
                
                                topPadding: JSON.parse('0'),
                            });
        } catch (e) {
            if (typeof raven === 'object') {
                raven.captureException(e, {logger: 'rcapp'});
            } else if (typeof ga === 'function') {
                ga('send', 'exception', {exDescription: e.message, exFatal: true});
            }
            throw e;
        }
    }

    if (typeof __CWT_CD_app__ !== 'undefined') {
        init();
    } else {
        window.addEventListener('rcapp-loaded', init);
    }
})();

    })();