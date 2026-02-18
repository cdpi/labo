import { getRandom } from "../util/random.js";
import { TWOPI } from "./constants.js";
import { Point } from "./point.js";
function getRandomRadiusModifier(minimum, maximum) {
    return (radius, angle, index) => {
        return getRandom(minimum, maximum);
    };
}
function getWaveRadiusModifier() {
    return (radius, angle, index) => {
        return radius + (Math.sin(angle * 4) * 10);
    };
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Polygon {
    n;
    constructor(n) {
        this.n = n;
    }
    getVertices(cx, cy, radius, modifier = null) {
        const vertices = new Array();
        const step = TWOPI / this.n;
        for (let i = 0; i < this.n; i++) {
            const angle = i * step;
            let newRadius = radius;
            if (modifier) {
                newRadius = modifier(newRadius, angle, i);
            }
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;
            vertices.push(new Point(x, y));
        }
        return vertices;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { getRandomRadiusModifier, getWaveRadiusModifier, Polygon };
