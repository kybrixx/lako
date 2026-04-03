const queue = [];

export function enqueue(item) {
  queue.push(item);
}

export function dequeue() {
  return queue.shift();
}

export function peekQueue() {
  return queue.length ? queue[0] : null;
}
