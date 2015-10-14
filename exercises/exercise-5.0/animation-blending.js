pc.script.create("animation_blending", function (app) {
    var states = {
        idle: {
            animation: 'YOUR_IDLE_ANIMATION_FILE_HERE'
        },
        animate: {
            animation: 'YOUR_ANIMATED_FILE_HERE'
        }
    };

    var AnimationBlender = function (entity) {
        this.entity = entity;
        this.blendTime = 0.5;

        this.setState('idle');

        app.keyboard.on(pc.EVENT_KEYDOWN, this.keyDown, this);
        app.keyboard.on(pc.EVENT_KEYUP, this.keyUp, this);
    };

    AnimationBlender.prototype = {
        setState: function (state) {
            this.state = state;
            // Set the current animation, taking 0.2 seconds to blend from
            // the current animation state to the start of the target animation.
            this.entity.animation.play(states[state].animation, this.blendTime);
        },

        keyDown: function (e) {
            if ((e.key === pc.KEY_S) && (this.state !== 'animate')) {
                this.setState('animate');
            }
        },

        keyUp: function (e) {
            if ((e.key === pc.KEY_S) && (this.state === 'animate')) {
                this.setState('idle');
            }
        }
    };

    return AnimationBlender;
});
