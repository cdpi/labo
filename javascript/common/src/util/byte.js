//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function clamp(value) {
    return Math.min(255, Math.max(0, value));
}
function swap(value) {
    return ((value & 0xFF) << 8) | ((value >> 8) & 0xFF);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 565
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function pack565(values) {
    const byte1 = (clamp(values[0]) >> 3) & 0x1F;
    const byte2 = (clamp(values[1]) >> 2) & 0x3F;
    const byte3 = (clamp(values[2]) >> 3) & 0x1F;
    return (byte1 << 11) | (byte2 << 5) | byte3;
}
/*
function unpack565(value:number):Array<number>
    {
    const byte1:number = (value >> 11 & 0x1F) << 3;
    const byte2:number = (value >> 5 & 0x3F) << 2;
    const byte3:number = (value & 0x1F) << 3;
    }
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 888
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function pack888(values) {
    const byte1 = clamp(values[0]);
    const byte2 = clamp(values[1]);
    const byte3 = clamp(values[2]);
    return (byte1 << 16) | (byte2 << 8) | byte3;
}
function unpack888(value) {
    const byte1 = (value >>> 16) & 0xFF;
    const byte2 = (value >>> 8) & 0xFF;
    const byte3 = value & 0xFF;
    return new Array(byte1, byte2, byte3);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8888
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function pack8888(values) {
    // TODO: clamp
    return ((values[0] << 24) | (values[1] << 16) | (values[2] << 8) | values[3]) >>> 0;
}
function unpack8888(value) {
    const byte1 = (value >>> 24) & 0xFF;
    const byte2 = (value >>> 16) & 0xFF;
    const byte3 = (value >>> 8) & 0xFF;
    const byte4 = value & 0xFF;
    return new Array(byte1, byte2, byte3, byte4);
}
/*
function sdsd():number
    {
    const buffer:ArrayBuffer = new ArrayBuffer(4);

    const color:Uint32Array<ArrayBuffer> = new Uint32Array(buffer);

    const components:Uint8ClampedArray<ArrayBuffer> = new Uint8ClampedArray(buffer);

    components[0] = 255;
    components[1] = 255;
    components[2] = 255;
    components[3] = 255;

    const hex = color[0].toString(16);

    return color[0];
    }
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { clamp, swap, pack565, pack888, unpack888, pack8888, unpack8888 };
