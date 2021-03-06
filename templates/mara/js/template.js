'use strict';
config.tpl = {
    html:{
        header: 'header.html',
        toolbar: 'toolbar.html',
        middle: 'middle.html',     
    },
    target: document.body,
}

class template{
    constructor(id){
         var a = new api(this);
         $('<link>')
          .appendTo('head')
          .attr({
              type: 'text/css', 
              rel: 'stylesheet',
              href: config.template_path_css + "theme.css?v=" + config.nocache
          });
        
        for(var k in config.tpl.html){
            a.getHtml( config.template_path_html + config.tpl.html[k] + '?nochache=' + config.nocache, config.target);
        }
        
        var vHeader = new Vue({
            el: '#topbar-first',
            data: {
                header_site_name: 'Vorder'
            }
            
            
        })
        
        $('#header_site_name').on('click', function(){vHeader.header_site_name = Math.random()})
        
        return;
    };
    
}