import React, { useEffect, useRef } from 'react';

// Shader sources
const vertexShaderSource = `#version 300 es
    in vec2 position;
    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
    }
`;

const fragmentShaderSource = `#version 300 es
    precision highp float;

    uniform float u_time;
    uniform vec2 u_resolution;
    uniform float u_scale;
    uniform float u_rotation;
    uniform vec4 u_color1;
    uniform vec4 u_color2;
    uniform vec4 u_color3;
    uniform float u_proportion;
    uniform float u_softness;
    uniform float u_shape;
    uniform float u_shapeScale;
    uniform float u_distortion;
    uniform float u_swirl;
    uniform float u_swirlIterations;

    out vec4 fragColor;

    #define PI 3.14159265358979323846
    #define TWO_PI 6.28318530718

    vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
    }

    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);

        float x1 = mix(a, b, u.x);
        float x2 = mix(c, d, u.x);
        return mix(x1, x2, u.y);
    }

    vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
        vec3 color1 = c1.rgb * c1.a;
        vec3 color2 = c2.rgb * c2.a;
        vec3 color3 = c3.rgb * c3.a;

        float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);
        float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);

        vec3 blended_color_2 = mix(color1, color2, r1);
        float blended_opacity_2 = mix(c1.a, c2.a, r1);

        vec3 c = mix(blended_color_2, color3, r2);
        float o = mix(blended_opacity_2, c3.a, r2);
        return vec4(c, o);
    }

    void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        
        float t = u_time;
        float noise_scale = .0005 + .006 * u_scale;

        uv -= .5;
        uv *= (noise_scale * u_resolution); // Aspect ratio correction happens here essentially
        uv = rotate(uv, u_rotation * .5 * PI);
        // We don't have u_pixelRatio, assume 1.0 or baked into resolution
        uv += .5;

        float n1 = noise(uv * 1. + t * 0.5);
        float n2 = noise(uv * 2. - t * 0.5);
        float angle = n1 * TWO_PI;
        uv.x += 4. * u_distortion * n2 * cos(angle);
        uv.y += 4. * u_distortion * n2 * sin(angle);

        float iterations_number = ceil(clamp(u_swirlIterations, 1., 30.));
        for (float i = 1.; i <= 30.; i++) {
            if(i > iterations_number) break;
            uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);
            uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);
        }

        float proportion = clamp(u_proportion, 0., 1.);

        float shape = 0.;
        float mixer = 0.;
        
        // Shape: 0 = Checks, 1 = Stripes, 2 = Edge
        if (u_shape < .5) {
            vec2 checks_shape_uv = uv * (.5 + 3.5 * u_shapeScale);
            shape = .5 + .5 * sin(checks_shape_uv.x) * cos(checks_shape_uv.y);
            mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
        } else if (u_shape < 1.5) {
            vec2 stripes_shape_uv = uv * (.25 + 3. * u_shapeScale);
            float f = fract(stripes_shape_uv.y);
            shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);
            mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
        } else {
            float sh = 1. - uv.y; // Simplified from original
            sh -= .5;
            sh /= (noise_scale * u_resolution.y); // Approximate normalization
            sh += .5;
            float shape_scaling = .2 * (1. - u_shapeScale);
            shape = smoothstep(.45 - shape_scaling, .55 + shape_scaling, sh + .3 * (proportion - .5));
            mixer = shape;
        }

        vec4 color_mix = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);

        fragColor = vec4(color_mix.rgb, 1.0); // Force full opacity 
    }
`;

// Helper to convert hex to vec4
const hexToRgba = (hex, alpha = 1) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    return [r / 255, g / 255, b / 255, alpha];
};

