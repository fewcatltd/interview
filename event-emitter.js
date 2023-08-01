// Event Emitter


// Your implementation

function test() {
  const emitter = new EventEmitter()

  emitter.on('glue', (...args) => {
    console.log('glue:', args);
  })

  emitter.on('sum', (...args) => {
    console.log('sum:', args);
  })

  emitter.emit('glue', ['foo', 'bar'])
  emitter.emit('sum', [1, 2, 3])
}

 /*
  Expected output to console:
  glued: foo-bar
  sum: 6
  */
