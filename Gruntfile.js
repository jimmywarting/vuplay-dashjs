module.exports = function (grunt) {
    var dashjsUrls = {
        min: "https://cdnjs.cloudflare.com/ajax/libs/dashjs/2.4.1/dash.all.min.js",
        debug: "https://cdnjs.cloudflare.com/ajax/libs/dashjs/2.4.1/dash.all.debug.js"
    };

    var vuplayUrls = {
        min: "vuplay.min.js",
        debug: "vuplay.js"
    };

    grunt.initConfig({
        dist: "dist",
        package: grunt.file.readJSON("package.json"),

        clean: ["<%= dist %>/*"],
        copy: {
            all: {
                expand: true,
                src: ["index.html", "poster.png"],
                dest: "<%= dist %>/",
                flatten: true
            }
        },
        concat: {
            options: {},
            dist: {
                src: [
                    "externs/BASE64.js",
                    "src/OverrideKeySystemWidevine.js", 
                    "src/OverrideProtectionKeyController.js",
                    "src/vuplay.js"
                ],
                dest: "dist/vuplay.js",
            },
        },
        uglify: {
            js: {
                files: {
                    "dist/vuplay.min.js": ['dist/vuplay.js']
                }
            }
        },
        "string-replace": {
            dist: {
                files: [
                    {
                        src: "dist/index.html",
                        dest: "dist/index.html"
                    }
                ],
                options: {
                    replacements: [
                        {
                            pattern: "{dashjs}",
                            replacement: grunt.option("debug") ? dashjsUrls.debug : dashjsUrls.min
                        },
                        {
                            pattern: "{vuplayjs}",
                            replacement: grunt.option("debug") ? vuplayUrls.debug : vuplayUrls.min
                        }
                    ]
                }
            }
        },

        connect: {
            server: {
                options: {
                    protocol: "https",
                    hostname: "dashjs.vuplay.local.drm.technology",
                    port: 14703,
                    base: "dist",
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-string-replace");
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.registerTask("build", ["clean", "copy", "concat", "uglify", "string-replace"]);
    grunt.registerTask("serve", ["build", "connect"]);
};