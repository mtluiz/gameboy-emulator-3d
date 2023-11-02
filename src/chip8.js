const Chip8CPU = {
    memory: new Uint8Array(4096),
    registers: new Uint8Array(16),
    stack: new Uint16Array(16),
    pc: 0x200,
    sp: -1,
    i: 0,

    timers: {
        dt: 0,
        st: 0
    },
    instructions: {
        
    }
}



