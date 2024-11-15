// Initialize a WeakMap instance
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (weakMap.has(endpoint)) {
    // Increment the query count for this endpoint
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    // Initialize the query count for this endpoint
    weakMap.set(endpoint, 1);
  }

  // Throw an error if the query count is 5 or more
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
