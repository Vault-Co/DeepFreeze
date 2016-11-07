<script type="text/javascript">
    // literal expression as global namespace to implement typesafe variable declaration.
    // In strict mode, any assignment to a non-writable property, a getter-only property,
    // a non-existing property, a non-existing variable or a non-existing object will throw an error.
    // (harmless on earlier implementations of Javascript that do not support it, no known polyfills that work across multiple browsers)

    "use strict";

    // ------------------- CONSTANTS OBJECT (Application wide) 

    // const definitions for global use in this page
    var _const = {
        prop: function() {}, // prevents implementers from altering through properties

        mimetypes: {
            HTML: 'html',
            GZIP: 'gzip'
        },
        divtags: {
            PAGECONTENT: 'pagecontent'
        }
    };

    // deep freeze function even turns inner objects into frozen classes
    function deepFreeze(o) {
        var prop, propKey;

        Object.freeze(o); // First freeze the object.

        for (propKey in o) {
            prop = o[propKey];

            if (!o.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
                // If the object is on the prototype, not an object, or is already frozen,
                // skip it. Note that this might leave an unfrozen reference somewhere in the
                // object if there is an already frozen object containing an unfrozen object.
                continue;
            }

            deepFreeze(prop); // recursively call deepFreeze.
        }
    }

    // turn the constants object into a read-only structure
    deepFreeze(_const);
    
    // address constants with notation as "_const.PAGECONTENT" etc.
</script>
