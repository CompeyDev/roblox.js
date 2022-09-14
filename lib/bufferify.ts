export function toBuffer(integer: number) {
  var length = Math.ceil(Math.log(integer) / Math.log(2) / 8); // How much byte to store integer in the buffer
  var buffer = new Buffer(length);
  var arr = []; // Use to create the binary representation of the integer

  while (integer > 0) {
    var temp = integer % 2;
    arr.push(temp);
    integer = Math.floor(integer / 2);
  }

  console.log(arr);

  var counter = 0;
  var total = 0;

  for (var i = 0, j = arr.length; i < j; i++) {
    if (counter % 8 == 0 && counter > 0) {
      // Do we have a byte full ?
      buffer[length - 1] = total;
      total = 0;
      counter = 0;
      length--;
    }

    if (arr[i] == 1) {
      // bit is set
      total += Math.pow(2, counter);
    }
    counter++;
  }

  buffer[0] = total;

  console.log(buffer);
}
