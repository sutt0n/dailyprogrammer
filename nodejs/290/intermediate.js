
/* func defs */
var print_reg = function(reg) {
  return reg.join('').
    .replace('0','.')
    .replace('1','*');
}

/* obj defs */
var asm = {
  regs: {},
  
  /* create new reg arr */
  createRegister: function() {
    return (new Array(8)).fill(0);
  },

  /* handle instruction */
  handleInstruction: function(opcode, arg1, reg) {
    if(!this.regs.hasOwnProperty(reg)) {
      regs[reg] = this.createRegister();
    }
    console.log(opcode);
  },


};

/**
 * main
  */
var inputs = [
  /* pt 1 input */
  '  ld a,14',
  '  out (0),a',
  '  ld a,12',
  '  out (0),a',
  '  ld a,8',
  '  out (0),a',
  '',
  '  out (0),a',
  '  ld a,12',
  '  out (0),a',
  '  ld a,14',
  '  out (0),a',
  /* pt 2 input */
  '  ld b,3',
  '',
  'triple:',
  '  ld a,126',
  '  out (0),a',
  '  ld a,60',
  '  out (0),a',
  '  ld a,24',
  '  out (0),a',
  '  djnz triple',
  /* input 3 */
  '  ld a,1',
  '  ld b,9',
  '',
  'loop:',
  '  out (0),a',
  '  rlca',
  '  djnz loop',
  /* input 4 */
  '  ld a,2',
  '  ld b,9',
  '',
  'loop:',
  '  out (0),a',
  '  rrca',
  '  djnz loop'
];

inputs.forEach(function(input, idx, arr) {
  /* trim input */
  input = input.trim();

  /* parse */
  var line = input.split(',');
  var instr = line[0];
  var arg = line[1];
  var op = '';

  /* check if 'out' or 'ld' instr */
  if(call.strpos(' ') !== -1) {
    var split = call.split(' ');
    instr = split[0];
    op = split[1];
  }

  /* handle instruction */
  asm.handleInstruction(instr, op, arg);
});