const AnimatedPlasma = ({
    color1 = "#B566FF",
    color2 = "#000000",
    color3 = "#000000",
    rotation = 0,
    proportion = 0.63,
    scale = 0.75,
    speed = 0.5, // Reduced for sanity, original was high because of likely different time scale
    distortion = 0.5, // normalized to 0-1 range roughly, shader expects higher?
    swirl = 0.61,
    swirlIterations = 5,
    softness = 1.0,
    shape = 0, // Checks
    shapeScale = 0.28,
}) => {
    const canvasRef = useRef(null);
    const frameIdRef = useRef(null);
    const startTimeRef = useRef(Date.now());

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext('webgl2');

        if (!gl) {
            console.error('WebGL2 not supported');
            return;
        }



        // Compile shaders
        const vert = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vert, vertexShaderSource);
        gl.compileShader(vert);
        if (!gl.getShaderParameter(vert, gl.COMPILE_STATUS)) {
            console.error('Vertex shader error:', gl.getShaderInfoLog(vert));
            return;
        }

        const frag = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(frag, fragmentShaderSource);
        gl.compileShader(frag);
        if (!gl.getShaderParameter(frag, gl.COMPILE_STATUS)) {
            console.error('Fragment shader error:', gl.getShaderInfoLog(frag));
            return;
        }



        const program = gl.createProgram();
        gl.attachShader(program, vert);
        gl.attachShader(program, frag);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(program));
            return;
        }

        gl.useProgram(program);



        // Buffer setup
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1,
            1, -1,
            -1, 1,
            1, 1,
        ]), gl.STATIC_DRAW);

        const positionAttrib = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionAttrib);
        gl.vertexAttribPointer(positionAttrib, 2, gl.FLOAT, false, 0, 0);

        // Uniform locations
        const uniforms = {
            u_time: gl.getUniformLocation(program, 'u_time'),
            u_resolution: gl.getUniformLocation(program, 'u_resolution'),
            u_scale: gl.getUniformLocation(program, 'u_scale'),
            u_rotation: gl.getUniformLocation(program, 'u_rotation'),
            u_color1: gl.getUniformLocation(program, 'u_color1'),
            u_color2: gl.getUniformLocation(program, 'u_color2'),
            u_color3: gl.getUniformLocation(program, 'u_color3'),
            u_proportion: gl.getUniformLocation(program, 'u_proportion'),
            u_softness: gl.getUniformLocation(program, 'u_softness'),
            u_shape: gl.getUniformLocation(program, 'u_shape'),
            u_shapeScale: gl.getUniformLocation(program, 'u_shapeScale'),
            u_distortion: gl.getUniformLocation(program, 'u_distortion'),
            u_swirl: gl.getUniformLocation(program, 'u_swirl'),
            u_swirlIterations: gl.getUniformLocation(program, 'u_swirlIterations'),
        };

        const render = () => {
            if (!canvas) return;

            // Resize logic
            const displayWidth = canvas.clientWidth;
            const displayHeight = canvas.clientHeight;
            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }

            const currentTime = (Date.now() - startTimeRef.current) * 0.001 * speed;

            gl.uniform1f(uniforms.u_time, currentTime);
            gl.uniform2f(uniforms.u_resolution, canvas.width, canvas.height);
            gl.uniform1f(uniforms.u_scale, scale);
            gl.uniform1f(uniforms.u_rotation, rotation);

            gl.uniform4fv(uniforms.u_color1, hexToRgba(color1));
            gl.uniform4fv(uniforms.u_color2, hexToRgba(color2));
            gl.uniform4fv(uniforms.u_color3, hexToRgba(color3));

            gl.uniform1f(uniforms.u_proportion, proportion);
            gl.uniform1f(uniforms.u_softness, softness);
            gl.uniform1f(uniforms.u_shape, shape);
            gl.uniform1f(uniforms.u_shapeScale, shapeScale);
            gl.uniform1f(uniforms.u_distortion, distortion);
            gl.uniform1f(uniforms.u_swirl, swirl);
            gl.uniform1f(uniforms.u_swirlIterations, swirlIterations);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

            frameIdRef.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
            gl.deleteProgram(program);
            gl.deleteShader(vert);
            gl.deleteShader(frag);
        };
    }, [color1, color2, color3, rotation, proportion, scale, speed, distortion, swirl, swirlIterations, softness, shape, shapeScale]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height: '100%',
                display: 'block',
            }}
        />
    );
};

export default AnimatedPlasma;
