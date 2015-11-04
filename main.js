var rightSideWidth;
var height;

var transformations = [{
    id: 'ctl00_ContentPlaceHolder1_inner_layout_row1_cell2',
    property: 'width',
    value: function() {
        return rightSideWidth;
    }
}, {
    id: 'ctl00_ContentPlaceHolder1_pnlworkdayheader',
    property: 'width',
    value: function() {
        return rightSideWidth;
    }
}, {
    id: 'ctl00_ContentPlaceHolder1_pnltime',
    property: 'width',
    value: function() {
        return rightSideWidth;
    }
}, {
    id: 'ctl00_ContentPlaceHolder1_pnltime',
    property: 'height',
    value: function() {
        return height + 'px';
    }
}, {
    id: 'ctl00_ContentPlaceHolder1_pnltotal',
    property: 'width',
    value: function() {
        return rightSideWidth;
    }
}, {
    id: 'ctl00_ContentPlaceHolder1_pnltask',
    property: 'height',
    value: function() {
        return height - 16 + 'px';
    }
}];

if (!window.toggle) {
    var toggle = function() {

        var active = document.getElementsByTagName('body')[0].style.overflow === 'hidden';
        var el;

        if (!active) {
            //make the transformations active
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            el = document.getElementById('ctl00_ContentPlaceHolder1_inner_layout_tbl');
            el.style.position = 'absolute';
            el.style.left = '0';
            el.style.top = '0';

            applyTransformations();
            window.addEventListener('resize', applyTransformations);
        } else {
            document.getElementsByTagName('body')[0].style.overflow = '';
            el = document.getElementById('ctl00_ContentPlaceHolder1_inner_layout_tbl');
            el.style.position = '';

            //apply orig values
            transformations.forEach(function(transform) {
                var el = document.getElementById(transform.id);
                el.style[transform.property] = el.getAttribute('data-ea-orig-' + transform.property);
            });

            window.removeEventListener('resize', applyTransformations);
        }

        active = !active;

    };
}

if (!window.applyTransformations) {
    var applyTransformations = function() {

        rightSideWidth = document.documentElement.clientWidth - 477 + 'px';
        height = document.documentElement.clientHeight - 61;

        transformations.forEach(function(transform) {
            var el = document.getElementById(transform.id);

            //capture original
            if (!el.getAttribute('data-ea-orig-' + transform.property)) {
                el.setAttribute('data-ea-orig-' + transform.property, el.style[transform.property]);
            }

            el.style[transform.property] = transform.value();
        });
    };
}

toggle();
