var eventEmitter =require('events').EventEmitter
var life=new eventEmitter
life.setMaxListeners(20)
life.on('a',function (argument) {
	console.log(argument)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
life.on('a',function(o){
	console.log(o)
})
console.log(life.listeners('a').length)
console.log(eventEmitter.listenerCount(life,'a'))
life.emit('a','laoli')
