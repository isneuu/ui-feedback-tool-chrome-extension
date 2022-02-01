(function() {

    let activate = true;


    var checkdiv = document.getElementById("uiclose_extension_btn");
    if(checkdiv){
        checkdiv.parentNode.removeChild(checkdiv);
    }

    var close = document.createElement('div');
    
    close.setAttribute("id", "uiclose_extension_btn");
    close.innerHTML = 'Close';

    document.body.appendChild(close);




    function copying() {
        var div = document.createElement('div');
        div.setAttribute("id", "uicopy_extension_btn");
        div.innerHTML = 'Copying...';
        document.body.appendChild(div);
        setTimeout(() => {
            div.parentNode.removeChild(div);
        }, 5000);
    }

    function done() {
        var div = document.getElementById("uicopy_extension_btn");
        div.innerHTML = 'Copied!';

        setTimeout(() => {
            div.parentNode.removeChild(div);
        }, 2000);
    }

    document.addEventListener('click', function(e) {

        e = e || window.event;

        var node = e.target;

        if (node.id == 'uiclose_extension_btn') {
            console.log('close');
            activate = false;
          
            
            try {
                
                    node.parentNode.removeChild(node);

             } 
             catch ( e ) {
              
             }

        } else {
            if (activate == true) {


                copying();
                e.target.style.outline = 'none';
                domtoimage.toBlob(node)
                    .then(function(blob) {

                        navigator.clipboard.write([
                            new ClipboardItem({
                                'image/png': blob
                            })
                        ]).then(function() {
                            done();
                            e.target.style.outline = '1px solid blue';
                        })
                    });
            }
        }




    });


    document.addEventListener('mouseover', function(e) {
        if (activate == true) {
            e = e || window.event;

            var node = e.target;
            node.style.outline = "1px solid blue";
        }
    });

    document.addEventListener('mouseout', function(e) {
        if (activate == true) {
            e = e || window.event;

            var node = e.target;
            node.style.outline = "none";
        }
    });











})();