let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
  let killerRabbit = Object.create(protoRabbit);
  killerRabbit.type = "killer";
  killerRabbit.speak("SKREEEE!");
  // → The killer rabbit says 'SKREEEE!'

  let protoRabbit2 = {
    speak : function(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    } 
  };
  let killerRabbit2 = Object.create(protoRabbit);
  killerRabbit2.type = "killer2";
  killerRabbit2.speak("SKREEEE!2");

  let protoRabbit3 = {
    speak : function(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    } 
  };
  let killerRabbit3 = protoRabbit3;
  killerRabbit3.type = "killer3";
  killerRabbit3.speak("SKREEEE!3");
  console.log(Object.getPrototypeOf(killerRabbit2));
  console.log(Object.getPrototypeOf(killerRabbit3));