function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  const res = [];

  while (queue.length) {
    const vertex = queue.shift();
    res.push(vertex);

    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return res;
}

const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

console.log(bfs(graph, "A")); // ['A', 'B', 'D', 'C', 'E', 'F']
